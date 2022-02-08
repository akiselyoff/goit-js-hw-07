import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
}

galleryEl.insertAdjacentHTML('beforeend', galleryItemsMarkup);
galleryEl.addEventListener('click', onClickGalleryItem);

function onClickGalleryItem(event) {
  event.preventDefault();

  const srcImg = event.target.dataset.source;

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  modal.show(srcImg);
}

console.log(galleryItemsMarkup);

const modal = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);
