import React from 'react';
import { connect } from 'react-redux';
import { createListing } from '../../actions/listings_actions';                           
import CreateListing from './create_listing';
import { openModal, closeModal } from '../../actions/modal_actions';

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
    createListing: listing => dispatch(createListing(listing)),
    listingModal: (
        <button onClick={() => dispatch(openModal('create listing'))}>
          Create Listing
        </button>
      ),
      closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(CreateListing);