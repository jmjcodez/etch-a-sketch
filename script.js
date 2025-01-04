const gridBox = document.querySelector("#grid");
let squareQty = 16;
const containerSize = 700;
let squareSize = containerSize / squareQty;
makeSquare(squareQty);
const gridSquare = document.querySelectorAll(".square").forEach(gridSquare => gridSquare.addEventListener("mouseenter",()=>{gridSquare.style.backgroundColor= random_bg_color();
	let currentOpacity = parseFloat(gridSquare.style.opacity) || 0;
	if (currentOpacity < 1) {
			gridSquare.style.opacity = (currentOpacity + 0.1).toString();
	}
}));
const sizeBox = document.querySelector("#gridSize");

sizeBox.addEventListener("click", ()=> {
		let keepGoing = true;
		while (keepGoing){
			let gridInput = prompt("Select Grid Size 1-100",);
			console.log(typeof gridInput);
			console.log(parseInt(gridInput));
			if (parseInt(gridInput) < 0 || parseInt(gridInput) > 100){
				alert("ERROR: Grid size must be a number between 0-100");
			}
			else {
				newGrid = parseInt(gridInput);
				keepGoing = false;}
		}
		console.log (typeof newGrid);
	 	while (gridBox.firstChild) {
			gridBox.removeChild(gridBox.firstChild);}
			squareSize = containerSize / newGrid;
			makeSquare(newGrid);
			const gridSquare = document.querySelectorAll(".square").forEach(gridSquare => gridSquare.addEventListener("mouseenter",()=>{gridSquare.style.backgroundColor= random_bg_color();}));
		
});



function makeSquare(squareQty){
	for (i = 0; i < squareQty; i++){
		const row = document.createElement("div");
		for (j = 0; j < squareQty; j++){
		const square = document.createElement("div");
		square.classList.add("square");
		square.style.width = `${squareSize}px`;
		square.style.height = `${squareSize}px`;
		row.appendChild(square);
		}
		gridBox.appendChild(row);
		}
	};

	function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    return bgColor;
    }
