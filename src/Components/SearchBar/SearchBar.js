import React from 'react';
import './SearchBar.css';

//step 70
constructor(props){
  super(props);
  this.search = this.search.bind(this);
  //step72 v
  this.handleTermChange = this.handleTermChange.bind(this);
}//close constructor

//step 69 v
search(event){
  this.props.search(this.props.term);
  event.preventDefault();
}//close search method

//step 71 v
handleTermChange(event){
  this.setState({term:event.target.value});
}//close handleTermChange

class SearchBar extends React.Component{
  render(){
    return(
      <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist"
      //step 73
      onChange={this.handleTermChange()}
      />
      <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
