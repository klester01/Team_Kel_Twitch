const headers = {
  'Accept': 'application/vnd.twitchtv.v5+json',
  'Client-ID': '8h3jv4wh2mbm329j2q50djovs9w00v',
};

//Pulling data from the API URL for top video clips. Passing headers info to axios call to authenticate the .get request. 

axios.get('https://api.twitch.tv/kraken/videos/top', { headers })
  .then(function (response) {
    document.getElementById('clipContainer').innerHTML = renderVideos(response.data);
    console.log(response);
  })

///Populate container with video clips. 

function renderVideos(video) {
  let getClips = video.vods.map(videos => { //mapping through the array to pull top 10 VOD
    return `
    <div class="row pb-4">
      <iframe
          src="https://player.twitch.tv/?video=${videos._id}&autoplay=false"
          height="216"
          width="384"
          frameborder="4"
          scrolling="no"
          allowfullscreen="true">
      </iframe>
    </div>
      `
  });
  return getClips.join('');
}
