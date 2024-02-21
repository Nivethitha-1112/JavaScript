var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("button1")

addpopupbutton.addEventListener("click", function(){
popupoverlay.style.display="block"
popupbox.style.display="block"
})

//selecting cancel button
var cancelpopup = document.getElementById("cancel-crochet")
cancelpopup.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//container, add-crochet, one, two, three

var container = document.querySelector(".container")
var addcrochet = document.getElementById("add-crochet")
var crochettype = document.getElementById("one")
var crochetcolor = document.getElementById("two")
var description = document.getElementById("three")

addcrochet.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","sub-container")
    div.innerHTML=`<h2>${crochetcolor.value}</h2>
    <h4>${crochetcolor.value}</h4>
    <p>${description.value}</p>
    <button onclick="deleteitem(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deleteitem(event){
    event.target.parentElement.remove()
}