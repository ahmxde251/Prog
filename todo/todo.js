const inputBox= document.getElementById("input1")
const listContainer= document.getElementById("list-container")

document.getElementById("add-btn").addEventListener("click", addTask)

function addTask(){
    if(inputBox.value == ""){
        alert("You must write some Task!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML= '<i class="fa-solid fa-pencil-alt"></i>';
        li.appendChild(span);
        listContainer.appendChild(li);


    }        
    inputBox.value ="";
    saveData()
}
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
listContainer.addEventListener("click",(e) => {
        if(e.target.tagName.toUpperCase() ==="LI"){
            e.target.classList.toggle("Done")
            saveData()
        }
        else if(e.target.tagName.toUpperCase() ==="SPAN"){
            e.target.parentElement.remove()
            saveData()
        }
    })


function showTask(){
    listContainer,innerHTML=localStorage.getItem("data")
}
showTask()