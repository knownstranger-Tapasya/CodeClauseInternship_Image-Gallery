document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const images = document.querySelectorAll(".card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const filter = button.dataset.filter;

            images.forEach(image => {
                const imageClass = image.querySelector("img").classList;
                if (filter === "all" || imageClass.contains(filter)) {
                    image.style.display = "block"; // Show images matching the filter
                } else {
                    image.style.display = "none"; // Hide images not matching the filter
                }
            });
        });
    });
});