# TWITCH LYFE

## Description 
Site visitors can see the top 3 random streamers on the home page when the page loads or refreshes. Visitors can also see top 10 games being streamed for the day and search for games based on game name, genre or release dates. Finally, site visitors can see the top video on demand clips being streamed for the day. 

## Table of Contents:
 [Requirements]
 [APIs Used]
 [Project Notes]
 [Dev Notes]
 [Credits]

## Requirements
Twitch Authentication Instructions: https://dev.twitch.tv/docs/authentication
    Registering your app: client secret and client ID
    Getting a token: application token
    Sending the token: in your API request
Non-Interactive Inline Frames for Live Streams and VODs
<!--- <iframe
    src="https://player.twitch.tv/?<channel, video, or collection>&parent=streamernews.example.com"
    height="<height>"
    width="<width>"
    frameborder="<frameborder>"
    scrolling="<scrolling>"
    allowfullscreen="<allowfullscreen>">
    </iframe>
-->    

### APIs Used:
| API Name:             |Data retrieved from API:                                          |
|-----------------------|:----------------------------------------------------------------:|
| Twitch                | Random streamers, games streamed, game images and live VOD       |
| IGBD                  | Game names, release dates and genre                              |


## Project Notes
We decided to use Twitch's Non-Interactive Inline Frames for Live Streams and VODs instead of a third party library for better system performance and stability.

### Dev Notes
.gitignore: used to exclude specific packages from being uploaded into github
Source JS files: 
    clips.js - renders video clips 
    games.js - render games, release dates and genre
    index.js - renders top games being streamed and top 3 random streamers
CSS styling file: index.css
Bootstrap: <!--<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>-->

<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>-->

<!--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>-->

## Credits
Build and designed by:
Aaron Hedge
Chase Taegun Owners
Jada Quandt
Jaland Swain
Nick Howland
Kelvin Lester
Reena Gouldbourne (DIR)

