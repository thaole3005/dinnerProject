


  // $(document).ready(function() {

  //  });










  window.addEventListener('DOMContentLoaded', (event) => {
    

const open_menu_btn = document.querySelector('.header_right .toggle_menu_btn');
const close_menu_btn = document.querySelector('.dinner_banner .overlay_menu .close_menu_btn button');
const overlay_menu = document.querySelector('.dinner_banner .overlay_menu');


open_menu_btn.onclick = (event) => {
  openMenu(event);
}

var openMenu = (event) => {
  overlay_menu.classList.toggle('open');

}





close_menu_btn.onclick = (event) => {
  closeMenu(event);
}


var closeMenu = (event) => {
  overlay_menu.classList.toggle('open');

}

























});