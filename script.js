const allTabs = document.querySelectorAll(".tab");
const allContents = document.querySelectorAll(".tab-content");

allTabs.forEach((tab, index) => {

    tab.addEventListener("click", function () {

        // Remove active from all tabs
        allTabs.forEach(t => t.classList.remove("active"));

        // Hide all contents
        allContents.forEach(c => c.classList.remove("active"));

        // Activate clicked tab
        this.classList.add("active");

        // Show content with same index
        allContents[index].classList.add("active");

    });

});
