// Task 1//
var R1 = document.getElementById("row1");
var R2 = document.getElementById("row2");
var R3 = document.getElementById("row3");
const rows = [R1, R2, R3];
const rowdata = [
  ["Webmaster", "example1@email.com", "Helsinginkatu 3", "X"],
  ["User123", "example2@email.com", "Oulunkatu 1", "-"],
  ["AnotherUser222", "example3@email.com", "Vaasankatu 2", "-"]
];
for (let i = 0; i < rowdata.length; i++) {
  for (let x = 0; x < rowdata[i].length; x++) {
    var cell = document.createElement("td");
    var txt = document.createTextNode(rowdata[i][x]);
    cell.appendChild(txt);
    rows[i].appendChild(cell);
  }
}

// task 2

document.getElementById("submit-data").addEventListener("click", myfunction);
function myfunction() {
  var data_table = document.getElementById("data-table");
  var user = document.getElementById("input-username").value;
  var email = document.getElementById("input-email").value;
  var address = document.getElementById("input-address").value;
  var admin = document.getElementById("input-admin").checked;
  // creating a new row in the table
  var newrow = data_table.insertRow();
  // creating new cells in the row
  var newcell1 = newrow.insertCell();
  var newcell2 = newrow.insertCell();
  var newcell3 = newrow.insertCell();
  var newcell4 = newrow.insertCell();
  // putting input data in the cells
  newcell1.innerHTML = user;
  newcell2.innerHTML = email;
  newcell3.innerHTML = address;
  newcell4.innerHTML = admin ? "X" : "-";
}

// Task 3

var data_table = document.getElementById("table-task3");
document.getElementById("submit-task3").addEventListener("click", adddata);
document.getElementById("empty-table").addEventListener("click", EmptyTable);
function adddata() {
  //var data_table = document.getElementById("data-table");
  var user = document.getElementById("input-username-task3").value;
  var email = document.getElementById("input-email-task3").value;
  var address = document.getElementById("input-address-task3").value;
  var admin = document.getElementById("input-admin-task3").checked;
  // creating a new row in the table
  var newrow = data_table.insertRow();
  // creating new cells in the row
  var newcell1 = newrow.insertCell();
  var newcell2 = newrow.insertCell();
  var newcell3 = newrow.insertCell();
  var newcell4 = newrow.insertCell();
  // putting input data in the cells
  newcell1.innerHTML = user;
  newcell2.innerHTML = email;
  newcell3.innerHTML = address;
  newcell4.innerHTML = admin ? "X" : "-";
}
//doument.getElementById("empty-table").addEventListener("click", EmptyTable);
function EmptyTable() {
  var total_rows = data_table.rows.length;
  //document.getElementById("para").innerHTML = total_rows;
  for (let x = 1; total_rows > x; x++) {
    data_table.deleteRow(-1);
  }
}

// Task 4

var data_table = document.getElementById("table-task4");
document
  .getElementById("submit-data-task4")
  .addEventListener("click", function_task4);
document
  .getElementById("empty-table-task4")
  .addEventListener("click", EmptyTable_task4);
function function_task4() {
  var user = document.getElementById("input-username-task4").value;
  var email = document.getElementById("input-email-task4").value;
  var address = document.getElementById("input-address-task4").value;
  var admin = document.getElementById("input-admin-task4").checked;
  var rownumber = FindUsername(user);
  if (rownumber < 1) {
    //if username is not matched
    // creating a new row in the table
    var newrow = data_table.insertRow();
    // creating new cells in the row
    var newcell1 = newrow.insertCell();
    var newcell2 = newrow.insertCell();
    var newcell3 = newrow.insertCell();
    var newcell4 = newrow.insertCell();
    // putting input data in the cells
    newcell1.innerHTML = user;
    newcell2.innerHTML = email;
    newcell3.innerHTML = address;
    newcell4.innerHTML = admin ? "X" : "-";
  }
  if (rownumber >= 1) {
    // if username is matched
    //updating the exisiting row
    var updatedrow = data_table.getElementsByTagName("tr");
    var cells = updatedrow[rownumber].getElementsByTagName("td")[1];
    cells.textContent = email;
    cells = updatedrow[rownumber].getElementsByTagName("td")[2];
    cells.textContent = address;
    cells = updatedrow[rownumber].getElementsByTagName("td")[3];
    cells.textContent = admin ? "X" : "-";
  }
}
function EmptyTable_task4() {
  var total_rows = data_table.rows.length;

  for (let x = 1; total_rows > x; x++) {
    data_table.deleteRow(-1);
  }
}
function FindUsername(username) {
  // this function compares the username if it already exists
  var rows = data_table.getElementsByTagName("tr");
  console.log("length is " + rows.length);
  for (let i = 0; rows.length > i; i++) {
    var cells = rows[i].getElementsByTagName("td")[0];
    if (cells.textContent === username) {
      var row = i;
      return row;
    } else {
      var row = -1; // if user name is not matched is return -1
    }
  }
  return row;
}

