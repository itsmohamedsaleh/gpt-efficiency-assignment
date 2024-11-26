const navLinks = document.querySelectorAll('.nav-link');
const panels = document.querySelectorAll('.panel');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        navLinks.forEach(nav => nav.classList.remove('active'));
        panels.forEach(panel => panel.classList.remove('active'));

        link.classList.add('active');

        const target = link.getAttribute('href').substring(1);
        document.getElementById(target).classList.add('active');
    });
});