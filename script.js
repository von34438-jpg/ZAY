// =========================
// TYPING EFFECT
// =========================

const title = document.querySelector(".hero h1");

const text = "Think Like a King.\nBuild Like a Hustler.";

let i = 0;

title.innerHTML = "";

function typeWriter(){

    if(i < text.length){

        if(text.charAt(i) === "\n"){
            title.innerHTML += "<br>";
        }else{
            title.innerHTML += text.charAt(i);
        }

        i++;

        setTimeout(typeWriter,70);

    }

}

window.onload = typeWriter;


// =========================
// FADE-IN ANIMATION
// =========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


// =========================
// SCROLL PROGRESS BAR
// =========================

const progress = document.createElement("div");

progress.id = "progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const totalHeight =
document.documentElement.scrollHeight -
window.innerHeight;

const progressHeight =
(window.pageYOffset / totalHeight) * 100;

progress.style.width = progressHeight + "%";

});


// =========================
// BACK TO TOP BUTTON
// =========================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY > 400){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.onclick = ()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuToggle.innerHTML = "✕";

    }else{

        menuToggle.innerHTML = "☰";

    }

});
// =========================
// LOADER
// =========================

window.addEventListener("load",()=>{

setTimeout(()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

loader.style.visibility="hidden";

},2500);

});