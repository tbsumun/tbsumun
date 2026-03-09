
window.addEventListener("load", function(){

    const loader = document.getElementById("loader");

    loader.classList.add("fade-out");

    document.body.classList.remove("loading");
    document.documentElement.classList.remove("loading");

    setTimeout(()=>{
        loader.style.display="none";
    },800);

});

function toggleMenu(){
    document.getElementById("nav-links").classList.toggle("active");
}

// Close menu when scrolling
window.addEventListener("scroll", function () {
    document.getElementById("nav-links").classList.remove("active");
});

const eventDate = new Date("July 11, 2026 00:00:00").getTime();
setInterval(function(){
    const now = new Date().getTime();
    const distance = eventDate - now;
    document.getElementById("days").innerHTML = Math.floor(distance/(1000*60*60*24));
    document.getElementById("hours").innerHTML = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    document.getElementById("minutes").innerHTML = Math.floor((distance%(1000*60*60))/(1000*60));
    document.getElementById("seconds").innerHTML = Math.floor((distance%(1000*60))/1000);
},1000);



let lastScroll = 0;
const navbar = document.querySelector("nav");
const navLinks = document.getElementById("nav-links");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    
    if (currentScroll <= 50) {
        navbar.style.top = "0";
        return;
    }

    if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.style.top = "-120px";
        navLinks.classList.remove("active");
    } else {
        // Scrolling up
        navbar.style.top = "0";
    }

    lastScroll = currentScroll;
});



window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});



function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
 



document.querySelectorAll(".profile").forEach(profile => {
    profile.addEventListener("click", function() {
        this.classList.toggle("flip");
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const grandLogo = document.querySelector(".grand-logo");

    if (grandLogo) {
        grandLogo.addEventListener("click", function () {
            grandLogo.classList.toggle("active");
        });
    }
});



   const toggleBtn = document.getElementById("secretariatToggle");
const sec2026 = document.getElementById("sec2026");
const sec2025 = document.getElementById("sec2025");
const secretariatSection = document.getElementById("secretariat");

toggleBtn.addEventListener("click", () => {

    
    secretariatSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    setTimeout(() => {

        let currentSection = sec2026.classList.contains("hidden") ? sec2025 : sec2026;
        let nextSection = sec2026.classList.contains("hidden") ? sec2026 : sec2025;

    
        currentSection.classList.add("fade-out");

        setTimeout(() => {

            currentSection.classList.add("hidden");
            currentSection.classList.remove("fade-out");

            nextSection.classList.remove("hidden");
            nextSection.classList.add("fade-in");

            // Update button text
            if (nextSection === sec2026) {
                toggleBtn.textContent = "TBSUMUN 2025 Secretariat";
            } else {
                toggleBtn.textContent = "TBSUMUN 2026 Secretariat";
            }

            setTimeout(() => {
                nextSection.classList.remove("fade-in");
            }, 400);

        }, 400);

    }, 500); // scroll wait time

});

