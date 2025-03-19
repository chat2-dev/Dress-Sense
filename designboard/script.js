document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('design-canvas');
    const ctx = canvas.getContext('2d');
    let drawing = false;
    let tool = 'pencil';

    document.getElementById('pencil-tool').addEventListener('click', () => tool = 'pencil');
    document.getElementById('rectangle-tool').addEventListener('click', () => tool = 'rectangle');
    document.getElementById('circle-tool').addEventListener('click', () => tool = 'circle');
    document.getElementById('eraser-tool').addEventListener('click', () => tool = 'eraser');

    canvas.addEventListener('mousedown', (e) => {
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    });

    canvas.addEventListener('mousemove', (e) => {
        if (!drawing) return;
        switch (tool) {
            case 'pencil':
                ctx.lineTo(e.offsetX, e.offsetY);
                ctx.stroke();
                break;
            case 'eraser':
                ctx.clearRect(e.offsetX, e.offsetY, 10, 10);
                break;
            // Additional cases for rectangle and circle can be added here
        }
    });

    canvas.addEventListener('mouseup', () => drawing = false);
    canvas.addEventListener('mouseout', () => drawing = false);
});
