// Load the menu bar for all pages
fetch('../menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu-bar').innerHTML = data;

        // Add event listeners for the menu icon
        const menuIcon = document.querySelector('.menu-icon');
        const menuContent = document.getElementById('menu-content');

        menuIcon.addEventListener('click', function() {
            toggleMenu();
        });

        document.addEventListener('click', function(event) {
            if (!menuContent.contains(event.target) && !menuIcon.contains(event.target)) {
                menuContent.classList.remove('open');
            }
        });
    });

function toggleMenu() {
    const menuContent = document.getElementById('menu-content');
    menuContent.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('design-canvas');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('color-picker');
    const saveButton = document.getElementById('save-design');

    // Set initial canvas background color
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update canvas color based on user selection
    colorPicker.addEventListener('input', (event) => {
        ctx.fillStyle = event.target.value;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

    // Save the design as an image
    saveButton.addEventListener('click', () => {
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'design.png';
        link.click();
    });
});
