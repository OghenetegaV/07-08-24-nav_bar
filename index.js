var hamburbugerIcon = document.getElementById("nav-icon");
var nav = document.querySelector("#nav");
var navContainer = document.querySelectorAll("#nav a");
var cancelIcon = document.getElementById("cancel-icon");

hamburbugerIcon.addEventListener("click", function() {
    this.style.display = "none";
    nav.style.display = "flex"; 
    // navContainer.style.display = "inline";
    cancelIcon.style.display = "inline";
});

cancelIcon.addEventListener("click", function() {
    this.style.display = "none";
    nav.style.display = "none"; 
    hamburbugerIcon.style.display = "inline";
    cancelIcon.style.display.toggle("none");
});

