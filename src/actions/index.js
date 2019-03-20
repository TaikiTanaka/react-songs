// Action Creator
export const selectSong = (song) => {
  // Action Creators return a js object with 'type' and 'payload'
  // payloads are optional, but types are not
    return {
      type:'SONG_SELECTED',
      payload:song
    };
};
