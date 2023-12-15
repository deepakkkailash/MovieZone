

let stars = document.getElementsByClassName("Starimg");


Array.from(stars).forEach((star) => {
    star.addEventListener("click", () => {
        const unchecked ="http://127.0.0.1:5500/StarUnchecked.png"
        if(star.src === unchecked){
            star.src = "StarChecked.png";
        }
        else{
            console.log(star.src);
            star.src = "StarUnchecked.png";
        };
    });
});

let submit = document.getElementById("submitbutton");

function calculatemarks(){
    var marks = 0;
    const checked = "http://127.0.0.1:5500/StarChecked.png"
    Array.from(stars).forEach((star)=>{
        if(star.src===checked){
            marks+=1;
        }
    })
    return marks
}


const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");

submit.addEventListener("click",(event)=>{
    event.preventDefault();
    let marks = calculatemarks();
    console.log(marks)
    let form = new FormData(document.getElementById("reviewform"));
    console.log(form);
    form.forEach((value,key)=>{
        console.log(value,key);
    })
    const jsonObject = {};
    jsonObject["username"]=username
    form.forEach((value, key) => {
        jsonObject[key] = value;
    });
    jsonObject["review"]=`${jsonObject["review"]}${marks}`;
    fetch('https://ly6464vea0.execute-api.us-east-1.amazonaws.com/test/postreview',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(jsonObject)
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.error(error))
})