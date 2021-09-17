import mapboxgl from "!mapbox-gl";
import React from "react";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.map;
  }

  componentDidMount() {
    this.props.fetchListings({
      city: this.props.match.params.city,
    //   state: this.props.match.params.state,
    });


    mapboxgl.accessToken =
      "pk.eyJ1IjoieXVkYWduIiwiYSI6ImNrdGRkcWJpazJmM2gybnBnZXE3dzQzcmgifQ.W_-afZ__2dCOr7xvF3QYBA";

    let cityLon;
    let cityLat;

    const geocoder = mbxGeocoding({
      accessToken: mapboxgl.accessToken,
    });

    geocoder
      .forwardGeocode({
        // query: `${this.props.match.params.city}`,
        query: "miami",
        limit: 1,
      })
      .send()
      .then(res => {
        // console.log(res);
        cityLon = res.body.features[0].center[0]
        cityLat = res.body.features[0].center[1]
      });



    

    this.map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      // center: [cityLon, cityLat], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    const navigate = new mapboxgl.NavigationControl();
    this.map.addControl(navigate, "bottom-right");
  }

  componentDidUpdate() {
    this.props.listings.forEach(listing =>
      new mapboxgl.Marker()
        .setLngLat([listing.longitude, listing.latitude])
        .addTo(this.map)
        .setPopup(new mapboxgl.Popup().setHTML(this.marker(listing)))
    );
  }

  marker(listing) {
    return `<div class='popup-container'>
                <h4 class="popup-title">
                   ${listing.title}
                </h4>
                <p class='popup-city'>
                    ${listing.city}
                </p>
                <img class = 'popup-img' src=${listing.photos[0]} height='100'/>
            </div>`;
  }

  render() {
    if (this.props.listings.length === 0) return null;
    return <div id="map"></div>;
  }
}

export default Map;
