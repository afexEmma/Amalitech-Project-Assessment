import React from 'react';
import { TrackList } from '../TrackList/TrackList';
import './Playlist.css';

export class Playlist extends React.Component{
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this)
    }
    handleNameChange(e){
        this.props.onNameChange(e.target.value)
    }
    render(){
        return (
            <div className="Playlist">
                <input value={this.props.playlistName} onChange={this.handleNameChange}/>
                {/* Add a TrackList component*/ }
                <TrackList tracks={this.props.playlistTracks} isRemoval={true} onRemove={this.props.onRemove} />
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}