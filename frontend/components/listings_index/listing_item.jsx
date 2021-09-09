import React from 'react'
import { Link } from 'react-router-dom'


const ListingItem = props => {
    return (
        <li>
            <Link to={`/listing/show/${props.listing.id}`}>
                <h3>{props.listing.title}</h3>
            </Link>
            <p>{props.listing.description}</p>
            <p> {props.listing.city}, {props.listing.state}</p>
            <p>Price: {props.listing.price}</p>
        </li>
    )
}


export default ListingItem