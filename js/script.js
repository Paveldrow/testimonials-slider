const buttonPrev = document.querySelector('.slider-navigation__button--prev');
const buttonNext = document.querySelector('.slider-navigation__button--next');

const commentItem = document.querySelectorAll('.comment__item');

let i = 0;
buttonPrev.addEventListener('click', (evt) => {
  evt.preventDefault();
  commentItem[i].classList.add('display-none');
  i --;
  if( i < 0){
    i = commentItem.length - 1;  
  }
  commentItem[i].classList.remove('display-none');
});


buttonNext.addEventListener('click', (evt) => {
  evt.preventDefault();
  commentItem[i].classList.add('display-none');
  i ++;
  if( i >= commentItem.length){
    i = 0;  
  }
  commentItem[i].classList.remove('display-none');
});

