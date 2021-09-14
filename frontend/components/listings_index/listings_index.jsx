import React from "react";
import ListingItem from "./listing_item";
import MapContainer from "../mapbox/map_container";

class ListingIndex extends React.Component {
  componentDidMount() {
    // debugger
    this.props.fetchListings({
      city: this.props.match.params.city,
      // state: this.props.match.params.state,
    });
  }

  render() {
    if (this.props.listings.length === 0) return null;
    if (this.props.listings.length === 1) {
      return <div className='no-listings'>{this.props.listings[0]}</div>
    }
    let mappedListings = this.props.listings.map((listing, i) => (
      <ListingItem key={`${listing.title}${i}`} listing={listing} />
    ));
    return (
      <div className="listings-index-container">
        <ul className="listings">{mappedListings}</ul>
        <div className="map-container-container">
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default ListingIndex;
