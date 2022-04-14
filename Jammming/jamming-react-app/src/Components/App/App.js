import React from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar'
import {SearchResults} from '../SearchResults/SearchResults'
import {Playlist} from '../Playlist/Playlist'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.state.SearchResults = [
      {
        id: 1,
        name: 'Tiny Dancer',
        artist: 'Elton John',
        album: "Madman Across The Water"
      },
      {
        id: 2,
        name: 'Tiny Dancer',
        artist: 'Elton John',
        album: "Madman Across The Water"
      }
    ];
    this.state.playlistName = "Cool Playlist Tracks";
    this.state.playlistTracks = [
      {
        id: 3,
        name: 'Stronger',
        artist: 'Britney Spears',
        album: "Oops!... I Did It Again"
      },
      {
        id: 4,
        name: 'So Emotional',
        artist: 'Whitney Houston',
        album: "Whitney"
      },
      {
        id: 5,
        name: "It's Not Right But It's Okay",
        artist: 'Whitney Houston',
        album: "My Love Is Your Love"
      }
    ];

    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)    
  }


  // componentDidUpdate(prevProps){
  //   if(prevProps !== this.state.playlistTracks){
  //     this.setState({playlistTracks: this.state.playlistTracks})
  //   }
  // }

  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }else{
      this.state.playlistTracks.push(track);
      // console.log(track)
    }
  }

  removeTrack(track){
    const newPlayList = this.state.playlistTracks.filter((elem) => elem.id !== track.id);
    this.setState({playlistTracks: newPlayList})
  }

  updatePlaylistName(name){
    this.setState({playlistName: name});
    console.log(this.state.playlistName)
  }

  savePlaylist(){
    let trackURIs = this.state.playlistTracks.map(elem => elem.uri)
    console.log(trackURIs)
  }

  search(searchTerm){
    console.log(searchTerm)
  }

  render(){

    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
           <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
             <SearchResults SearchResults={this.state.SearchResults} onAdd={this.addTrack} />
             <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
