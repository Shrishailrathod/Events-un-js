// function update() {
//     let element = document.getElementById("Hello").innerHTML = "Rathod"
// }

// Events :
// let button = document.getElementById("btn")

// button.addEventListener("mousemove", () => {
//     // alert("Hello Rathod")
//     document.querySelector(".box").innerHTML = "<b> Yayy You were clicked</b>  Enjoy your click"
// })


// Event bubbling :
// event bubbling is an method of js for Example we are created a three classes  like container,childcontainer and child ,each class is inside one of each 
// and a one created a buton named ad clik me or any.. if and alerts something on each element ,after that we click on child class the alert will comes three times 
// to stop this we just e.propagation
// example
document.querySelector(".child").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("Yaah you were clicked ")
})
document.querySelector(".childcontainer").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("Yaah you were clicked ")
})
document.querySelector(".container").addEventListener("click",()=>{
    alert("Yaah you were clicked ")
})

