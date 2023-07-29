document.querySelector('.loginForm').addEventListener('submit' , (e) => {
    e.preventDefault();
    clearErrors();
    const email  = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const validJson = validateObj(email , password)
    if( check(validJson) ){
        //instead of using log should fetch to the endpoint that checks with database
        const payload = new URLSearchParams(validJson)
        console.log([...payload]);
        //get token from database and save it in localstorage

        // fetch ("http://localhost:5500/login/client" , { method : "POST"})
        // .then(res => res.json())
        // .then( console.log("hello"));
        
    }
});

const validateObj = (email , password) => {
    const re = /^(?=.*[!@#$%^&*_()-+=/"':;><?~`])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let pass = password;
    let mail = email; 
    if(re.test(password) == false){
        pass = undefined
    }
    if (email.length == 0){
        mail = undefined
    }
    return{ "email" : mail , "password" : pass}
}

const check = (validJson) => {
    let test = true ; 
    if(!validJson["password"]){
        document.querySelector('#error-message').innerText = 
        "password must contain at least 8 chars 1 uppercase 1 lowercas and special char"
        document.querySelector('.error-container').style.display = "block" ;
        test = false ;
    }
    if(!validJson["email"]){
        document.querySelector('#error-message').innerText = "invalid text enter valid email"
        test = false ;
    }
    return test ;
}

const clearErrors = () => {
    document.querySelector('#error-message').innerText = "";
    document.querySelector('.error-container').style.display = "none" ;
}