import { connect } from 'react-redux'
import { fetchListings } from '../../actions/listings_actions'
import ListingIndex from './listings_index'




const mSTP = (state) => {
    return {
    listings: Object.values(state.entities.listings),
    message: null
}}


const mDTP = dispatch => ({
    fetchListings: (searchParams) => dispatch(fetchListings(searchParams))
})


export default connect(mSTP, mDTP)(ListingIndex);