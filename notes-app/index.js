const notes = document.getElementById("notes");
const button = document.getElementById("myBtn");
let divNotes = document.getElementById("newNotes");
let counter = 0;

button.addEventListener("click", function add()
{
  counter++;
  let notesTitle = document.createElement('h2');
  let newNotes = document.createElement('div');
  let deleteBtn = document.createElement('button');
 
  deleteBtn.id = 'deleteButton';
  deleteBtn.textContent = 'delete'
  deleteBtn.addEventListener('click', function removeNotes()
{
  newNotes.remove();
  deleteBtn.remove();
  counter--;
})
  newNotes.className = 'newNotes'
  newNotes.textContent = notes.value;
  notes.value = ""
  notesTitle.textContent = `Note ${counter}`
  
   
  
  divNotes.appendChild(newNotes);
  newNotes.appendChild(deleteBtn);
   newNotes.appendChild(notesTitle);
  


})

