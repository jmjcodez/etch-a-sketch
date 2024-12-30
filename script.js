const gridBox = document.querySelector("#grid");
const squareSize = 25;


makeSquare(squareSize);
const gridSquare = document.querySelectorAll(".square").forEach(gridSquare => gridSquare.addEventListener("mouseenter",()=>{gridSquare.classList.add("hover")}));


function makeSquare(squareSize){
	for (i = 0; i < squareSize; i++){
		const column = document.createElement("div");
		for (j = 0; j < squareSize; j++){
			const row = document.createElement("div");
			row.classList.add("square");
			column.appendChild(row);
		}
		gridBox.appendChild(column);
	}
};
