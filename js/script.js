var sliderBtn1 = document.querySelector('.slider__radio-1');
var sliderBtn2 = document.querySelector('.slider__radio-2');
var sliderBtn3 = document.querySelector('.slider__radio-3');

var slide1 = document.querySelector('.slide-1');
var slide2 = document.querySelector('.slide-2');
var slide3 = document.querySelector('.slide-3');

sliderBtn1.addEventListener('click', function () {
  sliderBtn1.classList.add('slider__radio--active');
  sliderBtn2.classList.remove('slider__radio--active');
  sliderBtn3.classList.remove('slider__radio--active');

  slide2.classList.remove('slide__current');
  slide3.classList.remove('slide__current');
});

sliderBtn2.addEventListener('click', function () {
  sliderBtn1.classList.remove('slider__radio--active');
  sliderBtn2.classList.add('slider__radio--active');
  sliderBtn3.classList.remove('slider__radio--active');

  slide2.classList.add('slide__current');
  slide3.classList.remove('slide__current');
});

sliderBtn3.addEventListener('click', function () {
  sliderBtn1.classList.remove('slider__radio--active');
  sliderBtn2.classList.remove('slider__radio--active');
  sliderBtn3.classList.add('slider__radio--active');

  slide2.classList.remove('slide__current');
  slide3.classList.add('slide__current');
});

var serviceBtn1 = document.querySelector('.services__btn1');
var serviceBtn2 = document.querySelector('.services__btn2');
var serviceBtn3 = document.querySelector('.services__btn3');

var service1 = document.querySelector('.service-1');
var service2 = document.querySelector('.service-2');
var service3 = document.querySelector('.service-3');

serviceBtn1.addEventListener('click', function () {
  serviceBtn1.classList.add('services__btn--current');
  serviceBtn2.classList.remove('services__btn--current');
  serviceBtn3.classList.remove('services__btn--current');

  service2.classList.remove('service--active');
  service3.classList.remove('service--active');
});

serviceBtn2.addEventListener('click', function () {
  serviceBtn1.classList.remove('services__btn--current');
  serviceBtn2.classList.add('services__btn--current');
  serviceBtn3.classList.remove('services__btn--current');

  service2.classList.add('service--active');
  service3.classList.remove('service--active');
});

serviceBtn3.addEventListener('click', function () {
  serviceBtn1.classList.remove('services__btn--current');
  serviceBtn2.classList.remove('services__btn--current');
  serviceBtn3.classList.add('services__btn--current');

  service2.classList.remove('service--active');
  service3.classList.add('service--active');
});
