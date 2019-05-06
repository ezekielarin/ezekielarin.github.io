var staffRecords = [
    {"employedBy": "Alice","staff_name": "James Matthews","phone":"+422323234","address":"elington street","salary":"20000","index":1},
    {"employedBy": "Bob","staff_name": "Mark Hanson","phone":"+422323234","address":"anderson drive","salary":"20000","index":2},
    {"employedBy": "Carol","staff_name": "Thomas Cook","phone":"+422323234","address":"north dakota","salary":"20000","index":3},
    {"employedBy": "herbert","staff_name": "Roland Smith","phone":"+434334","address":"casamila junction","salary":"34000","index":3}
  ];



  function showRecords() {
    document.getElementById('stafflist').innerHTML = "";
    document.getElementById('stafflist').innerHTML = "<tr><th>Name</th><th>Address</th><th>phone</th><th>Salary</th><th>Employed By</th> </tr>";

    for (var i = 0; i < staffRecords.length; i++) {
    var stf = staffRecords[i];
    document.getElementById('stafflist').innerHTML += "<tr><td>"+stf.staff_name+"<td><td>"+stf.address+"<td><td>"+stf.phone+"<td><td>"+stf.salary+"<td><td>"+stf.employedBy+"<td></tr>";
    console.log(stf);
     }

    
  }



$('#addstaff').click(async function(){
  var employer = ($('#employer').val()),
      staff_name = ($('#staff_name').val());
      address = ($('#address').val());
      salary = ($('#salary').val());
      phone = ($('#phone').val());

  staffRecords.push({
    employedBy: employer,
    staff_name: staff_name,
    phone: phone,
    address: address,
    salary: salary,
    index: staffRecords.length+1,
  })

  showRecords();
});

