
const myCanvas = document.querySelector('#myCanvas');
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
    
const ctx = myCanvas.getContext('2d');
    // ctx.fillStyle = '#000';
    // ctx.fillRect(100, 100, 80, 80);
    // ctx.strokeStyle = '#d3e';

    
// for (var i=0; i <10; i++) {
//     var x = Math.random()*window.innerWidth;
//     var y = Math.random()*window.innerHeight;
//     var dx = Math.random()*20;
//     var dy= Math.random()*20;
//     function animate(){
//         requestAnimationFrame(animate);
//         ctx.clearRect(0,0,innerWidth,innerHeight)
//     ctx.beginPath();
//     ctx.arc(x,y,40,0,Math.PI*2,false);
//     ctx.strokeStyle = 'blue';
//     ctx.stroke();
//     x+=dx;
//     y+=dy;
// }
// }
// animate();
function Circle(x,y,radius,dy,dx){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dy = dy;
    this.dx = dx;

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        ctx.strokeStyle = 'red';
        ctx.stroke();
    }
    this.update = function(){
        if (this.x+this.radius > innerWidth || this.x-this.radius < 0){
            this.dx = -this.dx;
           } else if (this.y+this.radius>innerHeight || this.y-this.radius <0){
            this.dy = -this.dy;
           }
           this.x +=this.dx;
           this.y +=this.dy;
           this.draw();
    }
    
}


var arr = [];
for (var i =0; i <100;i++ ){
    var x = Math.random()*window.innerWidth;
    var y = Math.random()*window.innerHeight;
    var dx = (Math.random()-0.5);
    var dy= (Math.random()-0.5);
    var radius = 30;
    arr.push(new Circle(x,y,dx,dy,radius));
}


    function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,innerWidth,innerHeight);
        
       for (var i=0; i < arr.length; i ++){
            arr[i].update();
       }
        

        
        
    }
    animate();
 

    
