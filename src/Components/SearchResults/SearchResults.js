import React from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResults.css';

class SearchResults extends React.Component{
  render(){
    return(
    <div className="SearchResults">
    <h2>Results</h2>
    //step 33 v
    <TrackList tracks={this.props.searchResults}
    //step 43 v
    onAdd={this.props.onAdd} isRemoval={false}/>
    </div>
    );
  }
}

export default SearchResults;
