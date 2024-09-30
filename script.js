function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
}

const registrationForm = document.querySelector('.register-form'); // Use class selector for form
const loginForm = document.querySelector('.login-form'); // Use class selector for form

if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailInput = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (!emailInput || !password) {
            alert('Please fill in all required fields!');
            return;
        }

        function isValidEmail(emailInput) {
            // Memeriksa apakah email mengandung karakter @
            if (emailInput.indexOf('@') === -1) {
                return false;
            }

            // Memeriksa apakah email mengandung setidaknya satu titik setelah karakter @
            if (emailInput.split('@')[1].indexOf('.') === -1) {
                return false;
            }

            return true;
        }

        if (!isValidEmail(emailInput)) {
            alert('Please enter a valid email address!');
            return;
        }

        // Lakukan tindakan selanjutnya, misalnya kirim data ke server
        console.log('Form submitted:', emailInput, password);
    });
} else {
    console.error('Form element not found!');
}

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const surname = document.getElementById('surname').value;
    const emailInput = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!firstName || !surname || !emailInput || !phoneNumber || !password || !confirmPassword) {
        alert('Please fill in all required fields!');
        return;
    }

    function isValidEmail(emailInput) {
        if (emailInput.indexOf('@') === -1 || emailInput.split('@')[1].indexOf('.') === -1) {
            return false;
        }
        return true;
    }

    if (!isValidEmail(emailInput)) {
        alert('Please enter a valid email address!');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Data sudah valid, bisa melakukan sesuatu seperti mengirim data ke server atau menampilkan pesan sukses
    console.log('Registration successful!');
    console.log('First Name:', firstName);
    console.log('Surname:', surname);
    console.log('Email:', emailInput);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
});



// Function to handle form submission
function handleFormSubmit(event, formType) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());

    console.log(`${formType} Form Data:`);
    console.log(formDataObject);
}


