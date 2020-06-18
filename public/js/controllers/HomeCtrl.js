angular.module('HomeCtrl', []).controller('HomeController', function($scope) {
	console.log("aaaaaa");

	const s = sketch => {
		tm=10;
		th=0;
		f=0;
var oldmouse = [0, 0];
		sketch.setup = () => {
		  sketch.createCanvas(sketch.windowWidth/3,sketch.windowHeight);
		};
		sketch.windowResized = () => {
		  sketch.resizeCanvas(sketch.windowWidth/3,sketch.windowHeight);
		};

		function horiz(tm) {
		  sketch.stroke(0);
		  sketch.strokeWeight(tm);
		  var y = 0;
		  while(y<sketch.height) { 
		    sketch.line(0,y,sketch.width,y);
		    y+=tm*2;
		  }
		}

		function angled(a) {
		  sketch.stroke(0);
		  sketch.strokeWeight(tm/2);
		  var y = 0;
		  while(y<sketch.height) { 
		    sketch.line(0,y-a,sketch.width,y+a);
		    y+=tm*2;
		  }
		}

		function getSpeed() {
		  var xdist = sketch.mouseX - oldmouse[0];
		  var ydist =  sketch.mouseY - oldmouse[1];
		  var s = ( sketch.abs(xdist) >  sketch.abs(ydist)) ? "x" : "y";
		  var dist = ( sketch.sqrt(xdist * xdist + ydist * ydist));
		  return sketch.abs(dist);
		}
		sketch.draw = () => {
		  sketch.background(220);
		  angled(th);
		  horiz(tm);
		  th=th+.05;
    	 var speed = getSpeed()/sketch.width;
    	 // console.log(getSpeed());
    	 th=th+speed;
		  tm=tm+0.2;
		  if (tm>1) {
		    tm=0.5;
		  }
		  if (th>sketch.width/20) {
		    th=.1;
		  }
		  // f++;
		  // if (f<1000) {
		  //   saveCanvas('moire_'+f, 'png');
		  // }
		  oldmouse = [sketch.mouseX, sketch.mouseY];
		};
	}
	var codep5 = new p5 (s,"codetgt");


});