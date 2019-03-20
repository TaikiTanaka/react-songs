import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

class SongList extends Component{
  renderList(){
    return this.props.songs.map(song => {
      return(
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button 
              className='ui button primary'
              onClick={()=>this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    })
  }
  render(){
    // this.props === { songs : state.songs }
    // State.song props is passed down from the Connect component and can be accessed
    console.log(this.props.songs)
    return( 
    <div className='ui divided list'>
      {this.renderList()}
    </div>
    );
  }
};

// The point of this function is to define what data to get from the Provider tag
// mapStateToProps is named that way by convention and ALWAYS has a single state arg
// state is all data within redux store
const mapStateToProps = state => {
  // Return the object from state which you want to have as a props object for THIS component
  // SongList is in charge of the songs, so naturally want to grab this from the state
  console.log(state);
  return { songs: state.songs }
}

// Connect is a component that is able to communicate with the Provider tag
// The parameters is the specific data that this component wants access from the redux store
// The second parameter that can be passed is an ActionCreator that you want to give access to this component
  // This is how child components can make function calls to affect the state of the store
// connect() returns a function and the second set of parenthesis calls it with arg SongList
export default connect(
  mapStateToProps, { selectSong }
  )(SongList);