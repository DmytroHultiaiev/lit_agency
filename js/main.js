$(document).ready(function(){
    $('.header-slider-contaier').slick({
        dots: true,
        prevArrow: $('.header__left'),
        nextArrow: $('.header__right'),
    });
});

new Swiper('.book-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,

    navigation:{
        nextEl: '.book__right',
        prevEl: '.book__left'
    },

    breakpoints: {
        1440: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 60
        },

        1152: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 75
        },

        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 150
        },
    },
})

new Swiper('.news-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 60,

    navigation: {
        nextEl: '.news__right',
        prevEl: '.news__left',
    },

    breakpoints: {

        1440: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 60
        },

        1152: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 40
        },
    },
})

new Swiper('.partners-container-mobile', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,

    navigation: {
        nextEl: '.partners__right',
        prevEl: '.partners__left',
    },
    

    breakpoints: {

        1152: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 40,
        },

        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 120,
        },
    }
})



const mainPageBooks = document.querySelectorAll('.book-container__item');
const mainPageNews = document.querySelectorAll('.news__item');
const mainPagePartners = document.querySelectorAll('.partners__item');

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

for(let item of mainPageNews) {
    item.addEventListener('mouseenter', function(e){
        let mainPageNewsAttr = e.target.getAttribute('data-index-news');
        let mainPageNewsDesc = document.querySelector('.news__secondary[data-index-news=' + mainPageNewsAttr  + ']');
        let mainPageNewsMore = document.querySelector('.news__more[data-index-news=' + mainPageNewsAttr   + ']');

        mainPageNewsDesc.style.opacity = '0%';
        mainPageNewsMore.style.opacity = '100%';
    })

    item.addEventListener('mouseleave', function(e){
        let mainPageNewsAttr = e.target.getAttribute('data-index-news');
        let mainPageNewsDesc = document.querySelector('.news__secondary[data-index-news=' + mainPageNewsAttr  + ']');
        let mainPageNewsMore = document.querySelector('.news__more[data-index-news=' + mainPageNewsAttr   + ']');

        mainPageNewsMore.style.opacity = '0%';
        mainPageNewsDesc.style.opacity = '100%';
    })
}

for(let item of mainPagePartners) {
    item.addEventListener('mouseenter', function(e){
        let mainPagePartnersAttr = e.target.getAttribute('data-index-partners');
        let mainPagePartnersMore = document.querySelector('.partners__more[data-index-partners=' + mainPagePartnersAttr + ']');
        let mainPagePartnersInfo = document.querySelector('.partners__info[data-index-partners=' + mainPagePartnersAttr + ']');
        let mainPagePartnersImg = document.querySelector('.partners__logo[data-index-partners=' + mainPagePartnersAttr + ']');
        let mainPagePartnersCont = document.querySelector('.partners__item__change[data-index-partners=' + mainPagePartnersAttr + ']');

        mainPagePartnersContHeight = mainPagePartnersCont.clientHeight;

        mainPagePartnersCont.classList.add('active');
        mainPagePartnersCont.style.height = mainPagePartnersContHeight;
        mainPagePartnersMore.style.opacity = '100%';
        mainPagePartnersImg.style.display = 'none';
        mainPagePartnersInfo.style.display = 'block';
    })

    item.addEventListener('mouseleave', function(e){
        let mainPagePartnersAttr = e.target.getAttribute('data-index-partners');
        let mainPagePartnersMore = document.querySelector('.partners__more[data-index-partners=' + mainPagePartnersAttr + ']');
        let mainPagePartnersInfo = document.querySelector('.partners__info[data-index-partners=' + mainPagePartnersAttr + ']');
        let mainPagePartnersImg = document.querySelector('.partners__logo[data-index-partners=' + mainPagePartnersAttr + ']');
        
        mainPagePartnersMore.style.opacity = '0%';
        mainPagePartnersInfo.style.display = 'none';
        mainPagePartnersImg.style.display = 'block';
        mainPagePartnersCont.style.height = 'auto';
        mainPagePartnersCont.classList.remove('active');
    })
}