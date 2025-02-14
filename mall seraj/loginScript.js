document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login__form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const inputIcon = document.getElementById("input-icon");
    const rememberMeCheckbox = document.getElementById("check");

    let loginAttempts = localStorage.getItem("loginAttempts") || 0;

    // Block login if too many failed attempts
    if (loginAttempts >= 5) {
        alert("Too many failed login attempts. Try again later.");
        return;
    }

    // Toggle password visibility
    inputIcon.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            inputIcon.classList.replace("ri-eye-off-line", "ri-eye-line");
        } else {
            passwordInput.type = "password";
            inputIcon.classList.replace("ri-eye-line", "ri-eye-off-line");
        }
    });

    // Prevent copy-pasting password
    passwordInput.addEventListener("paste", (e) => e.preventDefault());

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();  

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        
        if (!email || !password) {
            alert("All fields are required.");
            return;
        }

       
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        
        if (!validatePassword(password)) {
            alert("Password must be at least 6 characters and include uppercase, lowercase, number, and special character.");
            return;
        }

         
        if (/\s/.test(password)) {
            alert("Password cannot contain spaces.");
            return;
        }

        
        if (rememberMeCheckbox.checked) {
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);
        }

        alert("welcome to our home ");
        
            
        localStorage.setItem("loginAttempts", 0);
        
       
        window.location.href = "home.html"; 
    });

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    function validatePassword(password) {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        return passwordPattern.test(password);
    }
});
