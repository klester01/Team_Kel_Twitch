var games;
document.addEventListener('DOMContentLoaded', function() { 
   
    function renderSearch (twitchArray){
       var searchHTML = twitchArray.map(function (currentGame){
            return`
        <div class="card mx-2 my-3 col-lg-2 col-md-3 col-sm-4">
            <div class="card-body">
                <h5 id="gameName" class="card-title d-flex flex-column text-center">${currentGame.user_name}</h5>
                <img id="gameImg" class="card-img-top" src="" alt="...">
                <span id="gameViewers" class="date badge badge-danger">${currentGame.viewers} watching</span> 
                <span id="gameViewers" class="date badge badge-dark">${currentGame.channels} streaming</span>
            </div>      
            `
       }).join(""); 
       return searchHTML; 
    } 
    
    var gamesContainer = document.getElementById("searchContainer");
    document.getElementById('searchBar').addEventListener('submit', function(e){
    e.preventDefault();
        var searchString = document.getElementById('searchBar').value;
        var urlEncodedSearchString = encodeURIComponent(searchString); 
        axios.get("https://api.twitch.tv/kraken/search/games?query=" + urlEncodedSearchString).then(function(response){
            var searchHTML = renderSearch(response.data.Search);
            gamesContainer.innerHTML = searchHTML;
            games = response.data.Search
            console.log(response.data);
        })
    gamesContainer.innerHTML = renderSearch(games);
   }) 

   const arrayOfSearch = [fetchData('https://api.twitch.tv/helix/games?id=493057'), fetchData('https://api.twitch.tv/helix/streams?top=10')]

Promise.all(arrayOfSearch).then(console.log(arrayOfSearch));

}); 

function fetchData(url) {
	var headers = {
        'Client-ID': 'ijvkrnnrg0v6xnph3mns3hoyn2ltnz',
        'Accept': 'application/vnd.twitchtv.v5+json' 
	};
	return axios.get(url, {
		headers
	})
}

//for single URL searches
// var test = fetchData('https://api.twitch.tv/helix/games?id=493057') 

// console.log(test); 


// for multiple URL searches
/*
const arrayOfSearch = [fetchData('https://api.twitch.tv/helix/games?id=493057'), fetchData('https://api.twitch.tv/helix/streams?top=10')]

Promise.all(arrayOfSearch).then(console.log(arrayOfSearch));
*/