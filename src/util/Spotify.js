import React from 'react';

//step 82
const clientID ="0dc1061f92cb455fa1abf0785e7f4d00";

const redirectURI = "http://localhost:3000/";

//step 77
const accessToken ='';

//step 76
const Spotify = {
  //step 78
  getAccessToken(){
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    let accessToken = accessTokenMatch[1];
    const getAccessToken = Spotify.getAccessToken();
      if (accessToken === true){
        return accessToken;
      }
      //step 79 v
      else {
        window.location.href.match(`https://example.com/callback#access_token=${([^&]*)}&token_type=Bearer&expires_in=${([^&]*)}`);
        //step 80 v
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
        }
  }//close getAccessToken
  //step 85 v
  search(term){//step 86 v
      return fetch(
      `https://api.spotify.com/v1/search?type=track&q=${term}`,
        {headers:{Authorization:`Bearer ${accessToken}`}}
      )//step 87 v
      .then(response => {
          return response.json();
        }
      ).then(jsonResponse => {
        if (jsonResponse.tracks){
            return jsonResponse.tracks.map(track =>(
              {
                  ID: track.id,
                  Name : track.name,
                  Artist : track.artists[0].name,
                  Album: track.album.name,
                  URI: track.uri
              }
            )
          );//close return jsonResponse callback
        }//close if instructions
      });//close second then argument
  }//close search method
  //step 90
  savePlaylist(playlistName, [trackURI, trackURI, trackURI]){
      //step 91 v
      let accessToken = accessToken;
      let headers = {Authorization:`Bearer:${accessToken}`};
      let userID = '';
      //step 92
      return fetch('https://api.spotify.com/v1/me',{headers:{Authorization:`Bearer ${accessToken}`}})
  }//close savePlaylist

};//close Spotify object




//step 76 v
export default Spotify;
