const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const phone = document.querySelector('.phn');
const address = document.querySelector('.add');
const email = document.querySelector('.eid');
const pass = document.querySelector('.pass');
const gender = document.querySelector('.gender');
const country = document.querySelector('.co');
const date = document.querySelector('.birthday');


submitBtn.addEventListener('click', () => {
    localStorage.setItem('First Name', fname.value);
    localStorage.setItem('Last Name', fname.value);
    localStorage.setItem('Phone Number', phone.value);
    localStorage.setItem('Address', address.value);
    localStorage.setItem('Email ID', email.value);
    localStorage.setItem('Password', pass.value);
    localStorage.setItem('Gender', gender.value);
    localStorage.setItem('Country', country.value);
    localStorage.setItem('Date', date.value);
  });
  