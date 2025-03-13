emailjs.init("eYpcZgFS-SxWxs9T_");

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("my-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            console.log("Please fill in all fields");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        const templateParams = {
            name: name,
            email: email,
            message: message
        };

        emailjs.send("service_azcwwjj", "template_6giyokm", templateParams)
            .then(function(response) {
                console.log("Success:", response);
                alert("Thank you, " + name + "! Your message has been sent.");
            }, function(error) {
                console.error("Error:", error);
                alert("Oops, something went wrong. Please try again.");
            });

        form.reset();
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
