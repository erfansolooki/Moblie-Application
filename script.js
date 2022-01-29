// Style TO THE NAVBAR WHEN SCREEN IS SCROLLING
let scrollpos = window.scrollY;
let navMenu = document.querySelector('.nav-menu');

function add_class_on_scroll() {
    navMenu.classList.add('is-scrolling');
}

function remove_class_on_scroll() {
    navMenu.classList.remove('is-scrolling');
}

window.addEventListener('scroll', function(){ 
    scrollpos = window.scrollY;

    if(scrollpos > 50){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
});


// ADD AND REMOVE CLASSESS TO THE NAVBAR WHEN IT'S OPEN AND CLOSE
var navbarSupportedContent = document.getElementById('navbarSupportedContent');

navbarSupportedContent.addEventListener('show.bs.collapse', function () {
  navMenu.classList.add('menu-is-open')
})

navbarSupportedContent.addEventListener('hidden.bs.collapse', function () {
    navMenu.classList.remove('menu-is-open')
})