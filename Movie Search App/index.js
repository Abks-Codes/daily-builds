

const input = document.getElementById("input");
const button = document.getElementById("search");
let cards = document.querySelector('.cards');
let counter = 0;

button.addEventListener("click", async function getMovie()
{
    document.querySelectorAll('.card').forEach(el => el.remove());

    let response = await fetch(`http://www.omdbapi.com/?apikey=6467afdf&s=${input.value}`);
    const data = await response.json();
    if(data.response){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    else{
        console.log("works")
    }  


   

    for (let movie of data.Search)
    {
        let imdbID = await fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&i=${movie.imdbID}`);
        const more_data = await imdbID.json();
        
        let card = document.createElement("div");
        card.className = 'card';
        let title = document.createElement("h2");
        let year = document.createElement("h3");
        let rated = document.createElement("h3");
        let realesed = document.createElement("h3");
        let genre = document.createElement("h3");
        let type = document.createElement("h3");
        let poster = document.createElement("img");

        title.textContent = `Title : ${movie.Title}`;
        year.textContent = `Year: ${movie.Year}`;
        rated.textContent = `Rated: ${more_data.Rated}`;
        realesed.textContent = `Realesed: ${more_data.Released}`;
        genre.textContent = `Genre: ${more_data.Genre}`;
        type.textContent = `Type: ${movie.Type}`;
        poster.src = more_data.Poster;
        poster.className = 'poster';


        


        card.appendChild(title);
        card.appendChild(year);
        card.appendChild(rated);
        card.appendChild(realesed);
        card.appendChild(genre);
        card.appendChild(type);
        card.appendChild(poster);
        cards.appendChild(card)
        console.log(more_data)
        
      counter++;
    }

    
  
})