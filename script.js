function toggleMenu() {
  const menuContainer = document.getElementById('menu-container');
  if (menuContainer.innerHTML === "") {
    fetch('menu.html')
      .then(response => response.text())
      .then(data => {
        menuContainer.innerHTML = data;
      })
      .catch(error => console.error('Error fetching menu:', error));
  } else {
    menuContainer.innerHTML = "";
  }
}
