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
const serviceFeaturesWrapper = document.querySelector('.service-features__wrapper');
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

const handler = (e) => {
  console.log(e);
  console.log('to zero!!!');
    swiper.slideToLoop(0, 0, false);
  swiperDrivers.slideToLoop(0, 0, false);
  swiperPatients.slideToLoop(0, 0, false);
};

const serviceFeatureButtonClickHandler = (element) => {
  prev = 0;

  const title = element.dataset.title;

    swiper.disable()
  swiperDrivers.disable()
  swiperPatients.disable()

  document.querySelector(`#swiper-${title}`).swiper.enable()

  document.querySelector(`#swiper-${title}`).swiper.slideToLoop(0, 0, false);
 
  document.querySelector(`#swiper-${title}`).swiper.updateSlides();
  document.querySelector(`#swiper-${title}`).swiper.emit('init');


  setActive(element, 'active', 'service-features__button');
  setActive(
    Array.from(serviceFeaturesScreens)[Array.from(serviceFeaturesButtons).indexOf(element)],
    'service-slider__item--active',
    'service-slider__item'
  );
  document.querySelector(`#swiper-${title}`).swiper.attachEvents();
  document.querySelector(`#swiper-${title}`).swiper.update();


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

// document.addEventListener('wheel', (e) => {
//   console.log('wheel');
//   if (document.body.classList.contains('body--slider-activate')) {
//     e.preventDefault();
//   }

// }, { passive: false });

// document.addEventListener('scroll', (e) => {
//   console.log('scroll');
//   if (document.body.classList.contains('body--slider-activate')) {
//     e.preventDefault();
//   }
// });

if (document.querySelector('.phone-swiper') || document.querySelector('.simple-swiper')) {

  var swiper = new Swiper('.simple-swiper', {
    slidesPerView: 1,
    loop: true,
    initialSlide: 0,
    // observer: true,
    // observeParents: true,
    resizeObserver: true,
    watchActiveIndex: true,
    pagination: {
      el: '.pagination-pharmacies',
      clickable: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    mousewheel: {
      releaseOnEdges: true,
    },
    // onAny(eventName, ...args) {
    //   console.log('Event: ', eventName);
    //   console.log('Event data: ', args);
    // }
  });

  var swiperDrivers = new Swiper('#swiper-drivers', {
    centeredSlides: true,
    initialSlide: 0,
    loop: true,
    speed: 1000,
    spaceBetween: 20,
    pagination: {
      el: '.pagination-drivers',
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
    // onAny(eventName, ...args) {
    //   console.log('Event: ', eventName);
    //   console.log('Event data: ', args);
    // },
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

  var swiperPatients = new Swiper('#swiper-patients', {
    centeredSlides: true,
    initialSlide: 0,
    loop: true,
    speed: 1000,
    spaceBetween: 20,
    pagination: {
      el: '.pagination-patients',
      clickable: true
    },
    // observer: true,
    // observeParents: true,
    resizeObserver: true,
    keyboard: {
      enabled: true,
      // onlyInViewport: true
    },
    mousewheel: {
      releaseOnEdges: true,
    },
    slideToClickedSlide: true,
    // onAny(eventName, ...args) {
    //   console.log('Event: ', eventName);
    //   console.log('Event data: ', args);
    // },
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

  // let x;
  // let y;
  // window.addEventListener('scroll', (evt) => {
  //   if(document.body.classList.contains('body--slider-activate') && y){

  //     window.scrollTo(x,y);
  //   console.log('scroll ', x, ' ', y);
  //   return false;
  //   }
  // })
  const phoneTextList = document.querySelectorAll('.phone-texts');
  const phoneSlider = document.querySelector('.phone-slider');

  phoneTextList.forEach((item) => {
    item.querySelector('.phone-texts__item').classList.add('phone-texts__item--active');
  });



  swiperDrivers.on('slideChange', () => {
    document.body.classList.remove('body--slider-autoplay-start');

    const texts = document.querySelectorAll(`.${swiperDrivers.el.dataset.text} .phone-texts__item`);
    if (document.querySelector(`.${swiperDrivers.el.dataset.text} .phone-texts__item--active`)) {
      document.querySelector(`.${swiperDrivers.el.dataset.text} .phone-texts__item--active`).classList.remove('phone-texts__item--active');
    }
    Array.from(texts)[swiperDrivers.realIndex].classList.add('phone-texts__item--active');
    const color = Array.from(texts)[swiperDrivers.realIndex].dataset.color;
    swiperDrivers.el.closest('.phone-slider').classList.remove('phone-slider--violet', 'phone-slider--pistachios', 'phone-slider--sky');
    swiperDrivers.el.closest('.phone-slider').classList.add(`phone-slider--${color}`);

    const activeBtn = document.querySelector('.service-features__button.active');
    const currentIndexBtn = Array.from(serviceFeaturesButtons).indexOf(activeBtn);

    console.log("swiper.realIndex ", swiper.realIndex)
    console.log("swiperDrivers.realIndex ",swiperDrivers.realIndex)
    console.log("swiperPatients.realIndex ",swiperPatients.realIndex)

    if (swiperDrivers.realIndex * 1 === 0 && prev === swiperDrivers.slides.length - 6 - 1) {
      const nextIndexButton = (currentIndexBtn + 1) < serviceFeaturesButtons.length ? currentIndexBtn + 1 : 0;

      swiper.detachEvents();
      swiperDrivers.detachEvents();
      swiperPatients.detachEvents();

      console.log('now!!!')
      swiperDrivers.once('scroll', handler)
      serviceFeatureButtonClickHandler(serviceFeaturesButtons[nextIndexButton]);
      

    } else {
      prev = swiperDrivers.realIndex * 1;
    }
  });

  swiperPatients.on('slideChange', () => {
    document.body.classList.remove('body--slider-autoplay-start');

    const texts = document.querySelectorAll(`.${swiperPatients.el.dataset.text} .phone-texts__item`);
    if (document.querySelector(`.${swiperPatients.el.dataset.text} .phone-texts__item--active`)) {
      document.querySelector(`.${swiperPatients.el.dataset.text} .phone-texts__item--active`).classList.remove('phone-texts__item--active');
    }
    Array.from(texts)[swiperPatients.realIndex].classList.add('phone-texts__item--active');
    const color = Array.from(texts)[swiperPatients.realIndex].dataset.color;
    swiperPatients.el.closest('.phone-slider').classList.remove('phone-slider--violet', 'phone-slider--pistachios', 'phone-slider--sky');
    swiperPatients.el.closest('.phone-slider').classList.add(`phone-slider--${color}`);

    const activeBtn = document.querySelector('.service-features__button.active');
    const currentIndexBtn = Array.from(serviceFeaturesButtons).indexOf(activeBtn);

    console.log("swiper.realIndex ", swiper.realIndex)
    console.log("swiperDrivers.realIndex ",swiperDrivers.realIndex)
    console.log("swiperPatients.realIndex ",swiperPatients.realIndex)

    if (swiperPatients.realIndex * 1 === 0 && prev === swiperPatients.slides.length - 6 - 1) {
      const nextIndexButton = (currentIndexBtn + 1) < serviceFeaturesButtons.length ? currentIndexBtn + 1 : 0;

      swiper.detachEvents();
      swiperDrivers.detachEvents();
      swiperPatients.detachEvents();

      console.log('now!!!')
      swiperPatients.once('scroll', handler)
      serviceFeatureButtonClickHandler(serviceFeaturesButtons[nextIndexButton]);
      
    } else {
      prev = swiperPatients.realIndex * 1;
    }
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
    
    console.log("swiper.realIndex ", swiper.realIndex)
    console.log("swiperDrivers.realIndex ",swiperDrivers.realIndex)
    console.log("swiperPatients.realIndex ",swiperPatients.realIndex)

    if (swiper.realIndex * 1 === 0 && prev === swiper.slides.length - 2 - 1) {
      if (document.body.classList.contains('body--slider-autoplay-start')) {
        document.body.classList.remove('body--slider-autoplay-start');
        swiper.autoplay.stop();
        prev = swiper.realIndex * 1;
      } else {
        const nextIndexButton = (currentIndexBtn + 1) < serviceFeaturesButtons.length ? currentIndexBtn + 1 : 0;


        swiper.detachEvents();
        swiperDrivers.detachEvents();
        swiperPatients.detachEvents();
  
        console.log('now!!! swiper => drivers prev = ', prev)
        swiper.once('scroll', handler)
        serviceFeatureButtonClickHandler(serviceFeaturesButtons[nextIndexButton]);
        
      }

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
      swiper.autoplay.start();

      document.body.classList.add('body--slider-activate');
      document.body.classList.add('body--slider-autoplay-start');
    }
  }
  const options = {
    threshold: 0.5
  }
  const observer = new IntersectionObserver(callback, options);
  observer.observe(serviceFeaturesWrapper);
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
