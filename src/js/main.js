var mainmenu = document.querySelector('.mainmenu');
window.addEventListener('scroll',function(){
  if(window.scrollY < mainmenu.offsetTop + 75){
    mainmenu.style.display = 'block';
    mainmenu.style.transition = 'all .5s';
  }else{
    mainmenu.style.display = 'none';
    mainmenu.style.transition = 'all .5s';
  }
})