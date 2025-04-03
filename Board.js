// Basic HTML structure with dropdowns for dress components and visual representation
const dressParts = {
    base: ['T-Shirt', 'Blouse', 'Gown', 'Jacket'],
    sleeves: ['Short Sleeve', 'Long Sleeve', 'Sleeveless'],
    neckline: ['V-Neck', 'Round Neck', 'Collar'],
    fabric: ['Cotton', 'Silk', 'Denim', 'Linen']
};

function createDropdown(id, options) {
    const select = document.createElement('select');
    select.id = id;
    select.addEventListener('change', updateDesign);
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });
    return select;
}

function setupUI() {
    const container = document.getElementById('design-container');
    Object.keys(dressParts).forEach(part => {
        const label = document.createElement('label');
        label.textContent = part.charAt(0).toUpperCase() + part.slice(1) + ': ';
        const dropdown = createDropdown(part, dressParts[part]);
        container.appendChild(label);
        container.appendChild(dropdown);
        container.appendChild(document.createElement('br'));
    });
    
    // Create a canvas for the dress design
    const canvas = document.createElement('canvas');
    canvas.id = 'designCanvas';
    canvas.width = 200;
    canvas.height = 300;
    container.appendChild(canvas);
    updateDesign();
}

function updateDesign() {
    const canvas = document.getElementById('designCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Base Shape
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(50, 50, 100, 150);
    
    // Sleeves
    ctx.fillStyle = 'blue';
    ctx.fillRect(30, 50, 40, 50);
    ctx.fillRect(130, 50, 40, 50);
    
    // Neckline
    ctx.fillStyle = 'darkblue';
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(100, 20);
    ctx.lineTo(150, 50);
    ctx.fill();
}

document.addEventListener('DOMContentLoaded', setupUI);
