var games;

function renderSearch(gameInfo) {
    console.log(gameInfo); 
    let renderGame = gameInfo.map(topGame => {
        return`
            <div class="card mx-2 my-3 col-lg-2 col-md-3 col-sm-4">
                <div class="card-body">
                    <h5 id="gameName" class="card-title d-flex flex-column text-center">${topGame.name}</h5>
                    <img id="gameImg" class="card-img-top" src="${topGame.box.large}" alt="...">
                </div>
            </div>
        `
    })
    return renderGame.join('');
};


document.getElementById('search').addEventListener('submit', function (e) {
    e.preventDefault();
        var searchString = e.target.elements[0].value;
        var urlEncodedSearchString = encodeURIComponent(searchString); 
        console.log(searchString)
        axios.get(`https://api.twitch.tv/kraken/search/games?query=${urlEncodedSearchString}`, {headers})
            .then(function(response) {
                var gamesContainer = document.getElementById("searchContainer");
                gamesContainer.innerHTML = renderSearch(response.data.games); 
                //console.log(response.data)
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