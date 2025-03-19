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
