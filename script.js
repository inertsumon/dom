
const email = document.getElementById("input-email");
const password = document.getElementById("input-password");

let loginBtn = document.getElementById("login-button");
loginBtn.addEventListener("click", function () {
    
    if (email.value == "sumon@gmail.com" && password.value == "sumon") {
        window.location.href = "bank.html";

    }
    else {
        console.log("problem");
    }
})

