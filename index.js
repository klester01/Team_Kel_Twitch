const headers = {
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': '8h3jv4wh2mbm329j2q50djovs9w00v',
};

// Populate the container with the top 10 streams.

function renderGames(gameInfo) {
    let renderInfo = gameInfo.data.top.map(topGame => {
        return`
            <div class="card mx-2 my-3 col-lg-2 col-md-3 col-sm-4">
                <div class="card-body">
                    <h5 id="gameName" class="card-title d-flex flex-column text-center">${topGame.game.name}</h5>
                    <img id="gameImg" class="card-img-top" src="${topGame.game.box.large}" alt="...">
                    <span id="gameViewers" class="date badge badge-danger">${topGame.viewers} watching</span> 
                    <span id="gameChannels" class="date badge badge-dark">${topGame.channels} streaming</span>
                    <a href="https://www.twitch.tv/search?term=${topGame.game.name}" target="_blank id="gamerProfile" class="stretched-link">More on Twitch</a>
                </div>
            </div>
        `
    })
    return renderInfo.join('');
};

// Working function to return 1 random top streamer from the top 25 currently streaming
// function renderTopGame(topStreams) {
//     let randomTopStream = topStreams.data.featured;
//     var randomStream = randomTopStream[Math.floor(Math.random() * randomTopStream.length)]; 
//     console.log(randomStream);
//         return`
//             <div class="card mx-2 my-3 col-lg-3 col-md-5 col-sm-6">
//                 <div class="card-body">
//                     <h4 id="displayName" class="card-title text-center">${randomStream.stream.channel.display_name}</h4>
//                     <p class="lead">${randomStream.stream.channel.description}</p>
//                     <img id="profileImg" class="card-img-top rounded-0" src="${randomStream.image}" alt="...">
//                     <p class="lead">${randomStream.text}</p>
//                     <h5 id="gameName">Currently Streaming: ${randomStream.stream.channel.game}</p>
//                     <img id="streamShot" class="card-img-top" src="${randomStream.stream.preview.large}" alt="...">
//                 </div>
//             </div>
//         `
// };

// Function to return 3 random streams w/o duplicates
function renderTopGame(topStreams) {

    let randomTopStream = topStreams.data.featured;
    const partOfStreams = randomTopStream.slice();
    const newRandomStreams = [];

    for(let i=0; i<3; i++) {
        let newGameArray = partOfStreams[Math.floor(Math.random()*partOfStreams.length)];
        let index = partOfStreams.indexOf(newGameArray);
        partOfStreams.splice(index, 1);
        newRandomStreams.push(newGameArray);
    }
    let renderRandom = newRandomStreams.map(randoGame => {
            return`
            <div class="card mx-2 my-3 col-lg-3 col-md-5 col-sm-6" style="width: 18rem">
                <div class="card-body">
                    <h4 id="displayName" class="card-title text-center">${randoGame.stream.channel.display_name}</h4>
                    <p>${randoGame.stream.channel.description}</p>
                    <img id="profileImg" class="card-img-top rounded-0" src="${randoGame.image}" alt="...">
                    <p class="lead">${randoGame.text}</p>
                    <h5 id="gameName">Currently Streaming: ${randoGame.stream.channel.game}</p>
                    <img id="streamShot" class="card-img-top" src="${randoGame.stream.preview.large}" alt="...">
                </div>
            </div>
        `
        })
        return renderRandom.join();
};

// Main function to bring in the top-10 games object.
axios.get('https://api.twitch.tv/kraken/games/top', {headers}) 
.then(function (response) {
    document.getElementById('gameCard').innerHTML = renderGames(response);
});

// function to bring in random top-20 streamer
axios.get('https://api.twitch.tv/kraken/streams/featured?limit=20', {headers}) 
    .then(function (response) {
        document.getElementById('topRandomGame').innerHTML = renderTopGame(response);
});

//  Function to bring in the bottom-10 streamers by viewers. This needs to be done recursively; e.g., continue running
// and passing in a new pageKey value each run until there's no more streams to return.
// Experimental function 1: This works but is rate-limited. Trying to pass in access token to override this issue.
// function getAllStreams (cursor, data = []) {
//     return axios.get('https://api.twitch.tv/helix/streams' + (`?first=100` ? '?after='+cursor : ''), {headers})
//       .then(response => {
//         //   console.log(response.data) 
//           if (response.data.length < 1 ) return data
//           data.push(...response.data.data)
//           console.log(data);
//           return getAllStreams(response.data.pagination.cursor, data)
//       })
// }


// getAllStreams()
// .then(data => console.log("final data", data)); 


// Experimental function 2: will scrape through API when hard-coded (this takes you to page 2)
// axios.get('https://api.twitch.tv/helix/streams?limit=100&offset=900', {headers}) 
//     .then(function (response) {
//         console.log(response.data) 
//         // console.log(response.data.pagination.cursor) 
//         // pageKeyNext = response.data.pagination.cursor; 
//         // axios.get(`https://api.twitch.tv/helix/streams?after=${pageKeyNext}`, {headers}) 
//         //     .then(function (response) {
//         //         pageKeyNext += response.data.pagination.cursor;
//         //         console.log(pageKeyNext) 
//         //         console.log(response.data);
//         // })
// })

// This function works and will create an access token. How do I save and return this so I can access it outside of the function?
//     axios.post(
//         'https://id.twitch.tv/oauth2/token?client_id=8h3jv4wh2mbm329j2q50djovs9w00v&client_secret=j051tnz5ka2kjjgcuhox8k04pdfu1w&grant_type=client_credentials').then(response => {
//             theToken = response.data.access_token;
// })


// Attempt at flex cards 1
// function renderGames(gameInfo) {
//     // console.log(gameInfo); 
//     let renderInfo = gameInfo.data.top.map(topGame => {
//         // console.log(topGame); 
//         // console.log(topGame.game.box.medium) 
//         return`
//             <div class="card mr-3 my-auto">
//                 <div class="card-body text-center">
//                     <h5 id="gameName" class="card-title d-flex flex-column">${topGame.game.name}</h5>
//                     <img id="gameImg" src="${topGame.game.box.medium}" alt="...">
//                     <div>
//                     <span id="gameViewers" class="date badge badge-danger">${topGame.viewers} watching</span> 
//                     <span id="gameChannels" class="date badge badge-dark">${topGame.channels} streaming</span>
//                     </div>
//                 </div>
//             </div>
//         `
//     })
//     return renderInfo.join('');
// };

// <div id="container-fluid">
//   <h2 class="text-center">Top Games Today:</h2>
//   <div class="card-columns mx-3" id="gameCard">
//       <!-- Top-10 games go here -->
//   </div>
// </div>
=======
     console.log(response.data); 
    // console.log(response.data.top[0].game.name); 
})