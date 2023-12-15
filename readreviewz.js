
//SearchParametrs+Intro
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");
const name = urlParams.get("name");

intro = document.getElementById("intro_readreviews");


intro.innerHTML = `Hello ${name}. Here is the list of your reviews!`

var reviews = [];

//FetchingReviewsfromDynamoDBviaGET


fetch(`https://ly6464vea0.execute-api.us-east-1.amazonaws.com/test/readreviews?username=${username}`, {
    method: 'GET',
    headers: {
        'content-type': 'application/json'
    },
})
    .then(response => response.json())
    .then(data => {
        var top = 20;
        var left = 30;
        for (var i in data){
            if(i.endsWith("review")){
                new_div = document.createElement("div");
                new_div.id = i.replace("review","");
                new_div.innerHTML = `<strong>${i.replace("review","")}</strong>: ${data[i]}`
                new_div.style.position = "fixed";
                new_div.style.top = `${top}%`
                new_div.style.left = `${left}%`
                new_div.style.color = "black";
                new_div.style.background = "white";
                new_div.style.padding = "40px";
                new_div.style.borderRadius = "12px";
                reviews.push(new_div);
                document.body.append(new_div);

                top+=20;
            }
            else if(i.endsWith("ratings")){
                mydiv = document.getElementById(i.replace("ratings",""));
                mydiv.innerHTML+=`<br>Ratings given is: ${data[i]}`;
            }
            
        }
    })
    .catch(error => console.error(error)); 

//Setting_Styles_for_Divs
timeout = setTimeout(stylesetter,1000);

function stylesetter(){
    reviews.forEach((div) => {
        try {
            console.log(div.id);
            // Other code related to div
            div.onmouseover= ()=>{
                hover_temp(div);
            }
            div.onmouseleave = ()=>{
                normal_temp(div);
            }
        } catch (error) {
            console.error("Error in forEach:", error);
        }
    });

function hover_temp(div){
        div.style.transform = 'scale(1.5)'; 
        div.style.background = "red";
}

function normal_temp(div){
    div.style.transform = 'scale(1.0)'; 
    div.style.position = "fixed";
    div.style.color = "black";
    div.style.background = "white";
    div.style.padding = "40px";
    div.style.borderRadius = "12px";
}
}

//ProfileDetailsStuff
var profile_pic_holder = document.getElementById("profile_pic_holder");

profile_pic_holder.addEventListener("click",()=>{
    showdetails();
})
function showdetails(){
    profile_pic_holder.style.display = "none";
    profile_details.style.display = "flex";
    list_of_details = Array.from(document.getElementsByClassName("profile_details"));
    for(var i of list_of_details){
        i.innerHTML = `<strong>Name</strong>: ${name}`
    }

}


//NavBarStuff
let trigger = document.getElementById("navimg");   
let navbar = document.getElementById("AllthingsNavBar");
trigger.addEventListener("mouseover",()=>{
    navbar.style.display="block";
    trigger.style.display="none";
})
navbar.addEventListener("mouseleave",()=>{
        navbar.style.display="none";
        trigger.style.display="block";
    
})

navbar_items = Array.from(document.getElementsByClassName("navbar_item"));
console.log(navbar_items);
for(var i of navbar_items){
    console.log(i.id);
    switch(i.id){
        case "Home":
            i.addEventListener("click",()=>{
                window.open(`homepage.html?username=${username}&name=${name}`)
            })
        case "Explore":
                i.addEventListener("click",()=>{
                    window.open(`homepage.html?username=${username}&name=${name}`)
                })
        case "My_FriendZone":
                    i.addEventListener("click",()=>{
                        window.open(`homepage.html?username=${username}&name=${name}`)
                    })
        case "My_Account":
                        i.addEventListener("click",()=>{
                            window.open(`homepage.html?username=${username}&name=${name}`)
                        })
        case "Settings":
                            i.addEventListener("click",()=>{
                                window.open(`homepage.html?username=${username}&name=${name}`)
                            })
    }
}