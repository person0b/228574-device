// SLIDER

var sliderBtn1 = document.querySelector('.slider__radio--1');
var sliderBtn2 = document.querySelector('.slider__radio--2');
var sliderBtn3 = document.querySelector('.slider__radio--3');

var slide1 = document.querySelector('.slide--1');
var slide2 = document.querySelector('.slide--2');
var slide3 = document.querySelector('.slide--3');

sliderBtn1.addEventListener('click', function () {
  sliderBtn1.classList.add('slider__radio--active');
  sliderBtn2.classList.remove('slider__radio--active');
  sliderBtn3.classList.remove('slider__radio--active');

  slide2.classList.remove('slide--current');
  slide3.classList.remove('slide--current');
});

sliderBtn2.addEventListener('click', function () {
  sliderBtn1.classList.remove('slider__radio--active');
  sliderBtn2.classList.add('slider__radio--active');
  sliderBtn3.classList.remove('slider__radio--active');

  slide2.classList.add('slide--current');
  slide3.classList.remove('slide--current');
});

sliderBtn3.addEventListener('click', function () {
  sliderBtn1.classList.remove('slider__radio--active');
  sliderBtn2.classList.remove('slider__radio--active');
  sliderBtn3.classList.add('slider__radio--active');

  slide2.classList.remove('slide--current');
  slide3.classList.add('slide--current');
});

// POPULAR

var serviceBtn1 = document.querySelector('.services__btn1');
var serviceBtn2 = document.querySelector('.services__btn2');
var serviceBtn3 = document.querySelector('.services__btn3');

var service1 = document.querySelector('.service--1');
var service2 = document.querySelector('.service--2');
var service3 = document.querySelector('.service--3');

serviceBtn1.addEventListener('click', function (evt) {
  serviceBtn1.classList.add('services__btn--current');
  serviceBtn2.classList.remove('services__btn--current');
  serviceBtn3.classList.remove('services__btn--current');

  service2.classList.remove('service--active');
  service3.classList.remove('service--active');
});

serviceBtn2.addEventListener('click', function (evt) {
  serviceBtn1.classList.remove('services__btn--current');
  serviceBtn2.classList.add('services__btn--current');
  serviceBtn3.classList.remove('services__btn--current');

  service2.classList.add('service--active');
  service3.classList.remove('service--active');
});

serviceBtn3.addEventListener('click', function (evt) {
  serviceBtn1.classList.remove('services__btn--current');
  serviceBtn2.classList.remove('services__btn--current');
  serviceBtn3.classList.add('services__btn--current');

  service2.classList.remove('service--active');
  service3.classList.add('service--active');
});

// WRITE US

var writeUsBtn = document.querySelector('.btn--contacts');
var writeUsModal = document.querySelector('.modal--write-us');
var closeWriteUsBtn = document.querySelector('.modal__close--write-us');

var writeUsForm = document.querySelector('.write-us__form');
var writeUsName = document.querySelector('[name=name]');
var writeUsEmail = document.querySelector('[name=email]');
var writeUsMessage = document.querySelector('[name=message]');

var isStorageSupport = true;
var storageName = '';
var storageEmail = '';

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

writeUsBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUsModal.classList.add('modal--open');

  if (storageName) {
    writeUsName.value = storageName;
    if (storageEmail) {
      writeUsEmail.value = storageEmail;
      writeUsMessage.focus();
    } else {
      writeUsEmail.focus();
    }
  } else {
    writeUsName.focus();
  }
});

closeWriteUsBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUsModal.classList.remove('modal--open');
  writeUsModal.classList.remove('modal--error');
});

writeUsForm.addEventListener('submit', function (evt) {
  if (!writeUsName.value || !writeUsEmail.value || !writeUsMessage.value) {
    evt.preventDefault();
    writeUsModal.classList.remove('modal--error');
    writeUsModal.offsetWidth = writeUsModal.offsetWidth;
    writeUsModal.classList.add('modal--error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', writeUsName);
      localStorage.setItem('email', writeUsEmail);
    }
  }
});

var mapBtn = document.querySelector('.contacts__map');
var mapModal = document.querySelector('.modal--map');
var closeMapBtn = document.querySelector('.modal__close--map');

mapBtn.addEventListener('click', function (evt) {
  mapModal.classList.add('modal--open');
});

closeMapBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapModal.classList.remove('modal--open');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (writeUsModal.classList.contains('modal--open')) {
      writeUsModal.classList.remove('modal--open');
      writeUsModal.classList.remove('modal--error');
    } else if (mapModal.classList.contains('modal--open')) {
      mapModal.classList.remove('modal--open');
    }
  }
});
