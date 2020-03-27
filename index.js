const headers = {
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': '8h3jv4wh2mbm329j2q50djovs9w00v'
};

// Populate the container with the top 10 streams. 
function renderGames(gameInfo) {
    let renderInfo = gameInfo.data.top.map(topGame => {
        return `
            <div class="card mx-2 my-3 col-lg-2 col-md-3 col-sm-4">
                <div class="card-body">
                    <h5 id="gameName" class="card-title d-flex flex-column text-center">${topGame.game.name}</h5>
                    <img id="gameImg" class="card-img-top" src="${topGame.game.box.large}" alt="...">
                    <span id="gameViewers" class="date badge badge-danger">${topGame.viewers} watching</span> 
                    <span id="gameChannels" class="date badge badge-dark">${topGame.channels} streaming</span>
                    <br>
                    <a href="https://www.twitch.tv/search?term=${topGame.game.name}" target="_blank id="gamerProfile" class="stretched-link">More on Twitch</a>
                </div>
            </div>
        `
    })
    return renderInfo.join('');
};

// Main function to bring in the top-10 games.
axios.get('https://api.twitch.tv/kraken/games/top', { headers })
    .then(function (response) {
        document.getElementById('gameCard').innerHTML = renderGames(response);

    });


// Function to return 3 random streams (w/o duplicates).
function renderTopGame(topStreams) {

    let randomTopStream = topStreams.data.featured;
    const partOfStreams = randomTopStream.slice();
    const newRandomStreams = [];

    for (let i = 0; i < 3; i++) {
        let newGameArray = partOfStreams[Math.floor(Math.random() * partOfStreams.length)];
        let index = partOfStreams.indexOf(newGameArray);
        partOfStreams.splice(index, 1);
        newRandomStreams.push(newGameArray)
    }
    let renderRandom = newRandomStreams.map(randoGame => {
        return `
            <div class="card mx-2 my-3 col-lg-3 col-md-5 col-sm-6" style="width: 18rem">
                <div class="card-body">
                <div style="text-align:center">
                    <a style="color:black; text-decoration:underline; font-style:bold; font-size: 22px;" href="${randoGame.stream.channel.url}" target="_blank">
                    <h4 id="displayName" class="card-title text-center">${randoGame.stream.channel.display_name}</h4>
                    </a>
                </div>
                    <p style="font-style: italic">${randoGame.stream.channel.description}</p>
                    <a style="color:black; text-decoration:underline; font-style:bold; font-size: 22px;" href="${randoGame.stream.channel.url}" target="_blank">
                    <img id="profileImg" class="card-img-top rounded-0" src="${randoGame.image}" alt="...">
                    </a>
                    <p class="lead">${randoGame.text}</p>
                    <h5 id="gameName">Currently Streaming: ${randoGame.stream.channel.game}</p>
                    <a href="https://www.twitch.tv/directory/game/${randoGame.stream.channel.game}" target="_blank">
                    <img id="streamShot" class="card-img-top" src="${randoGame.stream.preview.large}" alt="...">
                    </a>
                </div>
            </div>
        `
    })
    return renderRandom.join();
};

// Function to bring in random top-3 streamer
axios.get('https://api.twitch.tv/kraken/streams/featured?limit=20', { headers })
    .then(function (response) {
        document.getElementById('topRandomGame').innerHTML = renderTopGame(response);
    });