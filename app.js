
const myCanvas = document.querySelector('#myCanvas');
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
    
const ctx = myCanvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined,
};
var maxRadius = 80;
// var minRadius = 10;
   
window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

var colorArr = ['red','blue','green','purple','orange','yellow','pink'];


//constructor
function Circle(x,y,radius,dy,dx){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.minRadius = radius;
    this.dy = dy;
    this.dx = dx;
    this.color = colorArr[Math.floor(Math.random()*colorArr.length)];
//draw function
    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        ctx.strokeStyle = 'red';
        ctx.fillStyle = this.color
        ctx.fill();
    }
//update function
    this.update = function(){
        //x y wall
        if (this.x+this.radius > innerWidth || this.x-this.radius < 0){
            this.dx = -this.dx;
           } else if (this.y+this.radius>innerHeight || this.y-this.radius <0){
            this.dy = -this.dy;
           }
        //interactivity
        if (mouse.x - this.x <50 && mouse.x - this.x > -50 && mouse.y - this.y <50 && mouse.y - this.y > -50){
            if (this.radius < maxRadius) {
            this.radius += 2;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -=1;
        }

           this.x +=this.dx;
           this.y +=this.dy;
           this.draw();
    }   
}

//object
//call new Circle
var arr = [];
function init(){
    
    for (var i =0; i <600;i++ ){
    var x = Math.random()* (window.innerWidth - radius *2) +radius;
    var y = Math.random()* (window.innerHeight - radius *2) + radius;
    var dx = (Math.random()-0.5)*1;
    var dy= (Math.random()-0.5)*1;
    var radius = Math.random()*3 +1;
    arr.push(new Circle(x,y,radius,dx,dy));
    }
}

//resize
window.addEventListener('resize',function(){
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;
    init();
});


//animate
    function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,innerWidth,innerHeight);
        
       for (var i=0; i < arr.length; i ++){
            arr[i].update();
       }      
    }
    animate();
    init();
 

    
