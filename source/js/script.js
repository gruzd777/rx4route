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
const ServiceFeaturesTitles = {
  PHARMACIES: 'Smart service features',
  DRIVERS: 'Smart service features',
  PATIENTS: 'Smart service features'
}


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

const moveMenu = () => {
  const activeElement = document.querySelector('.service-features__button.active');
  const buttonElements = Array.from(serviceFeaturesButtons)
  const activeElementIndex = buttonElements.indexOf(activeElement);

  serviceFeaturesButtonContainer.innerHTML = '';

  buttonElements.slice(activeElementIndex, buttonElements.length).forEach((item) => {
    serviceFeaturesButtonContainer.append(item)
  });

  buttonElements.slice(0, activeElementIndex).forEach((item) => {
    serviceFeaturesButtonContainer.append(item)
  });
};

if (serviceFeaturesButtonContainer) {
  serviceFeaturesButtonContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('service-features__button')) {
      setActive(e.target, 'active', 'service-features__button');
      setActive(
        Array.from(serviceFeaturesScreens)[Array.from(serviceFeaturesButtons).indexOf(e.target)],
        'service-slider__item--active',
        'service-slider__item'
      );

      const typeBackground = e.target.dataset.type;
      if (typeBackground === 'smart') {
        serviceFeaturesSection.classList.add('service-features--smart');
      } else {
        serviceFeaturesSection.classList.remove('service-features--smart')
      }

      const titleTextType = e.target.dataset.title;
      serviceFeaturesTitle.textContent = ServiceFeaturesTitles[titleTextType.toUpperCase()];
    }
  });
}

if (document.querySelector('.phone-swiper') || document.querySelector('.simple-swiper')) {

  const swiper = new Swiper('.simple-swiper', {
    slidesPerView: 1,
    loop: true,
    observer: true,
    observeParents: true,
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

  const swiperPhonesList = new Swiper('.phone-swiper', {
    centeredSlides: true,
    loop: true,
    speed: 500,
    spaceBetween: 20,
    pagination: {
      el: '.swiper__pagination',
      clickable: true
    },
    observer: true,
    observeParents: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    mousewheel: {
      releaseOnEdges: true,
    },
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

      // console.log(item.realIndex, ' ', item.slides.length - 2)


      const texts = document.querySelectorAll(`.${item.el.dataset.text} .phone-texts__item`);
      if (document.querySelector(`.${item.el.dataset.text} .phone-texts__item--active`)) {
        document.querySelector(`.${item.el.dataset.text} .phone-texts__item--active`).classList.remove('phone-texts__item--active');
      }
      Array.from(texts)[item.realIndex].classList.add('phone-texts__item--active');
      const color = Array.from(texts)[item.realIndex].dataset.color;
      item.el.closest('.phone-slider').classList.remove('phone-slider--violet', 'phone-slider--pistachios', 'phone-slider--sky');
      item.el.closest('.phone-slider').classList.add(`phone-slider--${color}`);
    });
  });

  const simpleTextList = document.querySelectorAll('.simple-texts');
  simpleTextList.forEach((item) => {
    item.querySelector('.simple-texts__description').classList.add('simple-texts__description--active');
  });

  swiper.on('slideChange', () => {
    
    // console.log(swiper.realIndex, ' ', swiper.slides.length - 2)


    const texts = document.querySelectorAll(`.${swiper.el.dataset.text} .simple-texts__description`);
    if (document.querySelector(`.${swiper.el.dataset.text} .simple-texts__description--active`)) {
      document.querySelector(`.${swiper.el.dataset.text} .simple-texts__description--active`).classList.remove('simple-texts__description--active');
    }
    Array.from(texts)[swiper.realIndex].classList.add('simple-texts__description--active');
  });

}

if (document.querySelector('.hoist')) {
  const callback = (entry) => {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.querySelectorAll('.hoisting__element').forEach((item) => {
          item.classList.remove('hoisting__element--not-visible');
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
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('push-right--animation');
      }
    });
  }
  const options = {
    threshold: 0.5
  }
  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.push-right');

  targets.forEach((target) => {
    observer.observe(target);
  });
}

const menu = document.querySelector('.menu');
const toggle = document.querySelector('.page-header__toggle');
const mainButton = document.querySelector('.page-header__button')
const pageHeaderElement = document.querySelector('.page-header');

toggle.addEventListener('click', function () {
  toggle.classList.toggle('page-header__toggle--closed');
  menu.classList.toggle('menu--oppened');
  pageHeaderElement.classList.toggle('page-header--white');
  mainButton.classList.toggle('page-header__button--oppened');
})
