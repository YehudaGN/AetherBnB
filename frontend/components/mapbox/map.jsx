import mapboxgl from '!mapbox-gl'; 
import React from 'react';

class Map extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoieXVkYWduIiwiYSI6ImNrdGRkcWJpazJmM2gybnBnZXE3dzQzcmgifQ.W_-afZ__2dCOr7xvF3QYBA';
        const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
        });
    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div id='map'>

            </div>
        )
    }
}

export default Map;