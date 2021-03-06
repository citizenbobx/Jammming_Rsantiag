import React from 'react';
import './Track.css';

class Track extends React.Component{
  //step 46 v
  constructor(props){
    super(props);
    this.addTrack=this.addTrack.bind(this);
    //step 54 v
    this.removeTrack=this.removeTrack.bind(this);
  }//close constructor

//step 27 v
  renderAction(){
    if(this.props.isRemoval===true){
      return <a className='Track-Action' onClick={this.removeTrack}>'-'</a>
    }else {
      return <a className='Track-Action' onClick={this.addTrack}>'+'</a>
    }
  }//close renderAction method

  //step 45 v
  addTrack(event){
    this.props.onAdd(this.props.track);
  }//close addTrack method

  //step 53 v
  removeTrack(event){
    this.props.onRemove(this.props.track);
  }//close removeTrack method

  render(){
    return(
      <div className="Track">
        <div className="Track-information">
          //step 35 ??? v
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
          //step 27 part 2 v
          {this.renderAction()}
      </div>
    );
  }
}

export default Track;
