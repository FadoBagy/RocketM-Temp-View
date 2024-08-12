export function astronautMovement() {
    document.addEventListener('mousemove', function (e) {
        const element = document.getElementById('floatingElement');
        const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
        const rotateAngle = (e.clientX / window.innerWidth) * 15;

        element.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotateAngle}deg)`;
    });
}