import React from 'react';
import { connect } from 'react-redux';
import { createListing } from '../../actions/listings_actions';
                                
import CreateListing from './create_listing'

const mSTP = state => ({
    listing: {
        title: '',
        description: '',
        address: '',
        city: '',
        state: '',
        zip_code: '',
        num_beds: '',
        longitude: '',
        latitude: '',
        price: ''
    }
})

const mDTP = dispatch => ({
    createListing: listing => dispatch(createListing(listing))
})

export default connect(mSTP, mDTP)(CreateListing);