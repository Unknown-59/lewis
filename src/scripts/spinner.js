const spinner = document.querySelector(".spinner-container");
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".spinner-container").style.display = "flex";
    spinner.style.zIndex = "999";
    spinner.style.background = "white";
    setTimeout(function() {
        document.querySelector(".spinner-container").style.display = "none";
        spinner.style.zIndex = "0";
        spinner.style.background = "transparent";
    }, 1000);
});