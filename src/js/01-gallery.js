// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
// adding gallery to html
galleryItems.forEach((image) => {
  galleryList.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
      <a class=gallery__link href="${image.original}">
        <img src="${image.preview}" alt="${image.description}" class="gallery__image" data-source="${image.original}"/>
      </a>
    </div>`
  );
});

galleryList.addEventListener("click", imageModal);

//Zmiana wartości atrybutu src elementu <img> w oknie modalnym przed otworzeniem. Użyj gotowego znacznika okna modalnego z obrazem z przykładów biblioteki basicLightbox.
function imageModal(event) {
  console.log(event.target);
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault(); //zablokowanie domyślnego przekierowania na inną stronę
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
      `);

  instance.show();

//Dodaj zamknięcie okna modalnego po naciśnięciu klawiszy Escape. Zrób tak, aby nasłuchiwanie klawiatury było aktywne tylko wtedy, gdy otwarte jest okno modalne. W bibliotece basicLightbox istnieje metoda na programowe zamknięcie okna modalnego.
  document.addEventListener("keydown", function escapeKey(event) {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", escapeKey);
      console.log("esc");
    }
  });
}