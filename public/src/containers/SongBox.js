import React, {Component} from 'react';
import Request from '../helpers/request';
import SongList from '../components/SongList';
import Header from '../components/Header';

class SongBox extends Component{


  constructor(props){
    super(props)
    this.state = {
      songs: null,
      genreSelected: null

    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    const request = new Request();
    request.get(url).then((data) => this.setState({songs: data}));
  }


  render(){

    console.log('songs', this.state.songs);
    return(
    <div>
      <Header />
      <SongList songs={this.state.songs}/>
    </div>  
    )
  }
}

export default SongBox;
