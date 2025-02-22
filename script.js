

        document.getElementById('menu-icon').addEventListener('click', function() {

            var menu = document.getElementById('menu-content');

            var expanded = this.getAttribute('aria-expanded') === 'true';

            menu.classList.toggle('open');

            this.setAttribute('aria-expanded', !expanded);

            var iconImg = document.getElementById('menu-icon-img');

            if (expanded) {

                iconImg.src = '../image/menu.png'; // Change to menu icon

            } else {

                iconImg.src = '../image/menu.png'; // Change to close icon

            }

        });

    



