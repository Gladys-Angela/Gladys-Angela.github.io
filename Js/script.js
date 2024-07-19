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