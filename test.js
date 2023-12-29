var swiper = document.querySelector('.swiper');
var items = document.querySelectorAll('.swiper img');
var length = items.length;
var index = 1;

swiper.style.width = items[0].offsetWidth + 'px';
swiper.style.transform = 'translate3d(-' + index * items[0].offsetWidth + 'px, 0, 0)';

swiper.addEventListener('transitionend', function() {
  if (index >= length - 1) {
    index = 1;
    swiper.style.transition = 'none';
    swiper.style.transform = 'translate3d(-' + index * items[0].offsetWidth + 'px, 0, 0)';
  } else if (index <= 0) {
    index = length - 2;
    swiper.style.transition = 'none';
    swiper.style.transform = 'translate3d(-' + index * items[0].offsetWidth + 'px, 0, 0)';
  }
});

document.querySelector('.prev').addEventListener('click',fun1)
document.querySelector('.next').addEventListener('click',fun)
function fun(){
  index++;
  swiper.style.transition = 'transform .5s ease-in-out';
  swiper.style.transform = 'translate3d(-' + index * items[0].offsetWidth + 'px, 0, 0)';
}
function fun1(){
  index--;
  swiper.style.transition = 'transform .5s ease-in-out';
  swiper.style.transform = 'translate3d(-' + index * items[0].offsetWidth + 'px, 0, 0)';
}
/* setInterval(function() {
  index++;
  swiper.style.transition = 'transform .5s ease-in-out';
  swiper.style.transform = 'translate3d(-' + index * items[0].offsetWidth + 'px, 0, 0)';
}, 3000); */