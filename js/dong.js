.onload = function(){
	var oDiv = document.getElementById('hand icon fa-hand-o-up');
	oDiv.onmouseover = function(){
		startMove(10,0);
	}
	oDiv.onmouseout = function(){
		startMove(-10,-200);
	}
}

var timer = null;
function startMove(speed,itagle){
	clearInterval(timer);
	var oDiv = document.getElementById('hand icon fa-hand-o-up');
	timer = setInterval(function(){
		if(oDiv.offsetLeft==itagle){
			clearInterval(timer);
		}
		else{
		oDiv.style.left = oDiv.offsetLeft+speed+'px';}
	},30)
}