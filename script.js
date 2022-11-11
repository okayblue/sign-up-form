const pass = document.querySelector(".pass");
const pass2 = document.querySelector(".confirm");
const errormessage = document.querySelector(".errormessage")
const form = document.querySelector(".signup-form");

pass.addEventListener('keyup', confirmPass)
pass2.addEventListener('keyup', confirmPass)

function confirmPass() {
  if (pass.value !== pass2.value) {
    errormessage.textContent = "* Passwords do not match";
    pass.classList.add('error');
    pass2.classList.add('error');   
    return false;
  } else if (pass.value === pass2.value) {
    errormessage.textContent = '';
    pass.classList.remove('error');
    pass2.classList.remove('error');  
    return true;
  }
}


