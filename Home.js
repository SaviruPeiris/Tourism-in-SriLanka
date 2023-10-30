let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#search-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videobtn = document.querySelectorAll('.vid-btn');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active')
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
});


searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    searchBtn.classList.add('active');
});

formClose.addEventListener('click', () =>{
    searchBtn.classList.remove('active');
});

videobtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector ('.controls .active').classList.remove('active')
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;

    });
});