// task 5

var data_table = document.getElementById("table-task5");
document
  .getElementById("submit-data-task5")
  .addEventListener("click", function_task5);
document
  .getElementById("empty-table-task5")
  .addEventListener("click", EmptyTable_task5);
function function_task5() {
  var user = document.getElementById("input-username-task5").value;
  var email = document.getElementById("input-email-task5").value;
  var address = document.getElementById("input-address-task5").value;
  var admin = document.getElementById("input-admin-task5").checked;
  var image = document.getElementById("input-image").files[0];
  var rownumber = FindUsername_task5(user);
  if (rownumber < 1) {
    //if username is not matched
    // creating a new row in the table
    var newrow = data_table.insertRow();
    // creating new cells in the row
    var newcell1 = newrow.insertCell();
    var newcell2 = newrow.insertCell();
    var newcell3 = newrow.insertCell();
    var newcell4 = newrow.insertCell();
    var newcell5 = newrow.insertCell();
    // putting input data in the cells
    newcell1.innerHTML = user;
    newcell2.innerHTML = email;
    newcell3.innerHTML = address;
    newcell4.innerHTML = admin ? "X" : "-";
    if (image) {
      // reading the file to upload image file in cell5
      var reader = new FileReader();
      reader.onload = function () {
        var img = document.createElement("img");
        img.src = reader.result;
        img.width = 64;
        img.height = 64;
        newcell5.appendChild(img);
      };
      reader.readAsDataURL(image);
    } else {
      newcell5.textContent = "-";
    }
  }
  if (rownumber >= 1) {
    // if username is matched
    //updating the exisiting row
    var updatedrow = data_table.getElementsByTagName("tr");
    var cells = updatedrow[rownumber].getElementsByTagName("td")[1];
    cells.textContent = email;
    cells = updatedrow[rownumber].getElementsByTagName("td")[2];
    cells.textContent = address;
    cells = updatedrow[rownumber].getElementsByTagName("td")[3];
    cells.textContent = admin ? "X" : "-";
    UpdateImage(image, updatedrow, rownumber, cells);
  }
}
function EmptyTable_task5() {
  var total_rows = data_table.rows.length;

  for (let x = 1; total_rows > x; x++) {
    data_table.deleteRow(-1);
  }
}
function FindUsername_task5(username) {
  // this function compares the username if it already exists
  var rows = data_table.getElementsByTagName("tr");
  for (let i = 0; rows.length > i; i++) {
    var cells = rows[i].getElementsByTagName("td")[0];
    if (cells.textContent === username) {
      console.log("yes it is matched");
      var row = i;
      return row;
    } else {
      var row = -1; // if user name is not matched is return -1
    }
  }
  return row;
}
function UpdateImage(image, updatedrow, rownumber, cells) {
  // update the image first deleting the old one
  cells = updatedrow[rownumber].getElementsByTagName("td")[4];
  var oldimg = cells.querySelector("img");
  cells.removeChild(oldimg);
  if (image) {
    var reader = new FileReader();
    reader.onload = function () {
      var img = document.createElement("img");
      img.src = reader.result;
      img.width = 64;
      img.height = 64;
      cells.appendChild(img);
    };
    reader.readAsDataURL(image);
  } else {
    cells.textContent = "-";
  }
}
