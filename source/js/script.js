const serviceFeaturesButtonWrapper = document.querySelector('.service-features__buttons-wrapper');
const serviceFeaturesButtonContainer = document.querySelector('.service-features__buttons');
const serviceFeaturesButtons = document.querySelectorAll('.service-features__button');
const serviceFeaturesScreens = document.querySelectorAll('.service-slider__item');

const classActiveFeaturesButton = 'active';
const classActiveServiceSliderScreen = 'service-slider__item--active';

const serviceFeaturesScreen = document.querySelector('.service-slider__item');

const firstSoft = document.querySelector('.softs__item');
const softs = document.querySelectorAll('.softs__item');

const serviceFeaturesSection = document.querySelector('.service-features');
const serviceFeaturesTitle = document.querySelector('.service-features__title');

if (firstSoft) {
  firstSoft.classList.add('softs__item--active');
}

setInterval(() => {
  const activeSoft = document.querySelector('.softs__item--active');
  const index = Array.from(softs).indexOf(activeSoft);
  activeSoft.classList.remove('softs__item--active');
  const newIndex = index + 1 < softs.length ? index + 1 : 0;
  Array.from(softs)[newIndex].classList.add('softs__item--active');
}, 6000);

if (serviceFeaturesScreen) {
  serviceFeaturesScreen.classList.add('service-slider__item--active');
}

const setActive = (element, classNameActive, classNameBase) => {
  document.querySelector(`.${classNameBase}.${classNameActive}`).classList.remove(classNameActive);
  element.classList.add(classNameActive)
};
let prev = 0;
const serviceFeatureButtonClickHandler = (element) => {
  prev = 0;
  setActive(element, 'active', 'service-features__button');
  setActive(
    Array.from(serviceFeaturesScreens)[Array.from(serviceFeaturesButtons).indexOf(element)],
    'service-slider__item--active',
    'service-slider__item'
  );

  swiper.slideToLoop(0);
  swiperPhonesList[0].slideToLoop(0);
  swiperPhonesList[1].slideToLoop(0);
  const typeBackground = element.dataset.type;

  if (typeBackground === 'smart') {
    serviceFeaturesSection.classList.add('service-features--smart');
  } else {
    serviceFeaturesSection.classList.remove('service-features--smart')
  }
}

if (serviceFeaturesButtonContainer) {
  serviceFeaturesButtonContainer.addEventListener('click', (e) => {
    if (e.target.closest('.service-features__button')) {
      serviceFeatureButtonClickHandler(e.target.closest('.service-features__button'));
    }
  });
}

