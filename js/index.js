const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('nav-list');
const links = document.querySelectorAll('.nav-link');
console.log(links);
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navList.classList.add('nav-items-active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navList.classList.remove('nav-items-active');
    menuOpen = false;
  }
  
});
links.forEach(item => {
    item.addEventListener('click', () => {
        navList.classList.remove('nav-items-active');
        menuBtn.classList.remove('open');
        menuOpen = false;
    });
        
    });