

const input = document.getElementById("input");
const button = document.getElementById("search");
let loading = document.getElementById("loading");
let cards = document.querySelector('.cards');
let notfound = document.getElementById("notFound");
const favButton = document.getElementById("toggle-favorites");
let favDiv = document.getElementById("favorites");
const savedData = localStorage.getItem('userFavorites');
let favoritess = JSON.parse(savedData) || [];

for(let cardi of favoritess)
{
     
        let favCard = document.createElement("div");
        favCard.className = 'card';
        let title = document.createElement("h2");
        let year = document.createElement("h3");
        let rated = document.createElement("h3");
        let released = document.createElement("h3");
        let genre = document.createElement("h3");
        let type = document.createElement("h3");
        let poster = document.createElement("img");

        title.textContent = `Title : ${cardi.Title}`;
        year.textContent = `Year: ${cardi.Year}`;
        rated.textContent = `Rated: ${cardi.Rated}`;
        released.textContent = `Released: ${cardi.Released}`;
        genre.textContent = `Genre: ${cardi.Genre}`;
        type.textContent = `Type: ${cardi.Type}`;
        poster.src = cardi.Poster;
        poster.className = 'poster';

         favCard.appendChild(title);
        favCard.appendChild(year);
        favCard.appendChild(rated);
        favCard.appendChild(released);
        favCard.appendChild(genre);
        favCard.appendChild(type);
        favCard.appendChild(poster);
       favDiv.appendChild(favCard);



}


button.addEventListener("click", async function getMovie()
{
       notfound.style.display = "none";
    
 try{
        loading.style.display = 'block';
    document.querySelectorAll('.card').forEach(el => el.remove());

    

    let response = await fetch(`https://www.omdbapi.com/?apikey=[your-api]&s=${input.value}`);
    const data = await response.json();
    
         if (data.Response === "False") { 
            throw new Error(data.Error || "Movie not found"); 
        } 


   


    for (let movie of data.Search)
    {
        let imdbID = await fetch(`https://www.omdbapi.com/?apikey=[your-api]&i=${movie.imdbID}`);
        const more_data = await imdbID.json();
        
        let card = document.createElement("div");
        card.className = 'card';
        let title = document.createElement("h2");
        let year = document.createElement("h3");
        let rated = document.createElement("h3");
        let released = document.createElement("h3");
        let genre = document.createElement("h3");
        let type = document.createElement("h3");
        let poster = document.createElement("img");
        let addtofavorite = document.createElement("i");
        let favoriteCard;



        addtofavorite.className  = 'addtofavorite  fa-regular fa-heart';
        
        title.textContent = `Title : ${movie.Title}`;
        year.textContent = `Year: ${movie.Year}`;
        rated.textContent = `Rated: ${more_data.Rated}`;
        released.textContent = `Released: ${more_data.Released}`;
        genre.textContent = `Genre: ${more_data.Genre}`;
        type.textContent = `Type: ${movie.Type}`;
        poster.src = more_data.Poster;
        poster.className = 'poster';

 


        

        card.appendChild(addtofavorite);
        card.appendChild(title);
        card.appendChild(year);
        card.appendChild(rated);
        card.appendChild(released);
        card.appendChild(genre);
        card.appendChild(type);
        card.appendChild(poster);
        cards.appendChild(card)


       addtofavorite.addEventListener('click', function favorites(){
            if (addtofavorite.classList.contains("fa-solid"))
            {
                 
                 addtofavorite.classList.remove("fa-solid");
                 addtofavorite.classList.add("fa-regular");
                 favoriteCard.remove();
                
            
                console.log("hoina");

            }
            else
            {
              let favoriteMovie = {Title : movie.Title, Year : movie.Year, Rated : more_data.Rated, Released : more_data.Released, Genre : more_data.Genre, Type : movie.Type, Poster : more_data.Poster};
                favoritess.push(favoriteMovie);
        
                localStorage.setItem('userFavorites', JSON.stringify(favoritess));

                
                addtofavorite.classList.add("fa-solid");
                favoriteCard = document.createElement("div");
                favoriteCard.className = "card";
                favoriteCard.innerHTML = card.innerHTML;
                favDiv.appendChild(favoriteCard)
                addtofavorite.classList.remove("fa-regular");

                
                

                console.log("hora")
            }

            
               

               
        })
       
        
    
    }
 }
 catch(error)
 {
    console.error("An error occurred:", error.message);
    notfound.style.display = "block";
    
 }
 finally
 {

    console.log("clean up completed")
        loading.style.display = 'none';
 }
    
  
});

 

favButton.addEventListener('click', function toggleFavorites(){
 if(favDiv.style.display == 'none')
 {
    favDiv.style.display = 'block';
    console.log("hello")
 }
 else
 {
    favDiv.style.display = 'none';
    console.log("not hello")
 }
})  