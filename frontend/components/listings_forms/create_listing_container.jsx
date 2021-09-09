import React from 'react';
import { connect } from 'react-redux';
import { createListing } from '../../actions/listing_actions';
import CreateListing from './create_listing'

const mSTP = state => ({
    listing: {
        hostId: '',
        title: '',
        description: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        numBeds: '',
        longitute: '',
        latitude: '',
        price: ''
    }
})

const mDTP = dispatch => ({
    createListing: listing => dispatch(createListing(listing))
})

export default connect(mSTP, mDTP)(CreateListing);