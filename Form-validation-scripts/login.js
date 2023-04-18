const form = document.getElementById('form');
const username = document.getElementById('username');
const pass = document.getElementById('pass');
const login = document.getElementById('login')

const setSuccess = (element) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerHTML = '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}

const setError = (element,message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerHTML = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

login.addEventListener('click',(e)=>{
    e.preventDefault();
    validateInputs();
})

function validateEmail(email) 
{
  let re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

  return re.test(email);
}

const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const passValue = pass.value.trim();
    if(usernameValue===''){
        setError(username,'Username is required');
    }else{
        setSuccess(username);
    }
    if(passValue===''){
        setError(pass,"Password is required");
    }else if(passValue.length <8){
        setError(pass,'Password must have minimum 8 characters!');
    }else{
        setSuccess(pass);
    }
    
}