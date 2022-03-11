const url = "https://pokeapi.co/api/v2/pokemon";
const galery$$ = document.querySelector(".gallery");
const numPok = 151;


// const getCards = async () => {
//     const rawCards = await fetch(url);
//     const formattedCards = await rawCards.json(); 
//     const pokemonCards = formattedCards.results; 
//     console.log("POKEMON CARDS", pokemonCards);

function getCards(){
    for (let index = 1; index < numPok; index++){
        chekPokemo(index);
    }
}    
     function chekPokemo(i){
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then((res) => res.json())
            .then((resParsedToJSON) =>{
                console.log(resParsedToJSON);
                printCards(resParsedToJSON);
            });
    }



    


function printCards(card){

        const figure$$ = document.createElement("figure"); 
        const title$$ = document.createElement("h2");
        const image$$ = document.createElement("img");
        const type$$ = document.createElement("p");
        title$$.textContent=card.name;
        image$$.src=card.sprites.other.dream_world.front_default;
        type$$.textContent=card.weight;
        figure$$.appendChild(title$$);
        figure$$.appendChild(image$$);
        figure$$.appendChild(type$$);
        figure$$.appendChild(title$$);
        galery$$.appendChild(figure$$);
    };



 getCards()   


