
let iconeBurgerMenu = document.querySelector(".menu-mobile__icone");
let menuLinks = document.querySelector(".menu-mobile__links");
let icon = iconeBurgerMenu.querySelector('.menu-mobile__icone i');

iconeBurgerMenu.addEventListener("click", function() {
    menuLinks.classList.toggle("open");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-x");  
});


document.addEventListener("click", function(event) {
   //verifica se o elemento clicado no DOM esta dentro do elemento menu. se não tiver ele remove
    if (!menuLinks.contains(event.target) && !iconeBurgerMenu.contains(event.target)) {
        menuLinks.classList.remove("open");
        icon.classList.remove("fa-x");
        icon.classList.add("fa-bars");
    }
});

