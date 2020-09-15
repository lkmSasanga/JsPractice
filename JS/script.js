
const CTA = document.querySelector(" .cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

// CTA.onclick = reveal;
//to handle to onclick events we have to use 
//onlciklistener event

CTA.addEventListener("click", reveal, false);
CTA.addEventListener("click", function(){console.log("The BUtton was clicked!")});