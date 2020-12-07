const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('nav-list');
const links = document.querySelectorAll('.nav-link');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navList.classList.add('nav-items-active');
    document.body.style.position = 'fixed';

    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navList.classList.remove('nav-items-active');
    document.body.style.position = 'static';
    menuOpen = false;
  }
  
});
links.forEach(item => {
    item.addEventListener('click', () => {
        navList.classList.remove('nav-items-active');
        menuBtn.classList.remove('open');
        document.body.style.position = 'static';
        menuOpen = false;
    });
        
    });
