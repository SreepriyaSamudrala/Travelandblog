const imageList = document.querySelector(".image-list");
const totalImages = document.querySelectorAll(".image-item").length;

let currentIndex = 0;

function autoSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    imageList.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(autoSlide, 3000); 
