const grid = document.querySelector("#grid");
const squareSize = 25;


for (i = 0; i < squareSize; i++){
	const column = document.createElement("div");
	for (j = 0; j < squareSize; j++){
		const row = document.createElement("div");
		row.classList.add("square");
		column.appendChild(row);
	}
	grid.appendChild(column);
}