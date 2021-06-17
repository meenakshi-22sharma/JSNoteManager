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
    reloadUserNotes();
});

//function to add data cards with notes from local storage
function reloadUserNotes(){
    let storedNotes = localStorage.getItem("notes");
    if(storedNotes){
        noteObject=JSON.parse(storedNotes);
    }
    else{
        noteObject=[];

    }
    let html="";
    let notesParentElement=document.getElementById('myNotes');

    if( storedNotes && storedNotes.length>0){
    noteObject.forEach((element,index) => {
        html+=`<div class="noteCard card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)" >Delete Note</button>
        </div>
      </div>`;
    });

    //on deleting all node, storedNodes was not empty but hmtl length is till 0
    if(html.length==0){
         html=`Nothing to show, Create Notes now! :) `;
        }
    notesParentElement.innerHTML=html;
}
else{
    notesParentElement.innerHTML=`Nothing to show, Create Notes now! :) `;
}
}


// on window load add data from local storage is present
window.onload=(event)=>{
    reloadUserNotes();
};

//function to delete a note
function deleteNote(nodeIndex){
    let storedNotes = localStorage.getItem("notes");
    if(storedNotes){
        noteObject=JSON.parse(storedNotes);
    }
    else{
        noteObject=[];

    }
    noteObject.splice(nodeIndex,1); // delete 1 item from index
    localStorage.setItem("notes",JSON.stringify(noteObject));
    reloadUserNotes();
}