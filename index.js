const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const saveNoteBtn = document.getElementById("saveNote-btn")
let myNotes = []
let notesFromLocalStorage = JSON.parse(localStorage.getItem("myNotes"))


if (notesFromLocalStorage) {
    myNotes = notesFromLocalStorage
    render(myNotes)
}

//EXIBIR LISTA
function render(notes) {
    let listItems = ""
    for (let i = 0; i < notes.length; i++) {
        listItems += `
        <li>
        <div id="listItem">
            <a>
                ${notes[i]}
            </a>
           <button id="deleteItem-btn${[i]}" class="box" ><i class="fa fa-times"></i></button>        
        </div>
        </li>
        `
    }
    ulEl.innerHTML = listItems

    let buttons = document.querySelectorAll(".box");
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", deleteItem);
    }
}

function deleteItem(evt) {

    //TRAMBIQUE
    let itemToDelete = evt.currentTarget.valueOf().id
    let x = itemToDelete.replace('deleteItem-btn','');
    myNotes.splice(x,1)

    localStorage.setItem("myNotes", JSON.stringify(myNotes))
    render(myNotes)
}

//click no botão
saveNoteBtn.addEventListener("click", function () {
    if(inputEl.value){
        myNotes.push(inputEl.value)
        //save
        localStorage.setItem("myNotes", JSON.stringify(myNotes))
        render(myNotes)
        inputEl.value = ""
    }
})

//com enter
inputEl.addEventListener("keypress", function (e) {

    if (e.key === 'Enter') {
        console.log('aqui estou')
        if (inputEl.value) {
            myNotes.push(inputEl.value)
            //save
            localStorage.setItem("myNotes", JSON.stringify(myNotes))
            render(myNotes)
            inputEl.value = ""
        }
    }
})
