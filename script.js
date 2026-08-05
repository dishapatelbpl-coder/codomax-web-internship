// =====================================
// DAY 7 - JAVASCRIPT BASICS
// Button Events, DOM Manipulation
// and Scroll-to-Top
// =====================================


// -------------------------------------
// 1. SHOW / HIDE ABOUT INFORMATION
// -------------------------------------

// Get the button from HTML
const moreBtn = document.getElementById("moreBtn");

// Get the hidden information
const moreInfo = document.getElementById("moreInfo");


// Add click event to the button
moreBtn.addEventListener("click", function () {

    // Check if information is currently visible
    if (moreInfo.style.display === "block") {

        // Hide the information
        moreInfo.style.display = "none";

        // Change button text
        moreBtn.textContent = "Show More About Me";

    } else {

        // Show the information
        moreInfo.style.display = "block";

        // Change button text
        moreBtn.textContent = "Show Less";

    }

});


// -------------------------------------
// 2. CONTACT FORM EVENT
// -------------------------------------

// Get contact form
const contactForm = document.getElementById("contactForm");

// Get message paragraph
const formMessage = document.getElementById("formMessage");


// Listen for form submission
contactForm.addEventListener("submit", function (event) {

    // Prevent page from refreshing
    event.preventDefault();

    // Get user's name
    const name = document.getElementById("name").value;

    // Display success message
    formMessage.textContent =
        "Thank you, " + name + "! Your message has been submitted.";

    // Clear form fields
    contactForm.reset();

});


// -------------------------------------
// 3. SCROLL TO TOP BUTTON
// -------------------------------------

// Get scroll-to-top button
const topBtn = document.getElementById("topBtn");


// Check page scrolling
window.addEventListener("scroll", function () {

    // If user scrolls more than 300px
    if (window.scrollY > 300) {

        // Show button
        topBtn.style.display = "block";

    } else {

        // Hide button
        topBtn.style.display = "none";

    }

});


// -------------------------------------
// 4. SCROLL BACK TO TOP
// -------------------------------------

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});