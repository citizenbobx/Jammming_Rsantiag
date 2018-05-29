import React from 'react';

//step 82
const clientID ="0dc1061f92cb455fa1abf0785e7f4d00";
const redirectURI = "http://localhost:3000/";

//step 77
let accessToken ='';

//step 76
const Spotify = {
  //step 78
  getAccessToken(){
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
      if (accessToken){
        return accessToken;
      }//step 79 v
      else (accessTokenMatch !== null && expiresInMatch !== null){
        let accessToken = accessTokenMatch[1];
        //step 80 v
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        //step 83 v
        `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
        return accessToken;
        }
  }//close getAccessToken
  //step 85 v
  search(term){//step 86 v
      const getAccessToken = Spotify.getAccessToken();

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

//////Axel's code
//step 90 v
savePlaylist(playlistName, trackURIs) {
   if(!playlistName || !trackURIs.length) {
     return;
   }
//step 91 v
   const accessToken = Spotify.getAccessToken();
   const headers = {Authorization: Bearer ${accessToken}};
   let userId;
//step 92 v
   return fetch('https://api.spotify.com/v1/me',
   {headers: headers})
   .then (response => {
        if (response.ok) {
          return response.json();
        }
      })
   .then (jsonResponse => {
     userId = jsonResponse.id;
//step 93 v
    return fetch('https://api.spotify.com/v1/users/${userId}/playlists',
        {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: playlistName})
        }
      )
   .then(response => {
        if(response.ok) {
          return response.json();
        } else {
          console.log('Request failed')
        }
      })
   .then(jsonResponse => {
//94d v
    const playlistId = jsonResponse.id;
//94b v
    return fetch('https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks',
        {
        headers: headers,
        method:'POST',
//94c v
        body: JSON.stringify({uris: trackURIs})
        }
      );//close last fetch
    });//close last jsonResponse
  });//close first jsonResponse
 }//savePlaylist
