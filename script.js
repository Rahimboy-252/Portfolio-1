// Navigatsiya havolalari uchun
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Menyu ochiq bo'lsa yopish
        let nav = document.querySelector('.nav');
        let menuIcon = document.querySelector('#menu-icon');
        
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });
});

// Faqat mobil qurilmalar uchun navigatsiya
function initMobileNav() {
    // Mobil qurilma tekshiruvi (768px dan kichik ekranlar uchun)
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', function() {
                // Menyu ochiq bo'lsa yopish
                let nav = document.querySelector('.nav');
                let menuIcon = document.querySelector('#menu-icon');
                
                nav.classList.remove('active');
                menuIcon.classList.remove('bx-x');
            });
        });
    }
}

// Sahifa yuklanganda va o'lcham o'zgarganda tekshirish
window.addEventListener('load', initMobileNav);
window.addEventListener('resize', initMobileNav);

// Blur overlay qo'shish
const body = document.querySelector('body');
const blurOverlay = document.createElement('div');
blurOverlay.className = 'blur-overlay';
body.appendChild(blurOverlay);

// Menyu tugmasi
let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
    blurOverlay.classList.toggle('active');
};

// Blur ustiga bosganda menyuni yopish
blurOverlay.onclick = () => {
    menuIcon.classList.remove('bx-x');
    nav.classList.remove('active');
    blurOverlay.classList.remove('active');
};

// Havolalarga bosganda menyuni yopish
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        nav.classList.remove('active');
        blurOverlay.classList.remove('active');
    });
});

// Scroll bo'lganda menyuni yopish
window.onscroll = () => {
    if (window.innerWidth <= 768) {
        menuIcon.classList.remove('bx-x');
        nav.classList.remove('active');
        blurOverlay.classList.remove('active');
    }
}; 