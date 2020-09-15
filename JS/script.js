
const CTA = document.querySelector(" .cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e, current) {
    e.preventDefault();
    // CTA.classList.toggle("hide");
    current.innerHTML == "Book Now!" ? CTA.innerHTML = "Ooops!" : CTA.innerHTML = "Book Now!";
    ALERT.classList.toggle("hide");
    // 
}

// CTA.onclick = reveal;
//to handle to onclick events we have to use 
//onlciklistener event

CTA.addEventListener("click", function(e) {reveal(e,this)}, false);
CTA.addEventListener("click", function(){console.log("The BUtton was clicked!")});