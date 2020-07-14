
const myCanvas = document.querySelector('#myCanvas');
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
    
const ctx = myCanvas.getContext('2d');
    ctx.fillStyle = '#000';
    ctx.fillRect(100, 100, 80, 80);
    // ctx.strokeStyle = '#d3e';

    var x = Math.random()*innerWidth;
    var y = Math.random()*innerHeight;
    var dx = 4;
    var dy= 4;
    var radius = 30
    function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,innerWidth,innerHeight);
        ctx.beginPath();
        ctx.arc(x,y,radius,0,Math.PI*2,false);
        ctx.strokeStyle = '#d83';
        ctx.stroke();
        x +=dx;
        y +=dy
        if (x+radius > innerWidth || y+radius>innerHeight){
         x -= dx;
         y -= dy;
        }
    }
    animate();

    
