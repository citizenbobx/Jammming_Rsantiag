import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

class Playlist extends React.Component{
  //step 60 v
  constructor(props){
    super(props);
    this.handleNameChange=this.handleNameChange.bind(this);
  }//close constructor

//step 59 v
  handleNameChange(event){
    this.props.onNameChange()
  }//close handleNameChange

  render(){
    return(
    <div className="Playlist">
      <input defaultValue={'New Playlist'}
      //step 61 v
      onChange={this.handleNameChange()} />
      <TrackList
      //step 39 v
      tracks={this.props.playlistTracks}
      //step 51 v
      onRemove={this.props.onRemove}
      isRemoval={true} />
      //step 65 v
      <a className="Playlist-save" onClick={this.props.onSave} >SAVE TO SPOTIFY</a>
    </div>
    );
  }
}

export default Playlist;
