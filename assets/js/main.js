 
let pokemonSearch = null;
let output = null;

document.getElementById('button').addEventListener('click', loader)


function loader(){
    getName();
    loadDex();
}

function loadDex(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+ pokemonSearch, true)
    xhr.onload = function (){
        if(this.status == 200){
            let data = JSON.parse(this.response)

            output = 
            `<div class="pokemonData">
            <img src="${data.sprites.front_default}"
            <ul>
            <li>ID: ${data.id}</li>
            <li>Moves: 
                <ul>
                    <li class="list2">${data.moves[0].move.name}</li>
                    <li class="list2">${data.moves[1].move.name}</li>
                    <li class="list2">${data.moves[2].move.name}</li>
                    <li class="list2">${data.moves[3].move.name}</li>
                </ul>
            </li>
            </ul>`
            
            document.getElementById('output').innerHTML = output
        } else {
            output = `<p>unknown specie</p>`
            document.getElementById('output').innerHTML = output
        }
    }
    xhr.send();
}


function getName(){
    pokemonSearch = document.getElementById('input').value
    //console.log(pokemonSearch)
}