const menu = document.querySelector('.menu_arriba');
const abrir = document.querySelector('.menu-bar');
const menuBar = document.getElementById('menu-bar');
const link = document.querySelectorAll('.menu_link');

abrir.addEventListener('click', function(){
    menu.classList.toggle('mover_menu');
    for(let i = 0; i < link.length; i++){
       link[i].addEventListener('click', function(){
           menu.classList.remove('mover_menu');
       })
    }
  
})

