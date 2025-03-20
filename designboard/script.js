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
            collar: {
                mandarin: { x: 100, y: 50, width: 200, height: 50 },
                spread: { x: 100, y: 50, width: 200, height: 50 },
                // ...other collar types...
            },
            sleeves: {
                raglan: { x: 50, y: 100, width: 50, height: 150 },
                bishop: { x: 50, y: 100, width: 50, height: 150 },
                // ...other sleeve types...
            },
            cuffs: {
                barrel: { x: 50, y: 250, width: 50, height: 50 },
                french: { x: 50, y: 250, width: 50, height: 50 },
                // ...other cuff types...
            },
            hemline: {
                straight: { x: 100, y: 400, width: 200, height: 50 },
                curved: { x: 100, y: 400, width: 200, height: 50 },
                // ...other hemline types...
            },
            placket: {
                concealed: { x: 100, y: 100, width: 200, height: 300 },
                standard: { x: 100, y: 100, width: 200, height: 300 },
                // ...other placket types...
            }
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

    function drawShirtCollar(ctx, type) {
        const { x, y, width, height } = garmentStructures.shirt.collar[type];
        ctx.strokeRect(x, y, width, height);
    }

    // Add function to draw spread collar
    function drawSpreadCollar(ctx) {
        const { x, y, width, height } = garmentStructures.shirt.collar.spread;
        ctx.strokeRect(x, y, width, height);
    }

    function drawShirtSleeves(ctx, type) {
        const { x, y, width, height } = garmentStructures.shirt.sleeves[type];
        ctx.strokeRect(x, y, width, height);
    }

    function drawShirtCuffs(ctx, type) {
        const { x, y, width, height } = garmentStructures.shirt.cuffs[type];
        ctx.strokeRect(x, y, width, height);
    }

    function drawShirtHemline(ctx, type) {
        const { x, y, width, height } = garmentStructures.shirt.hemline[type];
        ctx.strokeRect(x, y, width, height);
    }

    function drawShirtPlacket(ctx, type) {
        const { x, y, width, height } = garmentStructures.shirt.placket[type];
        ctx.strokeRect(x, y, width, height);
    }

    function drawMandarinCollar(ctx) {
        const { x, y, width, height } = garmentStructures.shirt.collar.mandarin;
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

    document.getElementById('garment-selector').remove();
    document.getElementById('garment-parts').remove();

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

    async function loadDesigns() {
        const response = await fetch('designs.json');
        const designs = await response.json();
        const designSelector = document.getElementById('design-selector');

        designs.forEach(design => {
            const option = document.createElement('option');
            option.value = design.id;
            option.textContent = design.name;
            designSelector.appendChild(option);
        });

        designSelector.addEventListener('change', (event) => {
            const selectedDesign = designs.find(design => design.id === event.target.value);
            if (selectedDesign) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                selectedDesign.parts.forEach(part => {
                    switch (part) {
                        case 'collar':
                            drawSpreadCollar(ctx); // Draw Spread collar
                            break;
                        case 'sleeves':
                            drawShirtSleeves(ctx, 'raglan'); // Example type
                            break;
                        case 'cuffs':
                            drawShirtCuffs(ctx, 'barrel'); // Example type
                            break;
                        case 'hemline':
                            drawShirtHemline(ctx, 'straight'); // Example type
                            break;
                        case 'placket':
                            drawShirtPlacket(ctx, 'concealed'); // Example type
                            break;
                        case 'body':
                            drawFrockBody(ctx);
                            break;
                        case 'sleeve':
                            drawFrockSleeve(ctx);
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
            }
        });
    }

    loadDesigns();
});
