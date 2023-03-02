import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryItemElMarkup = crateGalleryItemElMarkup(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", galleryItemElMarkup);

galleryEl.addEventListener("click", handleModal);

function crateGalleryItemElMarkup(items) {
	return items
		.map(
			item => `
			<div class="gallery__item">
  			<a class="gallery__link" href="${item.original}">
    			<img
      			class="gallery__image"
      			src="${item.preview}"
      			data-source="${item.original}"
      			alt="${item.description}"
    			/>
  			</a>
			</div>`,
		)
		.join("");
}

function handleModal(e) {
	e.preventDefault();

	if (e.target.nodeName !== "IMG") return;

	const modalEL = createModalMarkup(e);

	modalEL.show();

	closeModalOnEsc(galleryEl, modalEL);
}

function createModalMarkup(e) {
	return basicLightbox.create(`<img width="1280" src="${e.target.getAttribute("data-source")}">`);
}

function closeModalOnEsc(parent, modal) {
	parent.addEventListener("keydown", e => {
		if (e.code === "Escape") {
			modal.close();
		}
	});
}
