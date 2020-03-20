// this should populate the container with the top 10 streams

// axios.defaults.headers.common['Authorization'] = store.getState 

const headers = {
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': '8h3jv4wh2mbm329j2q50djovs9w00v'
}

axios.get('https://api.twitch.tv/kraken/games/top', {headers}) 
.then(function (response) {
    console.log(response.data);
    console.log(response.data.top[0].game.name);
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
})

// This test function works and will create an access token. I need to clean this up so it's not hard-coded. See below. 
document.getElementById("test").addEventListener("click", function(){
    axios.post(
        'https://id.twitch.tv/oauth2/token?client_id=8h3jv4wh2mbm329j2q50djovs9w00v&client_secret=j051tnz5ka2kjjgcuhox8k04pdfu1w&grant_type=client_credentials')
        // {
        // client_id: '8h3jv4wh2mbm329j2q50djovs9w00v',
        // client_secret: 'j051tnz5ka2kjjgcuhox8k04pdfu1w',
        // redirect_uri: 'http://localhost',
        // grant_type: 'client_credentials'
        // }
        .then((response) => {
            console.log(response.data.access_token);
        }
    );
})

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

// make axios post with API key parameters to get access token?

// retreive top-10 streams by viewer count


// function topStreamers() {
//     var topStreamer = document.getElementById("top10");

// }


// https://id.twitch.tv/oauth2/token?client_id=8h3jv4wh2mbm329j2q50djovs9w00v&client_secret=j051tnz5ka2kjjgcuhox8k04pdfu1w&grant_type=client_credentials 