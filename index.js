const headers = {
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': '8h3jv4wh2mbm329j2q50djovs9w00v',
    // 'Authorization': 'Bearer'+theToken 
};

// Populate the container with the top 10 streams.

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
                    <span id="gameChannels" class="date badge badge-dark">${topGame.channels} streaming</span>
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
