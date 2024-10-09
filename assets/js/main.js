/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
   navToggle = document.getElementById("nav-toggle"),
   navclose = document.getElementById("nav-close");



if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navclose) {
    navclose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER SHOE ===============*/
let swiperShoes = new Swiper(".home-swiper", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            translate: [-100, 0, -500],
            opacity: 0,
        },
        next: {
            transition: [100, 0, -500],
            opacity: 0,
        },
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*=============== SHADOW HEADER ===============*/
