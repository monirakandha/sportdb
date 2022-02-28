const allPlayers = () => {
    console.log('hello');
    const searhValue = document.getElementById('search-box').value;
    console.log(searhValue);
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searhValue}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayPlayer(data.player))
}

const displayPlayer = (players) =>{
    console.log(players);
    for(const player of players){
        const playerContainer = document.getElementById('player-container');
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card border p-5">
            <div class="card">
                <div class="pro-pic">
                    <img class="w-50" src="${player .strThumb}" alt="" srcset="">
                </div>
                <h2>Name:${player.strPlayer}</h2>
                <h4>Country ${player.strBirthLocation}</h4>
                <h5>Gender:${player.strGender}</h5>
                <div class="allbutton">
                    <button onclick="delete()" class="btn btn-danger">Delete</button>
                    <Button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</Button>
                </div>
            </div>
        </div>
        `
        playerContainer.appendChild(div);
    }

}

const details = (id) => {
    console.log('ok Boss' , id)
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => setDetils(data.players[0]))
}

const setDetils = (info) => {
    console.log(info)
    const playerDetailsContainer = document.getElementById('player-details-container');
    const div = document.createElement('div');
    div.innerHTML = `
            <div class="card border p-5">
            <div class="card">
                <img class="w-50" src="${info.strThumb}" alt="" srcset="">
                <h2>Name:${info.strPlayer}</h2>
                <h4>Country ${info.strBirthLocation}</h4>
                <h5>Gender:${info.strGender}</h5>
            </div>
        </div>
        `
    playerDetailsContainer.appendChild(div);
}