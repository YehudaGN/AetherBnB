import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { fetchListings } from '../../actions/listings_actions'
import Map from './map'





const mSTP = (state) => {
    return {
    listings: Object.values(state.entities.listings)
}}


const mDTP = dispatch => ({
    fetchListings: (searchParams) => dispatch(fetchListings(searchParams))
})


export default withRouter(connect(mSTP, mDTP)(Map));