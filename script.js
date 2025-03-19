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

    const canvas = document.getElementById("design-canvas");
    const ctx = canvas.getContext("2d");

    // Example: Draw a simple rectangle on the canvas
    ctx.fillStyle = "#d4af37";
    ctx.fillRect(100, 100, 200, 150);

    // Add event listeners for fabric selection buttons
    const fabricButtons = document.querySelectorAll(".fabric-option button");
    fabricButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert(`You selected ${this.textContent}`);
        });
    });

    // Add event listener for save design button
    const saveButton = document.getElementById("save-design");
    saveButton.addEventListener("click", function () {
        const dataURL = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "design.png";
        link.click();
    });
});
