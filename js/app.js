//if user add a note, add to localStorage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',(e)=>{
    let newTextEntered = document.getElementById('addText');
    let storedNotes = localStorage.getItem("notes");
    if(storedNotes){
        noteObject=JSON.parse(storedNotes);
    }
    else{
        noteObject=[];

    }
    noteObject.push(newTextEntered.value);
    localStorage.setItem("notes",JSON.stringify(noteObject));
    newTextEntered.value="";
})