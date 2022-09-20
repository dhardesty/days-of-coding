var btn = document.querySelector("login")

function clicked (element){
    console.log("ive been clicked!");
    element.innerText = "Logout";
}

function removedefinition (element){
    let PolicyContainer = document.querySelector(".AddDefinition");
    PolicyContainer.remove();
}

function likes (element){
    alert ("Ninja was liked");
}