function renderSearch(gameInfo) {


  let renderGame = gameInfo.map(gameSearch => {


    if (gameSearch.cover && gameSearch.genres && gameSearch.release_dates) {
      return `
        <div class="card mb-3 mx-auto" style="max-width: 620px;">
        <div class="row no-gutters">
          <div class="col-md-4">
          <img style="margin: 5px 0 0 5px" src="https://images.igdb.com/igdb/image/upload/t_cover_big/${gameSearch.cover.image_id}.jpg" class="card-img">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${gameSearch.name}</h5>
              <p style="font-size:12px; line-height: 18px; font-style: italic;">${gameSearch.summary}</p>
              <p style="font-size:12px; line-height: 5px; font-weight: 800;">Genre: ${gameSearch.genres[0].name}</p>
              <p style="font-size:12px; line-height: 5px; font-weight: 800;">Release Date: ${gameSearch.release_dates[0].human}</p>
           <!-- <p style="font-size:12px; line-height: 5px; color: purple; font-weight: 600;">Rated ${Math.floor(gameSearch.rating)}% on IGDB</p> -->
              <a href=${gameSearch.url} target="_blank id="gamerProfile" class="stretched-link" style="font-weight: 700; font-style:italic; text-decoration: underline;">More on IGDB</a>
            </div>
          </div>
        </div>
      </div>
        `}
  })
  return renderGame.join('');
};


document.getElementById('search').addEventListener('submit', function (e) {
  e.preventDefault();
  var searchString = e.target.elements[0].value;
  var urlEncodedSearchString = encodeURIComponent(searchString);

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = `https://api-v3.igdb.com/games/?search=${urlEncodedSearchString}&fields=name,cover.*,genres.*,summary,url,platforms.*,rating,release_dates.*`;

  axios.get(proxyurl + url, {
    headers: {
      'user-key': '27edc8b6b53d795ca7a2afed39475b9f',
      'Accept': 'application/json'
    },
  })
    .then(function (response) {

      var gamesContainer = document.getElementById("searchContainer");
      gamesContainer.innerHTML = renderSearch(response.data) || `<div id="nullMessage">Search not found, please try again using a game name, genre, or release date.</div>`;
    });

});
