//**************************** Code for greeting *********************************
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow >= 18) {
    greeting = "Good Evening,";
    document.getElementById("greeting").style.width = "73rem";
} else if (hourNow >= 12) {
    greeting = "Good Afternoon,";
    document.getElementById("greeting").style.width = "81rem";
} else if (hourNow >= 0) {
    greeting = "Good Morning,";
    document.getElementById("greeting").style.width = "73rem";
} else {
    greeting = "Hello,";
}

document.getElementById("greeting").innerHTML = greeting;

//**************************** Code for year in footer ********************
var y = new Date();
var year = y.getFullYear();

document.getElementById("current-year").innerHTML = year;

//**************************** Project-tab-switching code *********************
function switchJS() {
    document.getElementById("project-main").style.zIndex = "-1";

    document.getElementById("project-tab-main").style.textDecoration = "none";
    document.getElementById("project-tab-javascript").style.textDecoration = "underline";
}

function switchMain() {
    document.getElementById("project-main").style.zIndex = "1";

    document.getElementById("project-tab-main").style.textDecoration = "underline";
    document.getElementById("project-tab-javascript").style.textDecoration = "none";
}