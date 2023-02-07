
// Bg-slider
const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 5000,
  },
});

const swiper1 = new Swiper('.mob-slider', {
  autoplay: {
    delay: 5000,
  },
});


// Burger
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__nav-link');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('header__burger--active');
    menu.classList.toggle('header__nav--active');
  }
)

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('header__burger--active');
    menu.classList.remove('header__nav--active');
  })
})

// Complex-info
// document.querySelectorAll('.catalog__tabs-link').forEach(currentComplex => {
//   currentComplex.addEventListener('click', function (event) {
//     const tabNo = this.closest('.catalog__tabs-item').dataset.target;
//     const complexNo = this.dataset.tab;
//     document.querySelectorAll(`.catalog__tabs-item[data-target="${tabNo}"] .catalog__tabs-item-down`).forEach(allCatalogTabsItems => {
//       allCatalogTabsItems.classList.remove('catalog__tabs-item-down_active_true')
//     });
//     document.querySelector(`.catalog__tabs-item[data-target="${tabNo}"] .catalog__tabs-item-down[data-target="${complexNo}"]`).classList.add('catalog__tabs-item-down_active_true');
//     event.preventDefault();
//   })
// })

// Complex select
const complexSelect = document.querySelector('#complex-select');
const complexSelectSelection = new Choices(complexSelect, {
  searchEnabled: false,
  shouldSort: false,
  allowHTML: true,
  placeholder: true,
  itemSelectText: ''
})