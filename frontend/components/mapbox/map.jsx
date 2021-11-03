import mapboxgl from "!mapbox-gl";
import React from "react";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.map;
    this.mapMarkers = [];

    this.state = {
      listings: this.props.listings,
      city: this.props.match.params.city,
    };
  }

  componentDidMount() {
    this.props.fetchListings({
      city: this.props.match.params.city,
    });
    mapboxgl.accessToken =
      "pk.eyJ1IjoieXVkYWduIiwiYSI6ImNrdGRkcWJpazJmM2gybnBnZXE3dzQzcmgifQ.W_-afZ__2dCOr7xvF3QYBA";
    this.map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0.0, 0.0],
      zoom: 7,
    });
    const nav = new mapboxgl.NavigationControl();
    this.map.addControl(nav, "top-right");
  }

  componentDidUpdate(prevProps) {
    let that = this;
    if (prevProps.match.params.city !== this.props.match.params.city) {
      this.props
        .fetchListings({
          city: this.props.match.params.city,
        })
        .then((res) => {
          this.mapMarkers.forEach(marker => marker.remove());
          this.mapMarkers = [];
          let mapMarker;
          Object.values(res.listings).forEach(listing => {
            if (listing.city === that.props.match.params.city) {
              mapMarker = new mapboxgl.Marker({ color: "teal" })
                .setLngLat([listing.longitude, listing.latitude])
                .addTo(this.map)
                .setPopup(new mapboxgl.Popup().setHTML(this.marker(listing)));
              this.mapMarkers.push(mapMarker);
            }
          });
          if (this.state.city) {
            mapboxgl.accessToken =
              "pk.eyJ1IjoieXVkYWduIiwiYSI6ImNrdGRkcWJpazJmM2gybnBnZXE3dzQzcmgifQ.W_-afZ__2dCOr7xvF3QYBA";
            const geocoder = mbxGeocoding({
              accessToken: mapboxgl.accessToken,
            });

            geocoder
              .forwardGeocode({
                query: this.state.city,
                limit: 1,
              })
              .send()
              .then(response => {
                this.map.flyTo({
                  center: [
                    response.body.features[0].center[0],
                    response.body.features[0].center[1],
                  ],
                });
              });
          } else {
            this.map.flyTo({ center: [-73.9712, 40.7831] });
          }
        });
    } else {
      let mapMarker;
      this.state.listings.forEach(listing => {
        if (listing.city === this.props.match.params.city ||
          this.props.match.params.city === undefined) {
          mapMarker = new mapboxgl.Marker({ color: "teal" })
            .setLngLat([listing.longitude, listing.latitude])
            .addTo(this.map)
            .setPopup(new mapboxgl.Popup().setHTML(this.marker(listing)));
          this.mapMarkers.push(mapMarker);
        }
      });
      if (this.state.city) {
        mapboxgl.accessToken =
          "pk.eyJ1IjoieXVkYWduIiwiYSI6ImNrdGRkcWJpazJmM2gybnBnZXE3dzQzcmgifQ.W_-afZ__2dCOr7xvF3QYBA";
        const geocoder = mbxGeocoding({
          accessToken: mapboxgl.accessToken,
        });

        geocoder
          .forwardGeocode({
            query: this.state.city,
            limit: 1,
          })
          .send()
          .then(response => {
            this.map.flyTo({
              center: [
                response.body.features[0].center[0],
                response.body.features[0].center[1],
              ],
            });
          });
      } else {
        this.map.flyTo({ center: [-73.9712, 40.7831] });
      }
    }
  }

  marker(listing) {
    return `<div class='popup-container'>
                <h4 class="popup-title">
                   ${listing.title}
                </h4>
                <p class='popup-city'>
                    ${listing.city}
                </p>
                <img class = 'popup-img' alt='Lisiting Photo' src=${listing.photos[0]} height='100'/>
            </div>`;
  }

  render() {
    if (this.props.listings.length === 0) return null;
    return <div id="map"></div>;
  }
}

export default Map;
