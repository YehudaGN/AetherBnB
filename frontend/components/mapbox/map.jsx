import mapboxgl from '!mapbox-gl'; 
import React from 'react';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.map;
    }

    componentDidMount() {
        this.props.fetchListings();

        mapboxgl.accessToken = 'pk.eyJ1IjoieXVkYWduIiwiYSI6ImNrdGRkcWJpazJmM2gybnBnZXE3dzQzcmgifQ.W_-afZ__2dCOr7xvF3QYBA';
        this.map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
        });

        const navigate = new mapboxgl.NavigationControl();
        this.map.addControl(navigate, 'bottom-right')
    }

    componentDidUpdate() {
        this.props.listings.forEach(listing => 
                                            new mapboxgl.Marker().setLngLat([listing.longitude, listing.latitude])
                                                    .addTo(this.map).setPopup(new mapboxgl.Popup().setHTML(this.marker(listing)))      
            )
    }

    marker(listing) {
        return (
            `<div>
                <h4>
                   ${listing.title}
                </h4>
            </div>`
        )
    }

    render() {
        return (
            <div id='map'>

            </div>
        )
    }
}

export default Map;