const serviceFeaturesButtonContainer = document.querySelector('.service-features__buttons');
const serviceFeaturesButtons = document.querySelectorAll('.service-features__button');
const serviceFeaturesScreens = document.querySelectorAll('.service-slider__item');

const classActiveFeaturesButton = 'active';
const classActiveServiceSliderScreen = 'service-slider__item--active';

const serviceFeaturesScreen = document.querySelector('.service-slider__item');

serviceFeaturesScreen.classList.add('service-slider__item--active');

const setActive = (element, classNameActive, classNameBase) => {
  document.querySelector(`.${classNameBase}.${classNameActive}`).classList.remove(classNameActive);
  element.classList.add(classNameActive)
};

serviceFeaturesButtonContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('service-features__button')) {
    setActive(e.target, 'active', 'service-features__button');
    setActive(
      Array.from(serviceFeaturesScreens)[Array.from(serviceFeaturesButtons).indexOf(e.target)],
      'service-slider__item--active',
      'service-slider__item'
    );

    //swiper.activeIndex
  }
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper__pagination',
    slidesPerView: 1
  },
  // breakpoints: {
  //   768: {
  //     slidesPerView: 1
  //   },
  //   1000: {
  //     slidesPerView: 5
  //   },
  //   1200: {
  //     slidesPerView: null
  //   }
  // }
});




const menu = document.querySelector('.menu');
const toggle = document.querySelector('.page-header__toggle');
const mainButton = document.querySelector('.page-header__button')
const pageHeaderElement = document.querySelector('.page-header');

console.log(menu);
console.log(toggle);

toggle.addEventListener('click', function() {
  toggle.classList.toggle('page-header__toggle--closed');
  menu.classList.toggle('menu--oppened');
  pageHeaderElement.classList.toggle('page-header--menu-oppened');
  // mainButton.classList.toggle('page-header__button--oppened');
})
