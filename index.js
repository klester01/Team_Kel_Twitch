// axios.defaults.headers.common['Authorization'] = store.getState 

const headers = {
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': '8h3jv4wh2mbm329j2q50djovs9w00v'
};

///Populate container with video clips    

// function renderVideos(videos){
//     return`
//     <div class="card mx-2 my-3 col-lg-2 col-md-3 col-sm-4">
//         <div class = "card-body">
//         <h5 id="gameName" class="card-title d-flex flex-column text-center">${dataVods.title}</h5>
//         </div>
//     </div>
//         `
// }

// function renderVideos(videoInfo) {
//     // console.log(gameInfo); 
//     let rendervideoInfo = videoInfo.data.data.vods.map(vodsTitle => {
      
//         return`
//             <div class="card mx-2 my-3 col-lg-2 col-md-3 col-sm-4">
//                 <div class="card-body">
//                     <h5 id="videoName" class="card-title d-flex flex-column text-center">${vodsTitle.title}</h5>
//                 </div>
//             </div>
//         `
//     })
//     return rendervideoInfo.join('');
// };


axios.get('https://api.twitch.tv/kraken/videos/to', {headers})
        .then(function(response) {
                console.log(response); 
})

// Populate the container with the top 10 streams. For some reason, they are coming in vertically and not horizontally.
function renderGames(gameInfo) {
    // console.log(gameInfo); 
    let renderInfo = gameInfo.data.top.map(topGame => {
        // console.log(topGame); 
        // console.log(topGame.game.box.medium) 
        return`
            <div class="card mx-2 my-3 col-lg-2 col-md-3 col-sm-4">
                <div class="card-body">
                    <h5 id="gameName" class="card-title d-flex flex-column text-center">${topGame.game.name}</h5>
                    <img id="gameImg" class="card-img-top" src="${topGame.game.box.large}" alt="...">
                    <span id="gameViewers" class="date badge badge-danger">${topGame.viewers} watching</span> 
                    <span id="gameViewers" class="date badge badge-dark">${topGame.channels} streaming</span>
                    <a href="https://www.twitch.tv/search?term=${topGame.game.name}" target="_blank id="gamerProfile" class="stretched-link">More on Twitch</a>
                </div>
            </div>
        `
    })
    return renderInfo.join('');
};
// Main function to bring in the top-10 games object.
axios.get('https://api.twitch.tv/kraken/games/top', {headers}) 
.then(function (response) {
    document.getElementById('gameCard').innerHTML = renderGames(response);
     console.log(response.data); 
    // console.log(response.data.top[0].game.name); 
})

// Experimental search function to return promise data
// var gamesContainer = document.getElementById("searchContainer"); 
document.getElementById('searchBar').addEventListener('submit', function(e){
    e.preventDefault();
        var searchString = document.getElementById('searchBar').value;
        var urlEncodedSearchString = encodeURIComponent(searchString); 
        axios.get('https://api.twitch.tv/kraken/search/games?query=' + urlEncodedSearchString, {headers})
            .then(function(response) {
                console.log(response)
                // var searchHTML = renderSearch(response.data.Search);
                // gamesContainer.innerHTML = searchHTML;
                // games = response.data.Search
                // console.log(response.data);
        })
    // gamesContainer.innerHTML = renderSearch(gamesData); 
   }) 

 axios.get('https://api.twitch.tv/kraken/search/channels?query=starcraft', {headers})
        .then(function(response) {
            console.log(response);
})


// everything below this is old code
// axios.get('https://api.twitch.tv/kraken/games/top', {headers}) 
// .then(function getTopGame(response) {

//     var content = document.getElementById('content');
//     content.innerHTML = renderGames(response);

