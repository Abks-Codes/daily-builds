let setup = document.getElementById("setup")
let punchline = document.getElementById("punchline");
const button = document.getElementById("getJokes");
let jokesCounter = document.getElementById("jokesCounter")

let counter = 0;



button.addEventListener('click', async function getJoke()
{
counter ++;
setup.textContent = "loading.."
punchline.textContent =""
 const jokes = await fetch('https://official-joke-api.appspot.com/jokes/random');
 const data = await jokes.json();


 setup.textContent = data.setup;
 punchline.textContent = data.punchline;
 jokesCounter.textContent = `Jokes Counter: ${counter}`;
 console.log(data)

})

