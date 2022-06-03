const form = document.getElementById('form');
const email = document.getElementById('email')
const submit = document.getElementById('submit');
const error = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let messages = []
    const emailValue = email.value.trim();
    if(emailValue === '' || emailValue == null){
        messages.push(error.innerText = 'please provide a valid email address');
        email.style.borderColor = "hsl(354, 100%, 66%)";
    }else if(!checkEmail(emailValue)){
        messages.push(error.innerText = 'please provide a valid email address');
        email.style.borderColor = "hsl(354, 100%, 66%)";
    }else{
        messages.push(error.innerText = '');
        email.style.borderColor = "hsl(0, 0%, 59%)";
    }

     function checkEmail(emailValue){
         const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return validEmail.test(emailValue);
     }

     checkEmail();
})
