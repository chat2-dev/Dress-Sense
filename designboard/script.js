document.addEventListener("DOMContentLoaded", function () {
    const garmentTypeSelect = document.getElementById("garment-type");
    const nextButton = document.getElementById("next-to-elements");

    const formSelectGarment = document.getElementById("form-select-garment");
    const formShirtElements = document.getElementById("form-shirt-elements");
    const formFrockElements = document.getElementById("form-frock-elements");
    const formJeansElements = document.getElementById("form-jeans-elements");

    nextButton.addEventListener("click", function () {
        const selectedGarment = garmentTypeSelect.value;

        // Ensure all forms are hidden before showing the selected one
        formSelectGarment.style.display = "none";
        formShirtElements.style.display = "none";
        formFrockElements.style.display = "none";
        formJeansElements.style.display = "none";

        // Show the respective form based on the selected garment
        if (selectedGarment === "shirt") {
            formShirtElements.style.display = "block";
        } else if (selectedGarment === "frock") {
            formFrockElements.style.display = "block";
        } else if (selectedGarment === "jeans") {
            formJeansElements.style.display = "block";
        }
    });
});
