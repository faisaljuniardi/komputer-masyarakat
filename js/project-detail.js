// Project Detail Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Thumbnail image click handler
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image img');
    
    if(thumbnails.length > 0 && mainImage) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked thumbnail
                this.classList.add('active');
                
                // Get the large image source (in a real app, this would come from data attribute)
                const thumbImg = this.querySelector('img');
                const newSrc = thumbImg.src.replace('-thumb', '-large');
                
                // Change main image with fade effect
                mainImage.style.opacity = 0;
                setTimeout(() => {
                    mainImage.src = newSrc;
                    mainImage.style.opacity = 1;
                }, 300);
            });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});