let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
setInterval(() => {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}, 3000); // Change image every 3 seconds
