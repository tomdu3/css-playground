const dropdownItems = document.querySelectorAll(".dropdown-item");

dropdownItems.forEach((item) => {
    item.addEventListener("click", (event) => {
        // Prevent default link behavior if necessary
        event.preventDefault();

        const isActive = item.classList.contains("active");
        const icon = item.querySelector(".dropdown i");
        const content = document.getElementById(item.dataset.id);

        // Reset all dropdowns first
        dropdownItems.forEach((other) => {
            if (other !== item) {
                other.classList.remove("active");
                other.querySelector(".dropdown i").classList.replace("fa-chevron-up", "fa-chevron-down");
                document.getElementById(other.dataset.id).style.setProperty("--open", "none");
            }
        });

        // Toggle the clicked dropdown
        if (!isActive) {
            item.classList.add("active");
            icon.classList.replace("fa-chevron-down", "fa-chevron-up");
            content.parentElement.style.display = "block";
            content.style.setProperty("--open", "initial");
        } else {
            item.classList.remove("active");
            icon.classList.replace("fa-chevron-up", "fa-chevron-down");
            content.style.setProperty("--open", "none");
            content.parentElement.style.display = "none";
        }
    });
});
