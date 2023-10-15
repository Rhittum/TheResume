const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            document.querySelectorAll('.hidden1')[0].classList.add('show');
            document.querySelectorAll('.hidden1')[1].classList.add('show');
            document.querySelectorAll('.hidden1')[2].classList.add('show');
            document.querySelectorAll('.hidden1')[3].classList.add('show');
            document.querySelectorAll('.hidden1')[4].classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const observere = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElement = document.querySelectorAll('.hidden1');
hiddenElement.forEach((e1) => observers.observe(e1));

const hiddenElemente = document.querySelectorAll('.hidden2');
hiddenElemente.forEach((e1) => observere.observe(e1));

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Add event listeners to the buttons
document.getElementById("1-button").addEventListener("click", function() {
    scrollToSection("Contact Info");
});

document.getElementById("2-button").addEventListener("click", function() {
    scrollToSection("Profile");
});

document.getElementById("3-button").addEventListener("click", function() {
    scrollToSection("Education");
});

document.getElementById("4-button").addEventListener("click", function() {
    scrollToSection("Projects");
});

document.getElementById("5-button").addEventListener("click", function() {
    scrollToSection("Skills");
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}