if (document.querySelector('.phone-swiper') || document.querySelector('.simple-swiper')) {

  var swiper = new Swiper('.simple-swiper', {
    slidesPerView: 1,
    loop: true,
    initialSlide: 0,
    observer: true,
    observeParents: true,
    resizeObserver: true,
    watchActiveIndex: true,
    pagination: {
      el: '.swiper__pagination',
      clickable: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    mousewheel: {
      releaseOnEdges: true,
    },
  });

  var swiperPhonesList = new Swiper('.phone-swiper', {
    centeredSlides: true,
    initialSlide: 0,
    loop: true,
    speed: 1000,
    spaceBetween: 20,
    pagination: {
      el: '.swiper__pagination',
      clickable: true
    },
    observer: true,
    observeParents: true,
    resizeObserver: true,
    keyboard: {
      enabled: true,
      // onlyInViewport: true
    },
    mousewheel: {
      releaseOnEdges: true,
    },
    slideToClickedSlide: true,
    breakpoints: {

      10: {
        slidesPerView: 2.4,
      },
      768: {
        slidesPerView: 3,
      },
      1080: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 2.9,
      },
    },
  });


  const phoneTextList = document.querySelectorAll('.phone-texts');
  const phoneSlider = document.querySelector('.phone-slider');

  phoneTextList.forEach((item) => {
    item.querySelector('.phone-texts__item').classList.add('phone-texts__item--active');
  });
  swiperPhonesList.forEach((item) => {

    item.on('slideChange', () => {


      const texts = document.querySelectorAll(`.${item.el.dataset.text} .phone-texts__item`);
      if (document.querySelector(`.${item.el.dataset.text} .phone-texts__item--active`)) {
        document.querySelector(`.${item.el.dataset.text} .phone-texts__item--active`).classList.remove('phone-texts__item--active');
      }
      Array.from(texts)[item.realIndex].classList.add('phone-texts__item--active');
      const color = Array.from(texts)[item.realIndex].dataset.color;
      item.el.closest('.phone-slider').classList.remove('phone-slider--violet', 'phone-slider--pistachios', 'phone-slider--sky');
      item.el.closest('.phone-slider').classList.add(`phone-slider--${color}`);

      // const serviceFeaturesButtons = document.querySelectorAll('.service-features__button');
      const activeBtn = document.querySelector('.service-features__button.active');
      const currentIndexBtn = Array.from(serviceFeaturesButtons).indexOf(activeBtn);
      if (item.realIndex * 1 === 0 && prev === item.slides.length - 6 - 1) {
        const nextIndexButton = (currentIndexBtn + 1) < serviceFeaturesButtons.length ? currentIndexBtn + 1 : 0;
        serviceFeatureButtonClickHandler(serviceFeaturesButtons[nextIndexButton], item);
      } else {
        prev = item.realIndex * 1;
      }
    });
  });

  const simpleTextList = document.querySelectorAll('.simple-texts');
  simpleTextList.forEach((item) => {
    item.querySelector('.simple-texts__description').classList.add('simple-texts__description--active');
  });

  swiper.on('slideChange', () => {

    const texts = document.querySelectorAll(`.${swiper.el.dataset.text} .simple-texts__description`);
    if (document.querySelector(`.${swiper.el.dataset.text} .simple-texts__description--active`)) {
      document.querySelector(`.${swiper.el.dataset.text} .simple-texts__description--active`).classList.remove('simple-texts__description--active');
    }
    Array.from(texts)[swiper.realIndex].classList.add('simple-texts__description--active');

    const activeBtn = document.querySelector('.service-features__button.active');
    const currentIndexBtn = Array.from(serviceFeaturesButtons).indexOf(activeBtn);
    if (swiper.realIndex * 1 === 0 && prev === swiper.slides.length - 2 - 1) {
      const nextIndexButton = (currentIndexBtn + 1) < serviceFeaturesButtons.length ? currentIndexBtn + 1 : 0;
      serviceFeatureButtonClickHandler(serviceFeaturesButtons[nextIndexButton]);
    } else {
      prev = swiper.realIndex * 1;
    }
  });

  const callback = (entry) => {
    if (entry[0].isIntersecting) {
      swiper.params.autoplay.delay = 1500;
      swiper.params.autoplay.stopOnLastSlide = true;
      swiper.params.autoplay.disableOnInteraction = true;
      swiper.params.speed = 1000;
      swiper.autoplay.start()
    }

  }
  const options = {
    threshold: 0.3
  }
  const observer = new IntersectionObserver(callback, options);
  observer.observe(serviceFeaturesSection);
}

if (document.querySelector('.booking-button')) {
  document.querySelectorAll('.booking-button').forEach((bookingButton) => {
    bookingButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      document.querySelector('.calendly-badge-content').click();
    })
  });
}

if (document.querySelector('.hoist')) {
  const callback = (entry) => {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.querySelectorAll('.hoisting__element').forEach((item) => {
          item.classList.remove('hoisting__element--not-visible');
          item.classList.remove('hoisting__element--not-visible-widgets');
          item.classList.remove('hoisting__element--not-visible-100');
        });
      }
    });
  }
  const options = {
    threshold: 0.5
  }
  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.hoist');

  targets.forEach((target) => {
    observer.observe(target);
  });
}

if (document.querySelector('.hoisting-text')) {
  const callback = (entry) => {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.remove('hoisting-text--start');
        change.target.classList.remove('hoisting-text--main-start');
      }
    });
  }
  const options = {
    threshold: 0.5
  }
  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.hoisting-text');

  targets.forEach((target) => {
    observer.observe(target);
  });
}

if (document.querySelector('.push-right')) {
  const callback = (entry) => {
    if (entry[0].isIntersecting) {
      document.querySelector('.push-right').classList.add('push-right--animation');
    }
  }
  const options = {
    threshold: 0.7
  }
  const observer = new IntersectionObserver(callback, options);
  const target = document.querySelector('.service-features');
  observer.observe(target);
}

const menu = document.querySelector('.menu');
const toggle = document.querySelector('.page-header__toggle');
const mainButton = document.querySelector('.page-header__button')
const pageHeaderElement = document.querySelector('.page-header');
const pageBodyElement = document.querySelector('.page-body');
const menuList = document.querySelector('.menu__list');

toggle.addEventListener('click', function () {
  toggle.classList.toggle('page-header__toggle--closed');
  menu.classList.toggle('menu--oppened');
  pageHeaderElement.classList.toggle('page-header--white');
  mainButton.classList.toggle('page-header__button--oppened');
  pageBodyElement.classList.toggle('page-body--hidden');
})

menuList.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('menu__link')) {
    pageBodyElement.classList.remove('page-body--hidden');
    menu.classList.remove('menu--oppened');
    pageHeaderElement.classList.remove('page-header--white');
    toggle.classList.add('page-header__toggle--closed');
  }
})
