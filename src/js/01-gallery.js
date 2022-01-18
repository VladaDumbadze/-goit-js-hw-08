import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const markupLight =
    galleryItems
        .map(({original, preview, description}) => `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`)
        .join('');

 


function onPicClickLight(event) {
    window.addEventListener('keydown', keyEsc);
    event.preventDefault();
    const isPic = event.target.classList.contains("gallery__image");
    if (!isPic) return;
    let gallery = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: `250`}) ;
    
    function keyEsc(event) {
        if (event.code === 'Escape') {
            lightbox.close();
        }
    }
};
const galleryLightBox = document.querySelector(".gallery");
galleryLightBox.insertAdjacentHTML('beforeend', markupLight);
 
galleryLightBox.addEventListener(`click`, onPicClickLight)
    