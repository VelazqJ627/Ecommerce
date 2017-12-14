// this is a javaScript Comment 
//wondow is a class and onload is a built in object
// rolloverInit a function we are making 
window.onload = rolloverInit;
function rolloverInit() {
	for(var i=0; i<document.images.length;i++) {
		if(document.images[i].parentNode.tagName =="A"){
			setupRollover(document.images[i]);
		}
	}
}
//i integer; [] either an array or object that has yet to be created
//loop run something til e hit a condition

function setupRollover(thisImage) {
	thisImage.outImage = new Image();
	thisImage.outImage.src = thisImage.src;
	thisImage.onmouseout = function(){
		this.src = this.outImage.src;
	}
	thisImage.overImage = new Image();
	thisImage.overImage.src = "images/" + thisImage.id + "_on.gif";
		thisImage.onmouseover = function(){
		this.src = this.overImage.src;
	}
}
