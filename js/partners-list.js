const mainPagePartners = document.querySelectorAll('.partners__item');

for(let item of mainPagePartners) {
    item.addEventListener('mouseenter', function(e){
        let mainPagePartnersAttr = e.target.getAttribute('data-index-partners');
        let mainPagePartnersMore = document.querySelector('.partners__more[data-index-partners=' + mainPagePartnersAttr + ']');
        let mainPagePartnersInfo = document.querySelector('.partners__info[data-index-partners=' + mainPagePartnersAttr + ']');
        let mainPagePartnersImg = document.querySelector('.partners__logo[data-index-partners=' + mainPagePartnersAttr + ']');
        
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
    })
}
