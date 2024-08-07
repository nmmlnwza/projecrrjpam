let userSelectd = null;

function Read() {
    let data = {};
    data["idproduct"] = document.getElementById("idproduct").value;
    data["nameproduct"] = document.getElementById("nameproduct").value;
    data["details"] = document.getElementById("details").value;
    data["price"] = document.getElementById("price").value;
    return data;
}

function FormSubmit() {
    let formData = Read();
    if(userSelectd == null){
        Create(formData);
    }
    else{
        Update(formData);
    }
    ClearForm();
}


function Create(data){
    let table = document.getElementById("tblContact").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lname;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.address;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.phone;
    
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="Edit(this)">Edit</a>`;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="Delete(this)">Delete</a>`;
}

function Edit(td){
    userSelectd = td.parentElement.parentElement;
    document.getElementById("idproduct").value = userSelectd.cells[0].innerHTML;
    document.getElementById("nameproduct").value = userSelectd.cells[1].innerHTML;
    document.getElementById("details").value = userSelectd.cells[2].innerHTML;
    document.getElementById("price").value = userSelectd.cells[3].innerHTML;
}

function Update(formData){
    userSelectd.cells[0].innerHTML = formData.fname;
    userSelectd.cells[1].innerHTML = formData.lname;
    userSelectd.cells[2].innerHTML = formData.address;
    userSelectd.cells[3].innerHTML = formData.phone;
}

function Delete(td){
    if(confirm('Are you sure?')){
        row = td.parentElement.parentElement;
        document.getElementById("tblContact").deleteRow(row.rowIndex);
        ClearForm();
    }
}

function ClearForm(){
    document.getElementById("idproduct").value = "";
    document.getElementById("nameproduct").value = "";
    document.getElementById("details").value = "";
    document.getElementById("price").value = "";
    userSelectd = null;
}