//     // console.log(response.data); 
//     // console.log(response.data.top[0].game.name); 
//     var topGames = response.data.top.map(topgame => {
//         console.log(topgame);
//         return `
//         <div class="card mx-2 my-5">
//             <img id="gamerImg" class="card-img-top" src="https://www.net-aware.org.uk/siteassets/images-and-icons/application-icons/app-icons-twitch.png?w=585&scale=down">
//                 <div class="card-body d-flex flex-column">
//                     <h5 id="gameName" class="card-title d-flex flex-column">${topgame}</h5>
//                     <span id="gamerViews" class="date badge badge-dark">Views</span>
//                     <span id="gamerDescription">A little about the user</span>
//                     <a href="#" id="gamerProfile" class="stretched-link">Go to Profile</a>
//                 </div>
//         </div>
//         `
//     })
//     return topGames;
    // var gameName = response.data.top[0].game.name; 
    // console.log(gameName); 
    // document.getElementById("card").innerHTML = gameName; 
    // return `
    // <div class="card mx-2 my-5">
    //         <img id="gamerImg" class="card-img-top" src="https://www.net-aware.org.uk/siteassets/images-and-icons/application-icons/app-icons-twitch.png?w=585&scale=down">
    //             <div class="card-body d-flex flex-column">
    //                 <h5 id="gamerUsername" class="card-title d-flex flex-column">Username</h5>
    //                 <span id="gamerViews" class="date badge badge-dark">Views</span>
    //                 <span id="gamerDescription">A little about the user</span>
    //                 <a href="#" id="gamerProfile" class="stretched-link">Go to Profile</a>
    //             </div>
    //     </div>
    // `
// })

// This test function works and will create an access token. I need to clean this up so it's not hard-coded. See below. 
// document.getElementById("test").addEventListener("click", function(){
//     axios.post(
//         'https://id.twitch.tv/oauth2/token?client_id=8h3jv4wh2mbm329j2q50djovs9w00v&client_secret=j051tnz5ka2kjjgcuhox8k04pdfu1w&grant_type=client_credentials')
//         // {
//         // client_id: '8h3jv4wh2mbm329j2q50djovs9w00v',
//         // client_secret: 'j051tnz5ka2kjjgcuhox8k04pdfu1w',
//         // redirect_uri: 'http://localhost',
//         // grant_type: 'client_credentials'
//         // }
//         .then((response) => {
//             console.log(response.data.access_token);
//         }
//     );
// })

// document.getElementById("test").addEventListener("click", function(){
//     axios.get(
//         'https://id.twitch.tv/oauth2/token?client_id=8h3jv4wh2mbm329j2q50djovs9w00v&client_secret=j051tnz5ka2kjjgcuhox8k04pdfu1w&grant_type=client_credentials')
//         // {
//         // client_id: '8h3jv4wh2mbm329j2q50djovs9w00v',
//         // client_secret: 'j051tnz5ka2kjjgcuhox8k04pdfu1w',
//         // redirect_uri: 'http://localhost',
//         // grant_type: 'client_credentials'
//         // }
//         .then((response) => {
//             console.log(response.data.access_token);
//         }
//     );
// })


// Need to get the syntax working so that it can take the login credentials from an API JS file and pass them in to receive the access token. 
// document.getElementById("test").addEventListener("click", function(){
//     axios.post('https://id.twitch.tv/oauth2/token', {
//         client_id: '8h3jv4wh2mbm329j2q50djovs9w00v',
//         client_secret: 'j051tnz5ka2kjjgcuhox8k04pdfu1w',
//         redirect_uri: 'http://localhost',
//         grant_type: 'client_credentials'
//     })
    
// })


// document.getElementById("test").addEventListener("click", function() {
//     axios({
//         method: 'POST',
//         url: `'https://id.twitch.tv/oauth2/token?client_id=8h3jv4wh2mbm329j2q50djovs9w00v&client_secret=j051tnz5ka2kjjgcuhox8k04pdfu1w&grant_type=client_credentials'`
//         // url: 'https://id.twitch.tv/oauth2/token',
//         // headers: {
//         //     client_id: '8h3jv4wh2mbm329j2q50djovs9w00v',
//         //     client_secret: 'j051tnz5ka2kjjgcuhox8k04pdfu1w',
//         //     redirect_uri: 'http://localhost',
//         //     grant_type: 'client_credentials'
//         // }
//     })
// })
