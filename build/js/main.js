const initApp = () => {
    const menuButton = document.getElementById("dropdown-button");
    const menuSection = document.getElementById("mobile-menu");

    const toggleMenue = () => {
        menuSection.classList.toggle("hidden");
        menuSection.classList.toggle("flex");
    }

    menuButton.addEventListener("click", toggleMenue);
    menuSection.addEventListener("click", toggleMenue);
}

document.addEventListener("DOMContentLoaded", initApp);