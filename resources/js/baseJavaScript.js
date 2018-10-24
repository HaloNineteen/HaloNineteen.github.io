var i = 0;
var txt = 'This page is under construction.';
var speed = 10;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("underConstruction").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

function openNav() {
  document.getElementById("mobileNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobileNav").style.width = "0%";
}