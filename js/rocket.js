var timer = null;
var countdownNumber = 10;

var changeState = function (state){
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;


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
		var success = setTimeout(function ()
			{
				var randomNumber = Math.round(Math.random()*10);
					console.log('randomNumber:', randomNumber );

				//succes	
				if (randomNumber > 5) {
					changeState(4);
				}else{
					changeState(5);
				}
			}, 5000);
	};
};