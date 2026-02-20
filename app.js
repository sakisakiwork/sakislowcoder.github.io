const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
});

//Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('open');
        hamburger.classList.remove('open');
    });
});

const scrollTopBtn = document.getElementById('scrollTop');
const heroSection = document.getElementById('home');

//Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', () => {
    const heroBottom = heroSection.getBoundingClientRect().bottom;

    //Show button when user scrolls past the hero section
    if (heroBottom < 0) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }

    //Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }); 

});

window.addEventListener('scroll', () => {
    console.log('scrolling...');
    console.log('heroSection:', heroSection);
    console.log('scrollTopBtn:', scrollTopBtn);
});