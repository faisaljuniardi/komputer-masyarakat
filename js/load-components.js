// Fungsi untuk memuat header dan footer
function loadComponents() {
    // Load header
    fetch('partials/header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            
            // Set active link berdasarkan halaman saat ini
            const currentPage = window.location.pathname.split('/').pop();
            const activeLink = document.getElementById(`${currentPage.replace('.html', '')}-link`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
            
            // Mobile menu toggle
            const menuToggle = document.querySelector('.menu-toggle');
            const nav = document.querySelector('nav ul');
            
            menuToggle.addEventListener('click', () => {
                nav.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });
        });
    
    // Load footer
    fetch('partials/footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        });
}

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', loadComponents);