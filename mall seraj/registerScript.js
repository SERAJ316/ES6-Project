document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from actually submitting

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Password matching validation
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return; // Stop further execution
    }

    // Basic email validation (you can use a more robust regex if needed)
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }


    // Here you would typically send the data to your server for processing
    // For this example, we will just store the data in local storage and redirect

    const userData = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    alert("Registration successful! Redirecting to login page...");
    window.location.href = 'index.html'; // Redirect to your login page
});
