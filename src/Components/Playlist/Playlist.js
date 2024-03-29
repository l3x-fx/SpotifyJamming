import "./Playlist.css"
import React from "react"
import TrackList from "../TrackList/TrackList"

export default function Playlist(props) {
  const handleNameChange = (e) => {
    props.onNameChange(e.target.value)
  }

  return (
    <div className="Playlist">
      <input
        id="playlistName"
        value={props.playlistName}
        onChange={handleNameChange}
        placeholder="Enter Playlist Name"
      />
      <TrackList tracksOnList={props.playlistTracks} onRemove={props.onRemove} isRemoval={true} />
      <button
        className="Playlist-save"
        onClick={props.onSave}
        disabled={props.playlistName === "" || props.playlistTracks.length === 0}
      >
        SAVE TO SPOTIFY
      </button>
    </div>
  )
}

/* class Playlist extends React.Component {
    constructor (props) {
        super(props);
        this.handelNameChange=this.handelNameChange.bind(this);
    }
      
    handleNameChange(e) {
        e.target.value= this.props.onNameChange();
    } 

    render() {
        return(
        <div className='Playlist'>
            <input value={'New Playlist'} onChange={this.handleNameChange} />
            <TrackList tracksOnList={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />
            <button className='Playlist-save'>SAVE TO SPOTIFY</button>
        </div>
        )
    }
} */
