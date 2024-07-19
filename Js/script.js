document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            e.preventDefault();
        } else {
            alert('Form submitted successfully.');
        }
    });
}); 

document.addEventListener('DOMContentLoaded', function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    images[currentImageIndex].classList.add('active');

    setInterval(() => {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }, 3000);
});
 
function loadContent(anime) {
    const content = {
        'one_punch_man': '<h3>One Punch Man</h3><p>A hero who can defeat any opponent with a single punch.</p>',
        'dragon_ball_z': '<h3>Dragon Ball Z</h3><p>The adventures of Goku as he defends Earth from villains.</p>',
        'death_note': '<h3>Death Note</h3><p>A high school student discovers a notebook that allows him to kill anyone.</p>',
        'demon_slayer': '<h3>Demon Slayer</h3><p>A young boy becomes a demon slayer to avenge his family.</p>'
    };
    document.getElementById('animeContent').innerHTML = content[anime];
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggleDarkMode').addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
    });
});

