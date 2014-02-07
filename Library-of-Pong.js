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
