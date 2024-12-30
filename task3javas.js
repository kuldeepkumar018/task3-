// Toggle Menu Visibility
document.getElementById("toggle-menu").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
});

// Form Validation
document.getElementById("interactive-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    // Name Validation
    const name = document.getElementById("name").value;
    const nameError = document.getElementById("name-error");
    if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email Validation
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("email-error");
    if (!email.includes("@")) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Display Message
    if (valid) {
        document.getElementById("form-message").textContent = "Form submitted successfully!";
        document.getElementById("form-message").style.color = "green";
    } else {
        document.getElementById("form-message").textContent = "Please correct the errors.";
        document.getElementById("form-message").style.color = "red";
    }
});
