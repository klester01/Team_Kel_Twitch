var games;

    function renderSearch(searchArray) {
            console.log(searchArray)
        var searchHTML = searchArray.map(currentGame => {
            console.log(searchArray)
            return `
            <div id="container" class="mx-auto d-flex card-deck">
                <div class="card mx-2 my-5">
                     <img id="gamerImg" class="card-img-top" src="https://www.net-aware.org.uk/siteassets/images-and-icons/application-icons/app-icons-twitch.png?w=585&scale=down">
                        <div class="card-body d-flex flex-column">
                            <h5 id="gamerUsername" class="card-title d-flex flex-column">${currentGame.name}</h5>
                            <span id="gamerViews" class="date badge badge-dark">${currentGame.viewer_count}</span>
                            <span id="gamerDescription">${currentGame.description}</span>
                            <a href="https://www.twitch.tv/" id="gamerProfile" class="stretched-link">${currentGame.Go - to - Profile}</a>
                        </div>
                 </div>
            </div>`
        });
        return searchHTML.join("");
    };


document.getElementById('search').addEventListener('submit', function (e) {
    e.preventDefault();
        var searchString = e.target.elements[0].value;
        var urlEncodedSearchString = encodeURIComponent(searchString); 
        console.log(searchString)
        axios.get(`https://api.twitch.tv/kraken/search/games?query=${urlEncodedSearchString}`, {headers})
            .then(function(response) {
                var gamesContainer = document.getElementById("searchContainer");
                gamesContainer.innerHTML = renderSearch(response.data); 
                console.log(response.data)
                // var searchHTML = renderSearch(response);
                // gamesContainer.innerHTML = searchHTML;
                //games = response.data
                // console.log(games);
        })
    // gamesContainer.innerHTML = renderSearch(games);  
})


var headers = {
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': '8h3jv4wh2mbm329j2q50djovs9w00v'
};

//  axios.get('https://api.twitch.tv/kraken/search/channels?query=starcraft', {headersSearch})
//         .then(function(response) {
//             console.log(response);
// })




//     var gamesContainer = document.getElementById("searchContainer");
//     document.getElementById('searchBar').addEventListener('submit', function(e){
//     e.preventDefault();
//         var searchString = document.getElementById('searchBar').value;
//         var urlEncodedSearchString = encodeURIComponent(searchString); 
//         axios.get("https://api.twitch.tv/kraken/search/games?query=" + urlEncodedSearchString).then(function(response){
//             var searchHTML = renderSearch(response.data.Search);
//             gamesContainer.innerHTML = searchHTML;
//             games = response.data.Search
//             console.log(response.data);
//         })
//     gamesContainer.innerHTML = renderSearch(games);
//    }) 

// }); 


// })
// function fetchData(url) {
// 	var headers = {
//         'Accept': 'application/vnd.twitchtv.v5+json',
//         'Client-ID': '8h3jv4wh2mbm329j2q50djovs9w00v'
//         // 'Client-ID': 'ijvkrnnrg0v6xnph3mns3hoyn2ltnz',  
//         // 'Accept': 'application/vnd.twitchtv.v5+json'    
// 	};
// 	return axios.get(url, {headers})
// }

//for single URL searches
// var test = fetchData('https://api.twitch.tv/helix/games?id=493057') 
// console.log(test); 

// for multiple URL searches
// const arrayOfSearch = [fetchData('https://api.twitch.tv/helix/games?id=493057'), fetchData('https://api.twitch.tv/helix/streams?top=10')]

// Promise.all(arrayOfSearch).then(console.log(arrayOfSearch));

