document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('design-canvas');
    const ctx = canvas.getContext('2d');
    let currentTool = 'pencil';
    let drawing = false;
    let startX, startY, isDrawing = false;

    document.getElementById('pencil-tool').addEventListener('click', () => currentTool = 'pencil');
    document.getElementById('rectangle-tool').addEventListener('click', () => currentTool = 'rectangle');
    document.getElementById('circle-tool').addEventListener('click', () => currentTool = 'circle');
    document.getElementById('eraser-tool').addEventListener('click', () => currentTool = 'eraser');
    document.getElementById('line-tool').addEventListener('click', () => currentTool = 'line');
    document.getElementById('text-tool').addEventListener('click', () => currentTool = 'text');
    document.getElementById('color-picker').addEventListener('change', (e) => ctx.strokeStyle = e.target.value);

    document.getElementById('save-design').addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = 'design.png';
        link.href = canvas.toDataURL();
        link.click();
    });

    document.getElementById('download-design').addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = 'design.png';
        link.href = canvas.toDataURL();
        link.click();
    });

    const garmentStructures = {
        shirt: {
            body: { x: 100, y: 100, width: 200, height: 300 },
            sleeve: { x: 50, y: 100, width: 50, height: 150 },
            collar: { x: 100, y: 50, width: 200, height: 50 }
        },
        frock: {
            body: { x: 100, y: 100, width: 200, height: 400 },
            sleeve: { x: 50, y: 100, width: 50, height: 150 },
            neck: { x: 100, y: 50, width: 200, height: 50 }
        },
        jeans: {
            waist: { x: 100, y: 50, width: 200, height: 50 },
            leg: { x: 100, y: 100, width: 100, height: 300 },
            pocket: { x: 150, y: 150, width: 50, height: 50 }
        }
    };

    function drawShirtBody(ctx) {
        const { x, y, width, height } = garmentStructures.shirt.body;
        ctx.strokeRect(x, y, width, height);
    }

    function drawShirtSleeve(ctx) {
        const { x, y, width, height } = garmentStructures.shirt.sleeve;
        ctx.strokeRect(x, y, width, height);
    }

    function drawShirtCollar(ctx) {
        const { x, y, width, height } = garmentStructures.shirt.collar;
        ctx.strokeRect(x, y, width, height);
    }

    function drawFrockBody(ctx) {
        const { x, y, width, height } = garmentStructures.frock.body;
        ctx.strokeRect(x, y, width, height);
    }

    function drawFrockSleeve(ctx) {
        const { x, y, width, height } = garmentStructures.frock.sleeve;
        ctx.strokeRect(x, y, width, height);
    }

    function drawFrockNeck(ctx) {
        const { x, y, width, height } = garmentStructures.frock.neck;
        ctx.strokeRect(x, y, width, height);
    }

    function drawJeansWaist(ctx) {
        const { x, y, width, height } = garmentStructures.jeans.waist;
        ctx.strokeRect(x, y, width, height);
    }

    function drawJeansLeg(ctx) {
        const { x, y, width, height } = garmentStructures.jeans.leg;
        ctx.strokeRect(x, y, width, height);
    }

    function drawJeansPocket(ctx) {
        const { x, y, width, height } = garmentStructures.jeans.pocket;
        ctx.strokeRect(x, y, width, height);
    }

    document.getElementById('garment-selector').addEventListener('change', function(event) {
        const garmentType = event.target.value;
        const garmentParts = document.getElementById('garment-parts');
        garmentParts.innerHTML = ''; // Clear previous parts

        if (garmentStructures[garmentType]) {
            Object.keys(garmentStructures[garmentType]).forEach(part => {
                const button = document.createElement('button');
                button.id = `${garmentType}-${part}`;
                button.textContent = part.charAt(0).toUpperCase() + part.slice(1);
                button.addEventListener('click', () => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    switch (part) {
                        case 'body':
                            garmentType === 'shirt' ? drawShirtBody(ctx) : drawFrockBody(ctx);
                            break;
                        case 'sleeve':
                            garmentType === 'shirt' ? drawShirtSleeve(ctx) : drawFrockSleeve(ctx);
                            break;
                        case 'collar':
                            drawShirtCollar(ctx);
                            break;
                        case 'neck':
                            drawFrockNeck(ctx);
                            break;
                        case 'waist':
                            drawJeansWaist(ctx);
                            break;
                        case 'leg':
                            drawJeansLeg(ctx);
                            break;
                        case 'pocket':
                            drawJeansPocket(ctx);
                            break;
                    }
                });
                garmentParts.appendChild(button);
            });
        }
    });

    document.getElementById('garment-parts').addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            alert(`Selected part: ${event.target.id}`);
        }
    });

    canvas.addEventListener('mousedown', (e) => {
        drawing = true;
        startX = e.offsetX;
        startY = e.offsetY;
        if (currentTool === 'line') {
            isDrawing = true;
        }
    });

    canvas.addEventListener('mouseup', () => {
        drawing = false;
        if (isDrawing && currentTool === 'line') {
            isDrawing = false;
        }
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!drawing) return;
        const mouseX = e.offsetX;
        const mouseY = e.offsetY;

        switch (currentTool) {
            case 'pencil':
                drawLine(startX, startY, mouseX, mouseY);
                startX = mouseX;
                startY = mouseY;
                break;
            case 'eraser':
                erase(mouseX, mouseY);
                break;
            case 'line':
                if (isDrawing) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.beginPath();
                    ctx.moveTo(startX, startY);
                    ctx.lineTo(mouseX, mouseY);
                    ctx.stroke();
                }
                break;
            // Add cases for other tools
        }
    });

    function drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    function erase(x, y) {
        ctx.clearRect(x - 5, y - 5, 10, 10);
    }

    // Add functions for other tools
});
