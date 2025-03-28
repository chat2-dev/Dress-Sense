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

    const canvas = document.createElement("canvas");
    canvas.id = "design-canvas";
    canvas.width = 800;
    canvas.height = 600;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    async function fetchDesignElement(elementId) {
        const response = await fetch("designs.json");
        const designs = await response.json();
        return designs.find(design => design.id === elementId);
    }

    async function drawMandarinCollar() {
        const mandarinCollar = await fetchDesignElement("mandarin-collar");
        if (mandarinCollar) {
            const { x, y, width, height, color } = mandarinCollar.properties;
            ctx.fillStyle = color;
            ctx.fillRect(x, y, width, height);
        }
    }

    // Example: Draw the Mandarin Collar when the "Start Designing" button is clicked
    document.getElementById("start-shirt-design").addEventListener("click", function () {
        drawMandarinCollar();
    });
});
