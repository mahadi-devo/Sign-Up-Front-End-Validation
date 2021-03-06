/* Sign Up FrontEnd Validation
   YelpCamp :- https://github.com/mahadi-devo/YelpCamp
*/

const form = document.getElementById('form');
const formControl1 = document.querySelector('.form-control1');
const username = document.getElementById('username');
let failures=[];

form.addEventListener('submit', e => {
        e.preventDefault();
        e.stopPropagation();

        checkInputs();

        if(failures.length === 0){
            form.submit();
        }

  });

function checkInputs(e) {

  const usernameValue = username.value.trim();
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
 

  if(usernameValue === '') {
        error('username','Username cannot be blank');
  }else{
        success('username');    
  }
    if(firstNameValue === '') {
        error('firstName','First Name cannot be blank');
  }else{
        success('firstName');    
  }

  if(lastNameValue === '' ) {
        error('lastName', 'Last name cannot be blank');
  } else {
        success('lastName');
  }
  if(emailValue === '') {
      error('email', 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
      error('email', 'Not a valid email');
  } else {
        success('email');   
  }
  if(passwordValue === '') {
        error('password', 'Password cannot be blank');
  } else if(!isPassword(passwordValue)){
        error('password', 'password does not meet the length');
  } else{
        success('password');
  }
  if(password2Value > 0){
        failures.forEach((fail)=>{
             fail.input == password;
             error('password2', 'Password must be valid');
           });
  }else if(password2Value === '') {
        error('password2', 'Password2 cannot be blank');
  }else if(passwordValue !== password2Value) {
        error('password2', 'Passwords does not match');
  }else{
        success('password2');
  }

}

function success(input){
      let field = document.getElementById(input);      
      let formControl = field.parentElement;

      init(formControl);

      formControl.querySelector('input').style.borderColor = "green";
      formControl.querySelector('i.fa-check-circle').style.visibility = "visible";
      formControl.querySelector('i.fa-check-circle').style.color = "green";
}

function error(input, msg){
      failures.push({input: input, msg: msg});
      

      let field = document.getElementById(input);      
      let formControl = field.parentElement;

      init(formControl);

      formControl.querySelector('input').style.borderColor = "#e74c3c";
      formControl.querySelector('i.fa-exclamation-circle').style.visibility = "visible";
      formControl.querySelector('i.fa-exclamation-circle').style.color = "#e74c3c";
      formControl.querySelector('small').style.visibility = "visible";
      formControl.querySelector('small').innerText = msg;

}

function init(para){
      para.querySelector('input').style.borderColor = "#f0f0f0";
      para.querySelector('i.fa-exclamation-circle').style.visibility = "hidden";
      para.querySelector('i.fa-check-circle').style.visibility = "hidden";
      para.querySelector('i.fa-exclamation-circle').style.color = "";
      para.querySelector('i.fa-check-circle').style.color = "";
      para.querySelector('small').style.visibility = "hidden";
      para.querySelector('small').innerText = "";

}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password){
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password);
}