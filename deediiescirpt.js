var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["studentname"] = document.getElementById("studentname").value;
    formData["studentage"] = document.getElementById("studentage").value;
    formData["symptoms"] = document.getElementById("symptoms").value;
    formData["date"] = document.getElementById("date").value;
    formData["timein"] = document.getElementById("timein").value;
    formData["timeout"] = document.getElementById("timeout").value;
    formData["prescriptions"] = document.getElementById("prescriptions").value;   
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("StudentRecords").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.studentname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.studentage;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.symptoms;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.date;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.timein;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.timeout;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.prescriptions;
    cell8 = newRow.insertCell(7);
        cell8.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("studentname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("studentage").value = selectedRow.cells[1].innerHTML;
    document.getElementById("symptoms").value = selectedRow.cells[2].innerHTML;
    document.getElementById("date").value = selectedRow.cells[3].innerHTML;
    document.getElementById("timein").value = selectedRow.cells[4].innerHTML;
    document.getElementById("timeout").value = selectedRow.cells[5].innerHTML;
    document.getElementById("prescriptions").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.studentname;
    selectedRow.cells[1].innerHTML = formData.studentage;
    selectedRow.cells[2].innerHTML = formData.symptoms;
    selectedRow.cells[3].innerHTML = formData.date;
    selectedRow.cells[4].innerHTML = formData.timein;
    selectedRow.cells[5].innerHTML = formData.timeout;
    selectedRow.cells[6].innerHTML = formData.prescriptions;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('StudentRecords').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("studentname").value = '';
    document.getElementById("studentage").value = '';
    document.getElementById("symptoms").value = '';
    document.getElementById("date").value = '';
    document.getElementById("timein").value = '';
    document.getElementById("timeout").value = '';
    document.getElementById("prescriptions").value = '';
    selectedRow = null;
}