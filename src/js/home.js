const $container = document.getElementById('container');
const $swipe = document.getElementById('swipe');
const $menu = document.getElementById('menu');
const $home = document.getElementById('home');



$swipe.addEventListener('click', function homeswitch(){
  $container.classList.add('containeranim');
  $container.style.zIndex = "-1";
  $menu.style.zIndex = "1000";
  $menu.classList.add('menuanim');
})


if (!localStorage.getItem('pageSeen')) {
  $container.style.display='flex';
  localStorage.setItem('pageScreen', true);
}
