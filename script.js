document.addEventListener("DOMContentLoaded", function () {
    fetch("../menu.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-placeholder").innerHTML = data;

            setTimeout(() => {
                const menuIcon = document.getElementById("menu-icon");
                const menuContent = document.getElementById("menu-content");
                const iconImg = document.getElementById("menu-icon-img");

                if (!menuIcon || !menuContent) {
                    console.error("Menu elements not found");
                    return;
                }

                // Toggle menu
                menuIcon.addEventListener("click", function () {
                    const expanded = menuIcon.getAttribute("aria-expanded") === "true";
                    menuContent.classList.toggle("open");
                    menuIcon.setAttribute("aria-expanded", !expanded);
                    iconImg.src = expanded ? "../image/menu.png" : "../image/menu-close.png";
                });

                // Close menu when clicking outside
                document.addEventListener("click", function (event) {
                    if (!menuIcon.contains(event.target) && !menuContent.contains(event.target)) {
                        menuContent.classList.remove("open");
                        menuIcon.setAttribute("aria-expanded", "false");
                    }
                });
            }, 100); // Delay to ensure menu loads
        })
        .catch(error => console.error("Error loading menu:", error));
});
