


let btns = document.querySelectorAll("button");
let imageplaceholder = document.getElementById("RollingImages");
btns.forEach(button=>{
    button.addEventListener("click",()=>{
        str = button.id[button.id.length-1];
        console.log(str);
        imageplaceholder.style.backgroundImage = `url("image${str}.jpeg")`
    })
})


const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
const name = urlParams.get('name')
console.log('Username:', username);


let whatup = document.getElementById("Whatup")

whatup.innerHTML= `<h1>What up ${name}...What do you wanna do?????`


let post = document.getElementById("postrev");
let get = document.getElementById("readrev");
post.addEventListener("click",()=>{
    window.location.href = `http://127.0.0.1:5500/postreviews.html?username=${username}&name=${name}`
})

get.addEventListener("click",()=>{
    window.location.href = `http://127.0.0.1:5500/readreviews.html?username=${username}&name=${name}`
})

/*NavBarStuff*/

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