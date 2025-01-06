// Function to add a row
function addRow() {
  const table = document.getElementById("editorTable");
  const newRow = table.insertRow();
  const columnCount = table.rows[0].cells.length;

  for (let i = 0; i < columnCount; i++) {
    const newCell = newRow.insertCell();
    newCell.contentEditable = false;
    newCell.onclick = () => makeEditable(newCell);
    newCell.ondblclick = () => setColumnColor(newCell);
    newCell.innerText = `New Cell`;
  }
}

// Function to add a column
function addColumn() {
  const table = document.getElementById("editorTable");

  for (let i = 0; i < table.rows.length; i++) {
    const newCell = table.rows[i].insertCell();
    newCell.contentEditable = false;
    newCell.onclick = () => makeEditable(newCell);
    newCell.ondblclick = () => setColumnColor(newCell);
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

// Function to make a cell editable
function makeEditable(cell) {
  cell.contentEditable = "true";
  cell.focus();
}

// Function to set column color on double click
function setColumnColor(cell) {
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

// Function to save the table content as a file
function saveTable() {
  const tableTitle = document.getElementById("tableTitle").innerText; // Get the title text
  const footerText = document.getElementById("footerText").innerText; // Get the footer text
  const table = document.getElementById("editorTable"); // Get the table
  const tableHTML = table.outerHTML; // Get the table's HTML

  // Create the HTML content with styling for title, table, and footer
  const content = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${tableTitle}</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        text-align: center;
      }
      h1 {
        font-size: 24px;
        margin: 20px 0;
        text-transform: uppercase;
      }
      table {
        margin: 20px auto;
        border-collapse: collapse;
        width: 80%;
      }
      td {
        border: 1px solid #ddd;
        padding: 10px;
        text-align: center;
      }
      footer {
        margin-top: 30px;
        font-size: 14px;
        color: #555;
      }
    </style>
  </head>
  <body>
    <h1>${tableTitle}</h1>
    ${tableHTML}
    <footer>
      <p>${footerText}</p>
    </footer>
  </body>
  </html>
  `;

  // Create a Blob and save it as an HTML file
  const blob = new Blob([content], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Save JKline"; // File name
  link.click();
}


// Function to navigate to the details page or website
function goToDetails() {
  window.location.href = "https://jamshedkhan319.github.io/jk"; // Replace with your desired URL
}
