import React from 'react';

const Song = (props) => {
  return (
    <div className="song">
      <p>Title: {props.song['im:name']['label']}</p>
      <p>Artist: {props.song['im:artist']['label']}</p>
      <p>Chart position: {props.index + 1}</p>
    </div>
  )
}

export default Song;
