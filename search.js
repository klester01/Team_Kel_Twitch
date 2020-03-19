var games;
document.addEventListener('DOMContentLoaded', function() { 
   
    function renderSearch (twitchArray){
       var searchHTML = twitchArray.map(function (currentGame){
            return`
            <div id="container" class="mx-auto d-flex card-deck">
                <div class="card mx-2 my-5">
                     <img id="gamerImg" class="card-img-top" src="https://www.net-aware.org.uk/siteassets/images-and-icons/application-icons/app-icons-twitch.png?w=585&scale=down">
                        <div class="card-body d-flex flex-column">
                            <h5 id="gamerUsername" class="card-title d-flex flex-column">${currentGame.Username}</h5>
                            <span id="gamerViews" class="date badge badge-dark">${currentGame.Views}</span>
                            <span id="gamerDescription">${currentGame.A-little-about-the-user}</span>
                            <a href="https://www.twitch.tv/" id="gamerProfile" class="stretched-link">${currentGame.Go-to-Profile}</a>
                        </div>
                 </div>
            </div>        
            `
       }).join(""); 
       return searchHTML; 
    } 
    
    var gamesContainer = document.getElementById("container");
    document.getElementById('search').addEventListener('submit', function(e){
    e.preventDefault();
        var searchString = document.getElementById('search').value;
        var urlEncodedSearchString = encodeURIComponent(searchString); 
        GET("https://api.twitch.tv/kraken/search/games?query=" + urlEncodedSearchString).then(function(response){
            var searchHTML = renderSearch(response.data.Search);
            gamesContainer.innerHTML = searchHTML;
            games = response.data.Search
            console.log(response.data);
        })
    gamesContainer.innerHTML = renderSearch(gamesData);
   }) 

}); 