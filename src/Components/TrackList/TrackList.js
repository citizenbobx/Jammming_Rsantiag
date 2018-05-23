import React from 'react';
import './TrackList.css';
import '../Track/Track';


class TrackList extends React.Component{
  render(){
    return(
      <div className="TrackList">
      {
          //steo 34 v
          this.props.tracks.map(track => {
            return <Track track={track} key={track.id}
            //step 44 v
            onAdd={this.props.onAdd}
            //step 52 v
            onRemove={this.props.onRemove}
            //isRemoval = {true}???
            />
          })
      }
      </div>
    );
  }
}

export default TrackList;
