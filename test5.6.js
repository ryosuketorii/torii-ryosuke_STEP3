var input = document.getElementById("inputText");
var addBtn = document.getElementById("addButton");
var table = document.getElementById("myTable");
var MAX_ROWS = 3;

addBtn.addEventListener("click", function() {
  var text = input.value;
  text = text.trim();

  var dataRowCount = table.rows.length - 1;
  if (dataRowCount >= MAX_ROWS) {
    table.deleteRow(1);
  }

  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  cell1.textContent = text;

  var delBtn = document.createElement("button");
  delBtn.textContent = "削除";
  delBtn.addEventListener("click", function() {
    table.deleteRow(row.rowIndex);
  });

  cell2.appendChild(delBtn);

  input.value = "";
});
