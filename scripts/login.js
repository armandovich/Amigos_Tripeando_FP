const user = document.querySelector("#user");
const pass = document.querySelector("#password");
const submit = document.querySelector("#login-btn");

submit.addEventListener("click", function(e) {
    e.preventDefault();

    if(userData === null || user.value == "" || pass.value == "") {
        alert("Invalid user or password.");
        return;
    }
    
    if(userData.email != user.value && userData.email != pass.value) {
        alert("User not found.");
        return;
    }

    alert("Welcome " + userData.name);

    window.open(window.location.href.replace("pages/login.html", "index.html"), "_self");

    localStorage.setItem('isUserLoged', true);
});