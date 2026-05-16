import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import images from './data.js'

const classNameModal= 'modal';
const classNameModalImage = 'modal-image';
const classNameGallery = 'gallery';
const classNameGalleryItem = 'gallery-item';
const classNameGalleryLink = 'gallery-link';
const classNameGalleryImage = 'gallery-image';

const gallery = document.querySelector(`.${classNameGallery}`);

const markup = images.map(({preview, original, description}) => {
  return `
    <li class="${classNameGalleryItem}">
      <a class="${classNameGalleryLink}" href="${original}">
        <img
          class="${classNameGalleryImage}"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
});

gallery.insertAdjacentHTML('beforeend', markup.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
/*
lightbox.on('shown.simplelightbox', function() {
  document.addEventListener('click', onMouseClick);
});

lightbox.on('closed.simplelightbox', function() {
  document.removeEventListener('click', onMouseClick);
});

function onMouseClick(event) {
  console.log(event.target);

  if (event.target.closest('.sl-image img'))
    lightbox.close();
}
*/