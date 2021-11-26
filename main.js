import './styles/reset.css'
import './styles/main.scss'

const buttonCaroussel = document.querySelector('.carousselBtn'),
    sliderImages = document.querySelectorAll('.insideImg img'),
    sliderContainer = document.querySelector('.insideImg'),
    slides = document.querySelectorAll('.carousselTextCard'),
    tracker = document.querySelectorAll('.trackerItem')

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
        sliderImages[currentPicture].style.opacity = 1;
        document.querySelector(".carousselTextCard:not(.noShow)").classList.add("noShow")
        slides[currentPicture].classList.remove("noShow")
        document.querySelector(".trackerItem:not(.notExtended").classList.add("notExtended")
        tracker[currentPicture].classList.remove("notExtended")
        tracker[currentPicture].style.transition = "all 1s"

        sliderImages[sliderImages.length - 1].style.opacity = 0;

    } else {
        sliderImages[currentPicture].style.opacity = 1;
        document.querySelector(".carousselTextCard:not(.noShow)").classList.add("noShow")
        sliderImages[currentPicture - 1].style.opacity = 0;
        slides[currentPicture].classList.remove("noShow")
        document.querySelector(".trackerItem:not(.notExtended)").classList.add("notExtended")
        tracker[currentPicture].classList.remove("notExtended")
        tracker[currentPicture].style.transition = "all 1s"

    }
})



