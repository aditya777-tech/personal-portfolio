let menuicon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuicon.onclick=()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Corrected typo: offsetTop
        let height = sec.offsetHeight; // Corrected typo: offsetHeight
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    let header= document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);


    menuicon.classList.remove('bx-x');
 navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance:'100px',
    duration: 2000,
    delay: 200



});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });




// typed js
const typed = new Typed('.multiple-text',{
    strings: [ 'Student.','Web Developer.'],
    typeSpeed:150,
    backSpeed:0,
    backDelay:0,
    loop: false

});

