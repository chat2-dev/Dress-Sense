function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function toggleMenu() {
  const menuBar = document.querySelector(".menu-bar");
  const menuIcon = document.querySelector(".menu-icon");

  menuBar.classList.toggle("open");
  menuIcon.classList.toggle("open");
}

