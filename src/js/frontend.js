$(document).ready(function() {
       $('.checkbox').on('click', function() {
          if ($('.main__checkbox--entry').hasClass('active')) {
               $('.main__checkbox--entry').removeClass('active');
          }
          else {
               $('.main__checkbox--entry').addClass('active');
          }
       });
    });
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting by default

        const emailInput = document.querySelector('.email');
        const email = emailInput.value;

        const passwordInput = document.querySelector('.password');
        const password = passwordInput.value;

        const telephoneInput = document.querySelector('.telephone');
        const telephone = telephoneInput.value;

        const fullnameInput = document.querySelector('.fullname');
        const fullname = fullnameInput.value;

        // Select the error elements
        const emailError = document.querySelector('.email__error');
        const passwordError = document.querySelector('.password__error');
        const telephoneError = document.querySelector('.telephone__error');
        const fullnameError = document.querySelector('.fullname__error');

        // Regular expression to validate email format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (email.trim() === '') {
            emailError.textContent = "Please enter your email.";
        } else if (!emailRegex.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
        } else {
            emailError.textContent = ""; // Clear the error message
        }

        if (password.trim() === '') {
            passwordError.textContent = "Please enter your password.";
        } else if (password.length < 8) {
            passwordError.textContent = "Password should be at least 8 characters long.";
        } else {
            passwordError.textContent = ""; // Clear the error message
        }

        if (telephone.trim() === '') {
            telephoneError.textContent = "Please enter your phone number.";
        } else if (lettersRegex.test(telephone)) {
            telephoneError.textContent = "Phone number should not contain letters.";
        } else {
            telephoneError.textContent = ""; // Clear the error message
        }

        if (fullname.trim() === '') {
            fullnameError.textContent = "Please enter your name and surname.";
        } else {
            fullnameError.textContent = ""; // Clear the error message
        }
    });