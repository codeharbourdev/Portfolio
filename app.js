/*************************  navbar logic  **************************/
let showbar = document.getElementById("showbar");
let sidebar = document.getElementById("sidebar");

showbar.addEventListener("click", () => {
    if(sidebar.style.display === "none") {
        sidebar.style.display = "flex";
        showbar.classList.remove("fa-bars");
        showbar.classList.add("fa-xmark");
    } else {
        sidebar.style.display = "none";
        showbar.classList.remove("fa-xmark");
        showbar.classList.add("fa-bars");
    }
});



