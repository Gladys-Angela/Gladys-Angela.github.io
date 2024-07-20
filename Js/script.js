document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        // Fetch form values
        let Name = document.getElementById('input-name').value.trim();
        let Email = document.getElementById('input-email').value.trim();
        let Message = document.getElementById('input-message').value.trim();
        let Subject = document.getElementById('input-subject').value.trim();

        // Check if any field is empty
        if (Name === '' || Email === '' || Subject === '' || Message === '') {
            alert('Please fill out all fields.');
        } else {
            // Submit the form if all fields are filled
            alert('Form submitted successfully.');
            this.submit(); // Submit the form
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

