var key = API_KEY //Added API key variable. Saved true key value in .gitignore. 
var games;
document.addEventListener('DOMContentLoaded', function () {

    function renderSearch(twitchArray) {
        var searchHTML = twitchArray.map(function (currentGame) {
            return `
            <div id="container" class="mx-auto d-flex card-deck">
                <div class="card mx-2 my-5">
                     <img id="gamerImg" class="card-img-top" src="https://www.net-aware.org.uk/siteassets/images-and-icons/application-icons/app-icons-twitch.png?w=585&scale=down">
                        <div class="card-body d-flex flex-column">
<<<<<<< HEAD
                            <h5 id="gamerUsername" class="card-title d-flex flex-column">${currentGame.user_name}</h5>
                            <span id="gamerViews" class="date badge badge-dark">${currentGame.viewer_count}</span>
                            <span id="gamerDescription">${currentGame.description}</span>
                            <a href="https://www.twitch.tv/" id="gamerProfile" class="stretched-link">${currentGame.Go-to-Profile}</a>
=======
                            <h5 id="gamerUsername" class="card-title d-flex flex-column">${currentGame.Username}</h5>
                            <span id="gamerViews" class="date badge badge-dark">${currentGame.Views}</span>
                            <span id="gamerDescription">${currentGame.A - little - about - the - user}</span>
                            <a href="https://www.twitch.tv/" id="gamerProfile" class="stretched-link">${currentGame.Go - to - Profile}</a>
>>>>>>> 55265566a007632eaa21d160bd31e2a5b9071b48
                        </div>
                 </div>
            </div>        
            `
<<<<<<< HEAD
       }).join(""); 
       return searchHTML; 
    } 
    
    var gamesContainer = document.getElementById("searchContainer");
    document.getElementById('searchBar').addEventListener('submit', function(e){
    e.preventDefault();
        var searchString = document.getElementById('searchBar').value;
        var urlEncodedSearchString = encodeURIComponent(searchString); 
        axios.get("https://api.twitch.tv/kraken/search/games?query=" + urlEncodedSearchString).then(function(response){
=======
        }).join("");
        return searchHTML;
    }

    var gamesContainer = document.getElementById("container");
    document.getElementById('search').addEventListener('submit', function (e) {
        e.preventDefault();
        var searchString = document.getElementById('search').value;
        var urlEncodedSearchString = encodeURIComponent(searchString);
        GET("https://api.twitch.tv/kraken/search/games?query=" + urlEncodedSearchString).then(function (response) {
>>>>>>> 55265566a007632eaa21d160bd31e2a5b9071b48
            var searchHTML = renderSearch(response.data.Search);
            gamesContainer.innerHTML = searchHTML;
            games = response.data.Search
            console.log(response.data);
        })
        gamesContainer.innerHTML = renderSearch(gamesData);
    })

}); 

function fetchData(url) {
	const container = document.getElementById('testData');
	var headers = {
        'Client-ID': 'ijvkrnnrg0v6xnph3mns3hoyn2ltnz',
	};
	axios.get(url, {
		headers
	}).then(response => {
        console.log(response.data)

	});
}

fetchData(`https://api.twitch.tv/helix/games?id=493057`);