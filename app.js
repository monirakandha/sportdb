const allPlayers = () => {
    console.log('hello');
    const searhValue = document.getElementById('search-box').value;
    console.log(searhValue);
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searhValue}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.player))
}