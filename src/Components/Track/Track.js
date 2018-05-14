import React from 'react';
import './Track.css';

class Track extends React.Component{
  constructor(props){
    super(props);
    this.addTrack()=this.addTrack().bind(this);
  }//close constructor
  renderAction(){
    if(this.props.isRemoval === true){
      return '-';
    }else{
      return '+';
    }
  }//close renderAction method
  addTrack(){

  }//close addTrack method
  render(){
    return(
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action" onClick={this.addTrack}>{this.renderAction()}</a>
      </div>
    );
  }
}

export default Track;
