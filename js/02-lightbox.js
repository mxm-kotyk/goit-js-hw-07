import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryItemElMarkup = createGalleryItemElMarkup(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", galleryItemElMarkup);

function createGalleryItemElMarkup(items) {
	return items
		.map(
			item => `
            <a class="gallery__item" href="${item.original}">
                <img 
                    class="gallery__image" 
                    src="${item.preview}" 
                    alt="${item.description}" 
                />
            </a>`,
		)
		.join("");
}

const gallery = new SimpleLightbox(".gallery a", {
	captions: true,
	captionSelector: "img",
	captionType: "attr",
	captionsData: "alt",
	captionPosition: "bottom",
	captionDelay: 250,
});
