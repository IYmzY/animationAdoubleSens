import './styles/reset.css'
import './styles/main.scss'

const buttonCaroussel = document.querySelector('.carousselBtn'),
    sliderImages = document.querySelectorAll('.insideImg img'),
    sliderContainer = document.querySelector('.insideImg'),
    slides = document.querySelectorAll('.carousselTextCard')
let currentPicture = 0,
    slide



sliderContainer.addEventListener("mouseover", () => {
    clearInterval(slide)
})

buttonCaroussel.addEventListener("click", (e) => {
    e.preventDefault()
    currentPicture++ //La valeur de currentPicture augmente de 1
    if (currentPicture >= sliderImages.length) {
        currentPicture = 0
        sliderImages[currentPicture].style.opacity = 1; //Augmenter l'opacité de l'image du HomePod en fonction de la position
        document.querySelector(".carousselTextCard:not(.noShow)").classList.add("noShow") // Classe noShow pour les éléments textes
        slides[currentPicture].classList.remove("noShow")
        sliderImages[sliderImages.length - 1].style.opacity = 0; // Mettre l'opacité à 0 pour l'image du HomePod lorsqu'une autre est sélectionnée
    } else {
        sliderImages[currentPicture].style.opacity = 1;
        document.querySelector(".carousselTextCard:not(.noShow)").classList.add("noShow")
        sliderImages[currentPicture - 1].style.opacity = 0;
        slides[currentPicture].classList.remove("noShow")
    }
})



