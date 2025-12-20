// Custom Cursor Interaction
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
const links = document.querySelectorAll('a');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Follower needs a slight delay for smooth effect - using CSS transition for that, just updating position here
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
});

// Hover effect for links
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.backgroundColor = 'transparent';
        cursor.style.border = '1px solid #ff00d4';
        follower.style.transform = 'translate(-50%, -50%) scale(1.8)';
        follower.style.borderColor = 'transparent';
    });

    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = '#ff00d4';
        cursor.style.border = 'none';
        follower.style.transform = 'translate(-50%, -50%) scale(1)';
        follower.style.borderColor = '#ff00d4';
    });
});

// Card Hover Tilt Effect (Cinematic)
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

});


// Page Load Animation
window.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('.transition-fade');
    setTimeout(() => {
        main.classList.add('is-active');
    }, 100);
});

