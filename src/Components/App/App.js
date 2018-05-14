import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Playlist from './Components/Playlist/Playlist';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';

class App extends React.Component {
  constructor(props){
    super(props);
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
      ]
    };
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <!-- Add a SearchBar component -->
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <!-- Add a Playlist component -->
          </div>
        </div>
      </div>
    );
  }
}

export default App;
