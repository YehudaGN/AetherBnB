import { connect } from 'react-redux'
import { fetchListings } from '../../actions/listings_actions'
import ListingIndex from './listings_index'




const mapSTP = (state) => {
    return {
    listings: Object.values(state.entities.listings)
}}


const mapDTP = dispatch => ({
    fetchListings: () => dispatch(fetchListings())
})


export default connect(mapSTP, mapDTP)(ListingIndex)