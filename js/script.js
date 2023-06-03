// promo

const rusLang = document.querySelector('.promo__info_languages-rus');
const engLang = document.querySelector('.promo__info_languages-eng');

engLang.addEventListener('click', (event) => {
    console.log(event)
    rusLang.classList.remove('activeLanguage');
    engLang.classList.add('activeLanguage');

});

rusLang.addEventListener('click', (event) => {
    console.log(event)
    engLang.classList.remove('activeLanguage');
    rusLang.classList.add('activeLanguage');

});
