$(document).ready(function(){
    $('.cart-about-book__image__container').slick({
        dots: true,
        prevArrow: $('.cart__left'),
        nextArrow: $('.cart__right'),
    });
});

const mainPageBooks = document.querySelectorAll('.book-container__item');

for (let item of mainPageBooks) {

    item.addEventListener('mouseenter', function(e){
        let mainPageBooksAttr = e.target.getAttribute('data-index-books');
        let mainPageBooksImg = document.querySelector('.book-container__img[data-index-books=' + mainPageBooksAttr  + ']');
        let mainPageBooksDesc = document.querySelector('.book-container__desc[data-index-books=' + mainPageBooksAttr  + ']');
        let mainPageBooksMore = document.querySelector('.book-container__more[data-index-books=' + mainPageBooksAttr  + ']');

        mainPageBooksImg.style.display = 'none';
        mainPageBooksDesc.style.display = 'flex';
        mainPageBooksMore.style.opacity = '100%';
    })

    item.addEventListener('mouseleave', function(e){
        let mainPageBooksAttr = e.target.getAttribute('data-index-books');
        let mainPageBooksImg = document.querySelector('.book-container__img[data-index-books=' + mainPageBooksAttr  + ']');
        let mainPageBooksDesc = document.querySelector('.book-container__desc[data-index-books=' + mainPageBooksAttr  + ']');
        let mainPageBooksMore = document.querySelector('.book-container__more[data-index-books=' + mainPageBooksAttr  + ']');

        mainPageBooksDesc.style.display = 'none';   
        mainPageBooksImg.style.display = 'block';
        mainPageBooksMore.style.opacity = '0%';
    })
}


const infoAboutBook = document.querySelectorAll('.cart-about-book__info__weight')

for(let item of infoAboutBook) {
    item.addEventListener('mouseenter', function(e){
        let infoBookAttr = e.target.getAttribute('data-download');
        let infoTextAttr = document.querySelector('.cart-about-book__info__weight__text__value[data-download=' + infoBookAttr  + ']');
        let infoBookDown = document.querySelector('.cart-about-book__info__weight__text__download[data-download=' + infoBookAttr  + ']');

        infoTextAttr.style.display = 'none';
        infoBookDown.style.display = 'block';
    })

    item.addEventListener('mouseleave', function(e){
        let infoBookAttr = e.target.getAttribute('data-download');
        let infoTextAttr = document.querySelector('.cart-about-book__info__weight__text__value[data-download=' + infoBookAttr  + ']');
        let infoBookDown = document.querySelector('.cart-about-book__info__weight__text__download[data-download=' + infoBookAttr  + ']');

        infoBookDown.style.display = 'none';
        infoTextAttr.style.display = 'block';
    })
}

new Swiper('.book-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,

    navigation:{
        nextEl: '.book__right',
        prevEl: '.book__left'
    },

    breakpoints: {
        1152: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 75
        },

        767: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 120,
        },
    },
})