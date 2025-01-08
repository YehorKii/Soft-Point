"use strict"

const iconMenu = document.querySelector('.body__burger');
const menuBody = document.querySelector('.body__burger-body');

if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}