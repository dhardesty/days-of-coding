
function liked(element){
    var bleh = parseInt(element.parentElement.querySelector(".amountoflikes").innerText);
    var placeholder = element.parentElement.querySelector(".amountoflikes");
    placeholder.innerText = bleh + 1;
}
