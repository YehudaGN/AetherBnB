import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import RoomIcon from '@material-ui/icons/Room';

class ListingShow extends React.Component{
    
    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId);
    }
    
    handleDelete(){
        this.props.deleteListing(this.props.match.params.listingId);
        this.props.history.push("/");
    }

    render(){
        if (!this.props.listing) return null;
        if (!this.props.listing.host) return null;
        let deleteButton;

        if (this.props.listing.host_id === this.props.session){
            deleteButton = <button onClick = {() => this.handleDelete()}>Delete Listing</button>  
        }

        let photos = this.props.listing.photos.map(photo => <img src={photo} height="300" />);
        let host = this.props.listing.host
        // debugger
        return (
            <div className='listing-show-container'>

                <p>{host.fname}</p>
                <div className='listing-show'>
                    <div className='photos-container'>
                        {photos}
                    </div>

                    <div className='listing-title-container'>
                        <h4 className='listing-title'>{this.props.listing.title}</h4>
                    </div>
                    <br />
                    <li className='listing-description'>{this.props.listing.description}</li>
                    <br />
                    <div className='address-beds'>
                        <li>
                            <RoomIcon 
                                className='room-icon'
                                style={{ fontSize: 15 }}
                            />
                            {this.props.listing.address}, {this.props.listing.city}, {this.props.listing.state}
                        </li>
                        <br />
                        <li>
                            <HomeIcon 
                                className='home-icon'
                                style={{ fontSize: 20 }}
                            /> {this.props.listing.num_beds} guests
                        </li>
                    </div>
                    <br />
                    <li>Price: {this.props.listing.price}</li>
                    <br />
                    {deleteButton}
                </div>
            </div>
            
        )
    }
}
export default ListingShow;