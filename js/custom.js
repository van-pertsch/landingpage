const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  const navLinks = document.querySelectorAll('.nav-links li');


  burger.addEventListener('click', () => {
    //Toggle nav
    nav.classList.toggle('nav-active');

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {

        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
      }
    });

    //Burger Animation
    burger.classList.toggle('cross')
  });


}

const tl = gsap.timeline({defaults:{ease: "power1.out"}});

tl.to('.text', {y:'0%', duration: 1, stagger: 0.25});
tl.to('.slider', {y: "-100%", duration: 1.5, delay: 0.5});
tl.to('.intro', {y: "-100%", duration: 1}, "-=1");
tl.fromTo('nav',{opacity:0}, {opacity:1, duration:1 });
tl.fromTo('.big-text', { opacity: 0 }, { opacity: 1, duration: 3
 });


const app = () => {
  navSlide();
}

app();
