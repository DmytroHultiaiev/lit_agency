const langSwitch = document.querySelectorAll('.language__switch');

for(let item of langSwitch) {

    item.addEventListener('mouseenter', function(e){
        let langSwitchImg = e.target.childNodes[0];
        let langSwitchImgSrc = langSwitchImg.getAttribute('src');

        if (langSwitchImgSrc == 'img/ru_lang.svg') {
            langSwitchImg.setAttribute('src', 'img/ru_lang_hover.svg');
        }

        if (langSwitchImgSrc == 'img/en_lang.svg') {
            langSwitchImg.setAttribute('src', 'img/en_lang_hover.svg');
        }

        if (langSwitchImgSrc == 'img/ch_lang.svg') {
            langSwitchImg.setAttribute('src', 'img/cn_lang.svg');
        }
    })

    item.addEventListener('mouseleave', function(e){
        let langSwitchImg = e.target.childNodes[0];
        let langSwitchImgSrc = langSwitchImg.getAttribute('src');

        if (langSwitchImgSrc == 'img/ru_lang_hover.svg') {
            langSwitchImg.setAttribute('src', 'img/ru_lang.svg');
        }

        if (langSwitchImgSrc == 'img/en_lang_hover.svg') {
            langSwitchImg.setAttribute('src', 'img/en_lang.svg');
        }

        if (langSwitchImgSrc == 'img/cn_lang.svg') {
            langSwitchImg.setAttribute('src', 'img/ch_lang.svg');
        }
    })
}


const signIn = document.querySelector('.sign');
const signContainer = document.querySelector('.sign-container');
const signBtn = document.querySelector('.sign__in_button');
const signBtnMobile = document.querySelector('.sign-in-mobile');
const signBtnMobileFooter = document.querySelector('.sign-in-mobile_footer');
const closeBtn = document.querySelector('.sign__close');

const forgotPassword = document.querySelector('.sign__forgot');
const signInBtn  = document.getElementById('sign-in-href');
const signUpBtn  = document.getElementById('sign-up-href');

const signInContainer = document.querySelector('.sign-in-container');
const signUpContainer = document.querySelector('.sign-up-container');
const forgotContainer = document.querySelector('.forgot-container');


signBtn.addEventListener('click', function(e){
    e.preventDefault();
    signIn.style.display = 'flex';

    signInContainer.classList.add('active');
    signUpContainer.classList.remove('active');
    forgotContainer.classList.remove('active');
})

signBtnMobile.addEventListener('click', function(e){
    e.preventDefault();
    signIn.style.display = 'flex';

    signInContainer.classList.add('active');
    signUpContainer.classList.remove('active');
    forgotContainer.classList.remove('active');
})

signBtnMobileFooter.addEventListener('click', function(e){
    e.preventDefault();
    signIn.style.display = 'flex';

    signInContainer.classList.add('active');
    signUpContainer.classList.remove('active');
    forgotContainer.classList.remove('active');
})

closeBtn.addEventListener('click', function(e){
    signIn.style.display = 'none';
})

window.addEventListener('click', function(e){
    if(e.target == signIn){
        signIn.style.display = 'none';
    }
    
})

forgotPassword.addEventListener('click', function(e){
    e.preventDefault();
    signInContainer.classList.remove('active');
    signUpContainer.classList.remove('active');
    forgotContainer.classList.add('active');
})

signInBtn.addEventListener('click', function(e){
    e.preventDefault();
    signInContainer.classList.add('active');
    signUpContainer.classList.remove('active');
    forgotContainer.classList.remove('active');
})

signUpBtn.addEventListener('click', function(e){
    e.preventDefault();
    signInContainer.classList.remove('active');
    signUpContainer.classList.add('active');
    forgotContainer.classList.remove('active');
})


const menuMobileButton = document.querySelector('.menu-mobile__button');
const menuMobileBlock = document.querySelector('.menu-mobile-block');

menuMobileButton.addEventListener('click', function(){
    menuMobileBlock.classList.toggle('active');
    menuMobileButton.classList.toggle('active');
    document.documentElement.classList.toggle('no_scroll');
})