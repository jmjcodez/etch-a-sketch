const grid = document.querySelector("#grid");
const numRows = 16;
const numColumns = 16;


for (i = 0; i < numColumns; i++){
	const column = document.createElement("div");
	for (j = 0; j < numRows; j++){
		const row = document.createElement("div");
		row.classList.add("square");
		column.appendChild(row);
	}
	grid.appendChild(column);
}