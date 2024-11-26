// Add CSS styles dynamically
const style = document.createElement('style');
style.textContent = `
.carousel {
    width: 100%;
    height: 200px;
    overflow: hidden;
}
.carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;
document.head.append(style);

// JavaScript for carousel functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
setInterval(() => {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}, 3000); // Change image every 3 seconds