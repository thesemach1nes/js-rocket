var input = {
	mouseX: {
		start:0,
		end: window.innerWidth,
		current: 0,
	},
	mouseY: {}
};

input.mouseX.range = input.mouseX.end - input.mouseX.start;

window.addEventListener('mousemove' , function(){
	console.log('working')
})