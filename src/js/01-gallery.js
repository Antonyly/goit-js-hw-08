// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryMarkup = createGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createGallery(img) {
  return img
    .map(({ original, preview, description }) => {
      return `
        <a
        class="gallery__item"
        href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}" />
        </a>
    `;
    })
    .join("");
};
  
new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionDelay: 250,
});