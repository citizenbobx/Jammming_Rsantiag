import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

//step 30 v
class App extends React.Component {
  constructor(props){
    super(props);
    //step 31 v
    this.state= {
      searchResults: [
        {
          name: 'Reptilia',
          artist: 'The Strokes',
          album: 'Room is on Fire',
          id: '3153'
        },
        {
          name: 'Dance Yourself Clean',
          artist: 'LCD Soundsystem',
          album: 'This is Happening',
          id: '13055'
        },
        {
          name: "Money Trees",
          artist: "Kendrick Lamar",
          album: "Good Kid, M.A.A.D City",
          id: "12593"
        }
      ],//end searchResults
      //step 37 ??? v step 95 v
      playlistName:"New Playlist",
      playlistTracks:[ ]
    };// close state

    //step 42 v
    this.addTrack=this.addTrack.bind(this);
    //step 50 v
    this.removeTrack=this.removeTrack.bind(this);
    //step 58 v
    this.updatePlaylistName=this.updatePlaylistName.bind(this);
    //step 64 v
    this.savePlaylist=this.savePlaylist.bind(this);
    //step 68 v
    this.search = this.search.bind(this);

}//close constructor

//step 41 v
addTrack(track) {
  let tracks = this.state.playlistTracks;
  if (tracks.find(savedTrack => savedTrack.id === track.id)) {
    return;
  }
  tracks.push(track);
  this.setState({playlistTracks: tracks});
}//close addTrack method

  //step 49 start v
  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({playlistTracks: tracks});
  }//close removeTrack method

  //step 57 v
  updatePlaylistName(name){
    this.setState({playlistName: name});
  }//close updatePlaylistName method

  //step 63 & step 89 v
  savePlaylist(){
    Spotify.savePlaylist();
  }//close savePlaylist method

  //step 67 & step 88 v
  search(term){
    Spotify.search();
  }//close search method

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
        //step 68 v
          <SearchBar onSearch={this.search()}/>
          <div className="App-playlist">
            //step 32 v
            <SearchResults searchResults={this.state.searchResults}
            onAdd={this.addTrack} />
            <Playlist
            //step 38 v
            playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}
            //step 50 v
            onRemove={this.removeTrack}
            //step 58 v
            onNameChange={this.updatePlaylistName}/>
          </div>
        </div>
      </div>
    );
  }//close render method
}//close app subclass

export default App;
