// Get the button element
var powerButton = document.getElementById("powerButton");

// Get the content div
var contentDiv = document.querySelector(".content");

// Get the TV container div
var tvDiv = document.querySelector(".tv");

// Set initial state of website visibility
var isWebsiteOn = true;

// Add click event listener to the button
powerButton.addEventListener("click", function() {
    // Toggle website visibility
    if (isWebsiteOn) {
        // If website is on, turn it off
        tvDiv.classList.add("off");
        isWebsiteOn = false;
    } else {
        // If website is off, turn it on
        tvDiv.classList.remove("off");
        isWebsiteOn = true;
    }
});
