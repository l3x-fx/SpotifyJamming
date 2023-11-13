import "./SearchResults.css"
import React from "react"
import Tracklist from "../TrackList/TrackList"

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist tracksOnList={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false} />
      </div>
    )
  }
}

export default SearchResults