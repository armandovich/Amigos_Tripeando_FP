const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const phone = document.querySelector('#phn');
const address = document.querySelector('#add');
const email = document.querySelector('#eid');
const pass = document.querySelector('#pass');
const cpass = document.querySelector('#cpass');
const gender = document.querySelector('#m');
const country = document.querySelector('#co');
const date = document.querySelector('#birthday');

const submitBtn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");

clearBtn.addEventListener('click', function() {
  fname.value = "";
  lname.value = "";
  phone.value = "";
  address.value = "";
  email.value = "";
  pass.value = "";
  cpass.value = "";
});

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();

  if(fname.value == "") {
    alert("First name can't be empty.");
    return;
  } else if(lname.value == "") {
    alert("Last name can't be empty.");
    return;
  } else if(address.value == "") {
    alert("Address can't be empty.");
    return;
  } else if(email.value == "") {
    alert("Email can't be empty.");
    return;
  } else if(pass.value == "" || cpass.value == "") {
    alert("Password can't be empty.");
    return;
  } else if (pass.value != cpass.value) {
    alert("Password doesn't match.");
    return;
  }

  var user = {
    'name' : fname.value + ' ' + lname.value,
    'phone' : phone.value,
    'address' : address.value,
    'email' : email.value,
    'pass' : pass.value,
    'gender' : gender ? "Make" : "Female",
    'country' : country.value,
    'date' : date.value
  };

  localStorage.setItem('user', JSON.stringify(user));
  
  alert("Thank you for registering.");

  window.open("login.html", "_self")
});
  