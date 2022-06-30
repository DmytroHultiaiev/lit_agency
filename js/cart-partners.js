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
          spaceBetween: 75
        },

        767: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 45,
        },
    },
})

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
