let alert_login = document.getElementById("alert-login");
let alert_signup = document.getElementById("alert-signup");
let login_box = document.getElementById("login");
let signup_box = document.getElementById("signup");

alert_login.addEventListener("click", () => {
    login_box.classList.add("hidden");
    signup_box.classList.remove("hidden");
});

alert_signup.addEventListener("click", () => {
    login_box.classList.remove("hidden") ;
    signup_box.classList.add("hidden");
});
