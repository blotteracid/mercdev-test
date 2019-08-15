document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#form");
    const submitButton = document.querySelector(".form-button");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (submitButton.textContent == "Logout") location.reload();

        fetch("https://us-central1-mercdev-academy.cloudfunctions.net/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: document.querySelector(".form-input[name='email']").value,
                password: document.querySelector(".form-input[name='password']").value
            })
        }).then(function(res) {
            return res.json();
        }).then(function(result) { 
            if (result.error) {
                form.classList.add("invalid");
            } else {
                form.classList.remove("invalid");
                form.classList.add("success");
                document.querySelector(".form-title").textContent = result.name;
                document.querySelector(".avatar").src = result.photoUrl;
                submitButton.textContent = "Logout";
            }
        });
    })
});
