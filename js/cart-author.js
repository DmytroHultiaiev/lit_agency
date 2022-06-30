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

const authorTabs = document.querySelectorAll('.cart-author-tabs__href__item');

for(let item of authorTabs) {

    item.addEventListener('click', function(e){
        let authorTabsAttr = e.target.getAttribute('data-category-tabs');
        let authorTabsBlockAll = document.querySelectorAll('.cart-author-tabs__item');
        let authorTabsBlockTarget = document.querySelector('.cart-author-tabs__item[data-category-tabs=' + authorTabsAttr  + ']');

        for (let el of authorTabsBlockAll) {
            el.classList.remove('active');
        }

        for (let el of authorTabs) {
            el.classList.remove('active');
        }

        item.classList.remove('active');
        e.target.classList.add('active');
        authorTabsBlockTarget.classList.add('active');
    })
}

const illArray = document.querySelectorAll('.cart-author-tabs__il__img');
const galleryImg = document.querySelector('.gallery__img');
const gallery = document.querySelector('.gallery');
const galleryLeftBtn = document.querySelector('.gallery__left__item');
const galleryRightBtn = document.querySelector('.gallery__right__item');
let galleryIndex;

window.addEventListener('click', function(e){

    if(gallery.style.display == 'flex' && e.target != galleryLeftBtn && e.target != galleryRightBtn && e.target != galleryImg && e.target.tagName != 'IMG') {

        gallery.style.display = 'none';
    }

})

for(let item of illArray){
    item.addEventListener('click', function(e){
        let itemSrc = e.target.getAttribute('src');
        galleryImg.src  = itemSrc;
        gallery.style.display = 'flex';

        for(let i=0; i < illArray.length; i++){
            if(illArray[i] == item) {
                galleryIndex = i;
            }
        }
    })
}

galleryLeftBtn.addEventListener('click', function(){
    if(galleryIndex > 0) {
        galleryImg.src = illArray[galleryIndex - 1].getAttribute('src');
        galleryIndex--;
    }
})

galleryRightBtn.addEventListener('click', function(){
    if(galleryIndex < illArray.length - 1) {
        galleryImg.src = illArray[galleryIndex + 1].getAttribute('src');
        galleryIndex++;
    }
})