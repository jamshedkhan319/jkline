// Function to add a row
function addRow() {
  const table = document.getElementById("editorTable");
  const newRow = table.insertRow();
  const columnCount = table.rows[0].cells.length;

  for (let i = 0; i < columnCount; i++) {
    const newCell = newRow.insertCell();
    newCell.contentEditable = "true";
    newCell.onclick = () => customizeColumn(newCell);
    newCell.innerText = `New Cell`;
  }
}

// Function to add a column
function addColumn() {
  const table = document.getElementById("editorTable");

  for (let i = 0; i < table.rows.length; i++) {
    const newCell = table.rows[i].insertCell();
    newCell.contentEditable = "true";
    newCell.onclick = () => customizeColumn(newCell);
    newCell.innerText = `New Cell`;
  }
}

// Function to delete the last row
function deleteRow() {
  const table = document.getElementById("editorTable");
  if (table.rows.length > 1) {
    table.deleteRow(-1);
  } else {
    alert("At least one row must remain.");
  }
}

// Function to delete the last column
function deleteColumn() {
  const table = document.getElementById("editorTable");

  if (table.rows[0].cells.length > 1) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }
  } else {
    alert("At least one column must remain.");
  }
}

// Function to clear the table
function clearTable() {
  const table = document.getElementById("editorTable");
  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      table.rows[i].cells[j].innerText = "";
    }
  }
}

// Function to save the table content as a file
function saveTable() {
  const table = document.getElementById("editorTable");
  const tableHTML = table.outerHTML;

  // Create a blob and download the file
  const blob = new Blob([tableHTML], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "table.html";
  link.click();
}

// Function to customize the column color
function customizeColumn(cell) {
  const table = document.getElementById("editorTable");
  const columnIndex = cell.cellIndex;

  // Prompt user for a color
  const color = prompt("Enter a color (e.g., red, #ff0000):");
  if (color) {
    // Apply the color to all cells in the selected column
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].cells[columnIndex].style.backgroundColor = color;
    }
  }
}

// Function to navigate to the details page
function goToDetails() {
  window.location.href = "https://jamshedkhan319.github.io/jk";
}
