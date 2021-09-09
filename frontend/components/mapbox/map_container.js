import { connect } from 'react-redux'
import { fetchListings } from '../../actions/listings_actions'
import Map from './map'




const mSTP = (state) => {
    return {
    listings: Object.values(state.entities.listings)
}}


const mDTP = dispatch => ({
    fetchListings: () => dispatch(fetchListings())
})


export default connect(mSTP, mDTP)(Map);