/* ======== typing animation         ============ */

var typed = new Typed(".typing", {
    strings: [" Ravi Gahire", "Ravi Gahire", "Web Developer", "What Can I Help You Sir..?"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})


/*-------Conatact from Validation*/
function validateForm() {
    // Get the values of the form fields
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();

    // Check if the name field is empty
    if (name == "") {
        alert("Hello sir please enter your good name");
        return false;
    }

    // Check if the email field is empty or contains an invalid email address
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (email == "") {
        alert("Email field is required");
        return false;
    } else if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Check if the subject field is empty
    if (subject == "") {
        alert("Subject field is required");
        return false;
    }

    // Check if the message field is empty
    if (message == "") {
        alert("Message field is required");
        return false;
    }

    // If all fields are valid, submit the form
    return true;
}


/*------------Downolad cv button */
function downloadFile() {
    var fileUrl = 'C:\Users\ravig\OneDrive\Desktop\Myportfilio\img'; // replace with the URL of your file
    var fileName = 'myresume'; // replace with the default filename for the downloaded file

    var downloadButton = document.createElement('a');
    downloadButton.setAttribute('href', fileUrl);
    downloadButton.setAttribute('download', fileName);
    downloadButton.style.display = 'none';
    document.body.appendChild(downloadButton);

    downloadButton.click();

    document.body.removeChild(downloadButton);
}