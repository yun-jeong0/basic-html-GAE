// Add CSS styles dynamically
const style = document.createElement('style');
style.textContent = `
[class*="carousel"] {
    width: 100%;
    height: 200px;
    overflow: hidden;
}
[class*="carousel"] img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;
document.head.append(style);

// JavaScript for carousel functionality
let currentIndex = 0;
const carousels = document.querySelectorAll('[class*="carousel"]');

carousels.forEach(carousel => {
    const images = carousel.getElementsByTagName('img');
    images[currentIndex].style.display = 'block'; // Ensure the first image is visible initially
    setInterval(() => {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'block';
    }, 3000); // Change image every 3 seconds
});