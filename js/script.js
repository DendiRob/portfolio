const burger = document.querySelector('.burger');
const aside = document.querySelector('.aside');
const closeMenu = document.querySelector('.aside__close')
const asideMenuArr = document.querySelectorAll('.aside__menu-item')

burger.addEventListener('click',() =>{
    aside.classList.add('activeMenu');
});

closeMenu.addEventListener('click',() => {
    aside.classList.remove('activeMenu');
});

asideMenuArr.forEach((item) => {
    item.addEventListener('click', ()=> {
        aside.classList.remove('activeMenu')
    });
});
window.addEventListener('click', (item) => {
    console.log(item.target)
})