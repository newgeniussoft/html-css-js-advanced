const card = document.getElementById('card');
const cardContainer = document.getElementById('cardContainer');

cardContainer.addEventListener('mousemove', (e) => {
    const rect = cardContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (centerY - y) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
});

cardContainer.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) scale3d(1, 1, 1)';
});

card.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
});

card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
});
