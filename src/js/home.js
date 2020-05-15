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


$home.addEventListener('click', function (){
  $container.style.zIndex = "-1";
  console.log('hello');
})

// async function asyncCall(){
//   const stop = await homeswitch ();
//   $container.style.display = "none";
// }

