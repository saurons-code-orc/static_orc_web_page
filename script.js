document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger-menu");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-sidebar");

    burger.addEventListener("click", function () {
        sidebar.style.left = "0px";
    });

    closeBtn.addEventListener("click", function () {
        sidebar.style.left = "-250px";
    });
});