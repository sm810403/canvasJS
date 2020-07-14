const myCanvas = document.querySelector('#myCanvas');
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
    
const ctx = myCanvas.getContext('2d');
    ctx.fillStyle('#000')
    ctx.fillRect(100, 100, 80, 80);

