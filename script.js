function toggleMenu() {
    const menuBar = document.querySelector('.menu-bar');
    const menuContent = document.getElementById('menu-content');
    menuBar.classList.toggle('open'); // Toggle menu open/close
    
    // Toggle menu content visibility
    if (menuBar.classList.contains('open')) {
        menuContent.style.display = 'block'; // Show menu when open
    } else {
        menuContent.style.display = 'none'; // Hide menu when closed
    }
}
