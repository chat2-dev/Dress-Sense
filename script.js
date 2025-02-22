document.addEventListener("DOMContentLoaded", function() {
    fetch("menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;

            // Toggle menu visibility
            const menuToggle = document.getElementById("menu-toggle");
            const menuList = document.getElementById("menu-list");

            menuToggle.addEventListener("click", function() {
                menuList.style.display = menuList.style.display === "block" ? "none" : "block";
            });
        })
        .catch(error => console.error("Error loading menu:", error));
});
                                        
