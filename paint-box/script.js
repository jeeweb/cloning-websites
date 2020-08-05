'use strict';
const winH = window.innerHeight;
let articles = document.querySelectorAll('article');
console.log(winH);

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY || document.documentElement.scrollTop;
  let articleTop;
  for (let i = 1; i < articles.length; i++) {
    articleTop = articles[i].getBoundingClientRect().top;
    if (winH > articleTop + 100) {
      articles[i].classList.add('active');
    }
  }
  console.log(`articleTop: ${articleTop}, scrollY: ${scrollY}`);
  console.log(scrollY);
});
