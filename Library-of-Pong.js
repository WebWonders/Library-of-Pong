/* 
* 
* Library-of-Pong.js is a lightweight game engine designed to take a good part of the work out of creating Pong and Pong-variant games
* 
* Courtesy of WebWonders
* 
* Code by apeggs2000
* 
*/

function Window() {
   //create a canvas
   this.canvas = document.createElement("canvas");
   this.canvas.style.backgroundColor = "black";
   this.canvas.width = 500;
   this.canvas.height = 500;
   document.body.appendChild(this.canvas);
   this.ctx = this.canvas.getContext("2d");
   
   this.begin = function() {
     var FPS = 30;
     this.interval = setInterval(FPS, 50);
   }
   
   this.stop = function() {
     clearInterval(this.interval);
   }
   
   this.setStyles = function(backgroundColor, width, height) {
     this.canvas.style.backgroundColor = backgroundColor;
     this.canvas.width = width;
     this.canvas.height = height;
     if (width === NaN) {
       console.log("Width cannot be NaN. Use digits only. You entered: " + width);
     }
     if (height === NaN) {
       console.log("Height cannot be NaN. Use digits only. You entered: " + height);
     }
   }
   
   this.displayType = function(canvasDisplay) {
     this.canvas.style.display = canvasDisplay;
     if (canvasDisplay != 'none' || canvasDisplay != 'block' || canvasDisplay != 'inline-block') {
        console.log(canvasDisplay + " is not a valid argument. Only 'none', 'block', or 'inline-block' will work.");
     }
   }
   
   
   
} //end Window()

function Paddle(gameWindow, width, height, xCoordinate, yCoordinate) {
   this.canvas = gameWindow;
   this.ctx = canas.getContext('2d');
   this.width = width;
   this.height = height;
   this.x = xCoordinate;
   this.y = yCoordinate;
   this.vx = 0;
   this.vy = 0;
   this.color = '#FFFFFF';
   
   this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fill();
   }
   
   this.setBackgroundColor = function(backgroundColor) {
      this.color = backgroundColor;
   }
   
   this.update = function(){
    this.x += this.vx;
    this.y += this.vy;
    this.draw();
  }
  
  this.setSize = function(width, height) {
     this.width = width;
     this.height = height;
     if (width === NaN) {
       console.log("Width cannot be NaN. Use digits only. You entered: " + width);
     }
     if (height === NaN) {
       console.log("Height cannot be NaN. Use digits only. You entered: " + height);
     }
   }
  }

} //end Paddle()

function Ball(gameWindow, radius, minSpeed, maxSpeed) {
   this.canvas = gameWindow;
   this.centerCanvasX = canvas.width / 2;
   this.centerCanvasY = canvas.height / 2;
   this.ctx = canvas.getContext('2d');
   this.radius = radius;
   this.minSpeed = minSpeed;
   this.maxSpeed = maxSpeed;
   this.x = centerCanvasX;
   this.y = centerCanvasY;
   this.vx = 0;
   this.vy = 0;
   this.color = '#FFFFFF';
   
   this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    };
    
    this.setBackgroundColor = function(backgroundColor) {
       this.color = backgroundColor;
    }
    
    this.setX = function(newX) {
       this.x = newX;
    }
    
    this.setY = function(newY) {
       this.y = newY;
    }
    
    this.update = function() {
       this.x += this.vx;
       this.y += this.vy;
       this.draw();
    }
} //end Ball()
