const headers = {
  'Accept': 'application/vnd.twitchtv.v5+json',
  'Client-ID': '8h3jv4wh2mbm329j2q50djovs9w00v',
};

///Populate container with video clips    

function renderVideos(video){
  let getClips = video.vods.map(videos => {
  return`
      <iframe
          src="https://player.twitch.tv/?video=${videos._id}&autoplay=false"
          height="360"
          width="640"
          frameborder="0"
          scrolling="no"
          allowfullscreen="true">
      </iframe>
      `
  });
  return getClips.join('');
}

axios.get('https://api.twitch.tv/kraken/videos/top', {headers})
      .then(function(response) {
          document.getElementById('clipContainer').innerHTML = renderVideos(response.data);
              console.log(response); 
})