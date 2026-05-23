const notes = document.getElementById("notes");
const button = document.getElementById("myBtn");
let divNotes = document.getElementById("newNotes");
const storedData = localStorage.getItem("notes");
const notesArray = JSON.parse(storedData);
let counter = 0;
let notesData = JSON.parse(storedData) || [];


console.log(notesArray)

for (const data of notesData)
{
  counter++;

  let newNotes = document.createElement('div');

  newNotes.innerHTML = data;

  let deleteBtn = document.createElement('button');
  let notesTitle = document.createElement('h2');
  newNotes.className = 'newNotes';
  deleteBtn.textContent = 'delete'

  deleteBtn.id = 'deleteButton';
  deleteBtn.textContent = 'delete'
  deleteBtn.addEventListener('click', function removeNotes()
{
  newNotes.remove();
  deleteBtn.remove();
  counter--;
})

   divNotes.appendChild(newNotes);
  newNotes.appendChild(deleteBtn);
   newNotes.appendChild(notesTitle);

  notesTitle.textContent = `Note ${counter}`
}

button.addEventListener("click", function add()
{
  counter++;
  let noteText = notes.value;
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
  
   notesData.push(noteText);
 

console.log(notesData)

localStorage.setItem("notes", JSON.stringify(notesData));
})


