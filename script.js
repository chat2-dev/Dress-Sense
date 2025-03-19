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
    });
