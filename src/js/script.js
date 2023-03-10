

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

const tabs1 = new ComplexTabs('tab', {
  isChanged: (tabs) => {
    console.log(tabs);
  }
});


// Filter-checkbox

function check0() {
  let chbox = document.getElementById('amount0');
  let lbl = document.getElementById('l0');

  if (chbox.checked) {
    lbl.classList.add('checkbox-input_checked');
  } else {
    lbl.classList.remove('checkbox-input_checked');
  }
}

function check1() {
  let chbox = document.getElementById('amount1');
  let lbl = document.getElementById('l1');

  if (chbox.checked) {
    lbl.classList.add('checkbox-input_checked');
  } else {
    lbl.classList.remove('checkbox-input_checked');
  }
}

function check2() {
  let chbox = document.getElementById('amount2');
  let lbl = document.getElementById('l2');

  if (chbox.checked) {
    lbl.classList.add('checkbox-input_checked');
  } else {
    lbl.classList.remove('checkbox-input_checked');
  }
}

function check3() {
  let chbox = document.getElementById('amount3');
  let lbl = document.getElementById('l3');

  if (chbox.checked) {
    lbl.classList.add('checkbox-input_checked');
  } else {
    lbl.classList.remove('checkbox-input_checked');
  }
}

function check4() {
  let chbox = document.getElementById('amount4');
  let lbl = document.getElementById('l4');

  if (chbox.checked) {
    lbl.classList.add('checkbox-input_checked');
  } else {
    lbl.classList.remove('checkbox-input_checked');
  }
}

// Complex select
const complexSelect = document.querySelector('#complex-select');
const complexSelectSelection = new Choices(complexSelect, {
  searchEnabled: false,
  shouldSort: false,
  allowHTML: true,
  placeholder: true,
  itemSelectText: ''
});