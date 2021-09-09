import React from 'react'
import { Link } from 'react-router-dom'


const ListingItem = props => {
    return (
        <li className='listing-blurb'>
            <Link to={`/listing/show/${props.listing.id}`}>
                <h3 className='listings-index-title'>{props.listing.title}</h3>
            </Link>
            <br />
            <p> {props.listing.city}, {props.listing.state}</p>
            <br />
            <p>${props.listing.price} / night</p>
        </li>
    )
}


export default ListingItem