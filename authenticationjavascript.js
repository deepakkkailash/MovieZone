
let submit = document.getElementById("submit_signup");

let login = document.getElementById("loginbutton");


if(login){
    login.addEventListener("click",(event)=>{
        event.preventDefault();
        let form = new FormData(document.getElementById("loginform"));
        form.forEach((value,key)=>{
            console.log(value,key);
        })
        const jsonObject = {};
        form.forEach((value, key) => {
            jsonObject[key] = value;
        });
        fetch('https://ly6464vea0.execute-api.us-east-1.amazonaws.com/test/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(jsonObject)
        }).then(response=>response.json())
        .then(data=> {
           if(data.success){
            window.location.href = data.redirect_url;
           }
           else{
            window.alert("Authentication Faield!")
           }
        })
    })    
}
else if(submit){
    submit.addEventListener("click", (event) => {
        event.preventDefault(); 
        let form = new FormData(document.getElementById("signupform"));
        form.forEach((value,key)=>{

            console.log(value,key)
        })
    
        const jsonObject = {};
        form.forEach((value, key) => {
            jsonObject[key] = value;
        });
    
        fetch('https://ly6464vea0.execute-api.us-east-1.amazonaws.com/test/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonObject)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    });
    
}


/*CSS*/

