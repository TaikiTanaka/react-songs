
import { combineReducers } from 'redux'

// Since the list of songs is static, this reducer is not necessary
// However for the sake of example, it is "reduxified"
const songsReducer = () => {
  return [
    { title : 'No Scrubs', duration: '4.05'},
    { title : 'Macarena', duration: '2.30'},
    { title : 'All Star', duration: '3.15'},
    { title : 'I Want it That Way', duration: '1.45'}
  ];
};

// There are 2 parameters for an action, the state that the reducer alters, and the action
// This reducer returns the contents of the selected song
// The type check is unnecessary (because there is only 1 action creator)
const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED')
    return action.payload
  return selectedSong;
};

// The key of the object represents the var name of the state that is stored
// The value represents the reducer it is linked to
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});