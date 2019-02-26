import React, {Component} from 'react';
import Song from './Song';

class SongList extends Component{

render(){
  if(!this.props.songs){
    return <p>Waiting</p>
    }

    const songs = this.props.songs.feed.entry.map((song, index) => {
      return (
        <Song song={song} index={index}/>
      )
    }
  );

  return(
      <div className="song-list">
        <ul>
          {songs}
        </ul>
      </div>
    )
  }
}

export default SongList;
