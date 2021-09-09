import React from 'react';
import ListingItem from './listing_item';
import MapContainer from '../mapbox/map_container';

class ListingIndex extends React.Component {

    componentDidMount(){
        this.props.fetchListings(this.props.match.params.city)
    }

    render(){

        let mappedListings = this.props.listings.map((listing, i)=> <ListingItem key={`${listing.title}${i}`} listing={listing} />)
        return (
            <div className='listings-index-container'>   
                <ul className="listings">
                    {mappedListings}
                </ul>
                <div className='map-container-container'>
                    <MapContainer/> 
                </div>
            </div>
        )
    }
}


export default ListingIndex