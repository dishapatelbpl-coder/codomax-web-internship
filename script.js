// =====================================
// DAY 7 + DAY 8
// JAVASCRIPT
// =====================================


// -------------------------------------
// 1. SHOW / HIDE ABOUT INFORMATION
// -------------------------------------

const moreBtn = document.getElementById("moreBtn");

const moreInfo = document.getElementById("moreInfo");


moreBtn.addEventListener("click", function () {

    if (moreInfo.style.display === "block") {

        moreInfo.style.display = "none";

        moreBtn.textContent = "Show More About Me";

    } else {

        moreInfo.style.display = "block";

        moreBtn.textContent = "Show Less";

    }

});


// -------------------------------------
// 2. CONTACT FORM EVENT
// -------------------------------------

const contactForm =
    document.getElementById("contactForm");


const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function (event) {

        // Prevent page refresh

        event.preventDefault();


        // Get name

        const name =
            document.getElementById("name").value;


        // Show message

        formMessage.textContent =
            "Thank you, " +
            name +
            "! Your message has been submitted.";


        // Clear form

        contactForm.reset();

    }
);


// -------------------------------------
// 3. SCROLL TO TOP BUTTON
// -------------------------------------

const topBtn =
    document.getElementById("topBtn");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    }
);


// -------------------------------------
// 4. SCROLL BACK TO TOP
// -------------------------------------

topBtn.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);