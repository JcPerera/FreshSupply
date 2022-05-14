const container = document.getElementById('container');

const row = [];
const column = [];
const sheetData = [];

const generateLetters = (index) => {
    let letter = "";
    while (index > 0) {
        let mod = index % 26;
        if (mod === 0) {
            letter = "Z" + letter;
            index = Math.floor(index / 26) - 1;
        } else {
            letter = String.fromCharCode(65 + mod - 1) + letter;
            index = Math.floor(index / 26);
        }
    }
    return (letter);
}

const fillColumnAndRow = (size) => {
    for (let index = 0; index < size + 1; index++) {
        row.push(generateLetters(index))
        column.push(index)
    }
}

const buildSheetArray = (size) => {
    fillColumnAndRow(size);
    column.forEach((colItem, colIndex) => {
        let sheetRow = [];
        row.forEach((rowItem, rowIndex) => {
            let isColHeader = colItem === 0;
            let isRowHeader = rowItem === ""
            let isHeader = isRowHeader || isColHeader;
            sheetRow.push({
                colIndex,
                rowIndex,
                cellId: rowItem + colItem,
                data: isColHeader ? rowItem : isRowHeader ? colItem : "",
                isHeader,
                formula: ""
            });
        })
        sheetData.push(sheetRow);
    })
}
const onChangeHandler = (value, cellData) => {
    cellData.data = value;
    sheetData[cellData.colIndex][cellData.rowIndex] = cellData;
}

const buildCellElement = (cellData) => {
    const cell = document.createElement("input");
    cell.className = cellData.isHeader ? "cell header" : "cell";
    cell.id = "cell-" + cellData.cellId;
    cell.value = cellData.data;
    cell.disabled = cellData.isHeader;
    cell.onchange = (e) => onChangeHandler(e.target.value, cellData)
    return cell;
}

const renderSheet = () => {
    clearCanvas();
    sheetData.forEach((col) => {
        const rowContainerDiv = document.createElement("div");
        rowContainerDiv.className = "row-container";
        col.forEach((item) => {
            rowContainerDiv.appendChild(buildCellElement(item))
        })
        container.appendChild(rowContainerDiv)
    })
}

const clearCanvas = () => {
    container.innerHTML = ""
}

buildSheetArray(100)
renderSheet();