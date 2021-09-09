import React from 'react'
import HomeIcon from '@material-ui/icons/Home';

class ListingShow extends React.Component{

    
    componentDidMount(){
        this.props.fetchListing(this.props.match.params.listingId)
    }
    
    handleDelete(){
        this.props.deleteListing(this.props.match.params.listingId)
        this.props.history.push("/")
    }

    render(){
        if (!this.props.listing) return null
        let deleteButton;
        if (this.props.listing.host_id === this.props.session){
            deleteButton = <button onClick = {() => this.handleDelete()}>Delete Listing</button>  
        }
            
        return (
            <div className='listing-show-container'>
                <div className='listing-show'>
                    <h4 className='listing-title'>{this.props.listing.title}</h4>
                    <br />
                    <li className='listing-description'>{this.props.listing.description}</li>
                    <br />
                    <li>
                        {this.props.listing.address}, 
                        {this.props.listing.city}, 
                        {this.props.listing.state}
                    </li>
                    <br />
                    <li><HomeIcon className='home-icon'/> {this.props.listing.num_beds}</li>
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