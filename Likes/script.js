
function liked(element){
    var content = parseInt(element.parentElement.querySelector(".amountoflikes").innerText);
    var placeholder = element.parentElement.querySelector(".amountoflikes");
    placeholder.innerText = content + 1;
}
