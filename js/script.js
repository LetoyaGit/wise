const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link"),
      hamburger = document.querySelector(".hamburger"),
      navLinks = document.querySelector(".nav-links");

// Password visibility toggle
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";
                pwShowHide.forEach(icon => icon.classList.replace("fa-eye-slash", "fa-eye"));
            } else {
                pwField.type = "password";
                pwShowHide.forEach(icon => icon.classList.replace("fa-eye", "fa-eye-slash"));
            }
        });
    });
});

// Switch between Login and Signup
if (signUp && login) {
    signUp.addEventListener("click", () => container.classList.add("active"));
    login.addEventListener("click", () => container.classList.remove("active"));
}

// Hamburger Menu Toggle (only if elements exist)
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
}
