const navbar = document.querySelector('.navbar');
const toggle = document.getElementById('toggle');

toggle.onclick = function(){
    navbar.classList.toggle('active');
}