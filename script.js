var popupo=document.querySelector(".popup-overlay")
var popubo=document.querySelector(".popup-box")
var popupbtn=document.getElementById("add-popup-button")

popupbtn.addEventListener("click",function(){
    popupo.style.display="block"
    popubo.style.display="block"
})
var cancel=document.getElementById("cancel-popup")
cancel.addEventListener("click",function(event){
    popupo.style.display="none"
    popubo.style.display="none"
    event.preventDefault()
})
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdes=document.getElementById("book-description-input")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${bookdes.value}</p>
        <button onclick="delbook(event)">Delete</button>`
    container.append(div)
    popupo.style.display="none"
    popubo.style.display="none"
})
function delbook(event){
    event.target.parentElement.remove()
}