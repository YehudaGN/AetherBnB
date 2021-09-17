import React from "react";
import ListingItem from "./listing_item";
import MapContainer from "../mapbox/map_container";
import { ThumbUpAlt } from "@material-ui/icons";

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { noListing: false };
  }

  componentDidMount() {
    this.props
      .fetchListings({
        city: this.props.match.params.city,
        // state: this.props.match.params.state,
      })
      .then(listings => {
        if (Object.values(listings.listings).length === 0) {
          this.setState({ noListing: true });
        }
      });
  }

  render() {
    if (this.props.listings.length === 0 && !this.state.noListing) return null;

    if (this.state.noListing)
      return <div className="no-listings">No Listings Here :(</div>;

    let filteredListings;
    let mappedListings;
    if (this.props.match.params.city) {
      filteredListings = this.props.listings.filter(
        listing => listing.city === this.props.match.params.city
      );
      mappedListings = filteredListings.map((listing, i) => (
        <ListingItem key={`${listing.title}${i}`} listing={listing} />
      ));
    } else {
      mappedListings = this.props.listings.map((listing, i) => (
        <ListingItem key={`${listing.title}${i}`} listing={listing} />
      ));
    }
    return (
      <div className="listings-index-container">
        <div className="listings">{mappedListings}</div>
        <div className="map-container-container">
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default ListingIndex;
