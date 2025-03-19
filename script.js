fetch("../menu.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("menu-placeholder").innerHTML = data;
    });

// Load the menu bar for all pages
fetch('../menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu-bar').innerHTML = data;

        // Add event listeners for the menu icon
        const menuIcon = document.querySelector('.menu-icon');
        const menuContent = document.getElementById('menu-content');

        menuIcon.addEventListener('click', function() {
            menuContent.classList.toggle('open');
        });

        document.addEventListener('click', function(event) {
            if (!menuContent.contains(event.target) && !menuIcon.contains(event.target)) {
                menuContent.classList.remove('open');
            }
        });
    });
