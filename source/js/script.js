const serviceFeaturesButtonWrapper = document.querySelector('.service-features__buttons-wrapper');
const serviceFeaturesButtonContainer = document.querySelector('.service-features__buttons');
const serviceFeaturesButtons = document.querySelectorAll('.service-features__button');
const serviceFeaturesScreens = document.querySelectorAll('.service-slider__item');

const classActiveFeaturesButton = 'active';
const classActiveServiceSliderScreen = 'service-slider__item--active';

const serviceFeaturesScreen = document.querySelector('.service-slider__item');

const firstSoft = document.querySelector('.softs__item');
const softs = document.querySelectorAll('.softs__item');
firstSoft.classList.add('softs__item--active');

setInterval(() => {
  const activeSoft = document.querySelector('.softs__item--active');
  const index = Array.from(softs).indexOf(activeSoft);
  activeSoft.classList.remove('softs__item--active');
  const newIndex = index + 1 < softs.length ? index + 1 : 0;
  Array.from(softs)[newIndex].classList.add('softs__item--active');
}, 6000);

serviceFeaturesScreen.classList.add('service-slider__item--active');

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

serviceFeaturesButtonContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('service-features__button')) {
    setActive(e.target, 'active', 'service-features__button');
    setActive(
      Array.from(serviceFeaturesScreens)[Array.from(serviceFeaturesButtons).indexOf(e.target)],
      'service-slider__item--active',
      'service-slider__item'
    );
  }
});

const swiper = new Swiper('.simple-swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper__pagination',
    slidesPerView: 1
  },
});


const swiperPhones1 = new Swiper('.phone-swiper', {
  centeredSlides: true,
  loop: true,
  speed: 500,
  slidesPerView: 1.5,
  spaceBetween: 20,
  // autoplay: {
  //     delay: 3000,
  // },
  // navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  // },
  breakpoints: {

      10: {
          slidesPerView: 3,
      },
      768: {
          slidesPerView: 3,
      },
      1080: {
          slidesPerView: 3.25,
      },
      1280: {
          slidesPerView: 3.75,
      },
  },
//   controller: {
//     control: swiperTexts
//   }
});

document.querySelector('.phone-texts__item').classList.add('phone-texts__item--active');
const texts = document.querySelectorAll('.phone-texts__item');

swiperPhones1[0].on('slideChange', () => {
console.log('---   ', swiperPhones1[0].realIndex);
document.querySelector('.phone-texts__item--active').classList.remove('phone-texts__item--active');
Array.from(texts)[swiperPhones1[0].realIndex].classList.add('phone-texts__item--active')
});


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
