var timer = null;
var countdownNumber = 10;
var score = 0;
var highscore = 0;
var changeState = null;
var state;

var setState = state;

function scoreboard(){
	console.log('KAKDING');
	if (state == 3) {
	console.log('KAKDING2');
 		score = score+1;
 		document.getElementById('highscore').innerHTML = score;
 		console.log('randomNumber:', randomNumber, 'highscore:', highscore, "state:",  state);

	}
};

var changeState = function (state){
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countdownNumber = 10;
	score = 0;
	document.getElementById('countdown').innerHTML = countdownNumber;
	document.getElementById('highscore').innerHTML = score;

//countdown
	if (state == 2) {
		timer = setInterval(function(){
			countdownNumber =countdownNumber -1;
				document.getElementById('countdown').innerHTML = countdownNumber =countdownNumber;
				if (countdownNumber > 5 && countdownNumber <= 8) {
					//preparing thrusters
					document.getElementById('thrusters').className = 'thrusters show';

				} else{
					document.getElementById('thrusters').className = 'thrusters';
				}

				if (countdownNumber > 0 && countdownNumber < 5) {
					//ready for launch
					document.getElementById('preparing').className = 'preparing show';

				} else{
					document.getElementById('preparing').className = 'preparing';
				}

				if (countdownNumber <= 0) {
					changeState(3);					
				}
		}, 500);
	
	} else if (state == 3) {
		scoreboard();
		var success = setTimeout(function ()
			{
/*				var randomNumber = Math.round(Math.random()*10);
*/					console.log('randomNumber:', randomNumber, 'highscore:', highscore, "state:",  state);
				
				//succes	
/*				if (randomNumber > 5) {
					changeState(4);
				}else{
					changeState(5);
				}*/
			}, 5000);
	};
};

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myArr[0];
  }
};
xmlhttp.open("GET", "sommen.JSON", true);
xmlhttp.send();

// //check mouse move voor parallax
// var input = {
// 	mouseX: {
// 		start:997,
// 		end: window.innerWidth,
// 		current: 0,
// 	},
// 	mouseY: {
// 		start:0,
// 		end: window.innerHeight,
// 		current: 0,
// 	}
// };

// input.mouseX.range = input.mouseX.end - input.mouseX.start;
// input.mouseY.range = input.mouseY.end - input.mouseY.start;


// var handleMouseMove = function(event){
// 	input.mouseX.current = event.clientX;
// 	input.mouseX.fraction = (input.mouseX.current - input.mouseX.start ) / input.mouseX.range;

// 	input.mouseY.current = event.clientY;
// 	input.mouseY.fraction = (input.mouseY.current - input.mouseY.start ) / input.mouseY.range;

// 	if (input.mouseX.fraction < 0) {
// 	input.mouseX.fraction = 0;
//  }

//  console.log('fraction X' , input.mouseX.fraction);
//  console.log('fraction Y' , input.mouseY.fraction);



// }



// var handleResize = function(){
// 	input.mouseX.end = window.innerWidth;
// 	input.mouseX.range = input.mouseX.end - input.mouseX.start;

// 	input.mouseY.end = window.innerHeight;
// 	input.mouseY.range = input.mouseY.end - input.mouseY.start;
// }

// window.addEventListener("mousemove", handleMouseMove);
// window.addEventListener("resize", handleResize);
