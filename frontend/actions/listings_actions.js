import * as listingApiUtil from "../util/listings_api_util";

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const REMOVE_LISTING = "REMOVE_LISTING";
export const RECEIVE_LISTING_ERRORS = "RECEIVE_LISTING_ERRORS";

const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing,
});

const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings,
});

const removeListing = listingId => ({
  type: REMOVE_LISTING,
  listingId,
});

const receiveListingErrors = errors => ({
  type: RECEIVE_LISTING_ERRORS,
  errors,
});

export const fetchListing = listingId => dispatch =>
  listingApiUtil
    .fetchListing(listingId)
    .then(listing => dispatch(receiveListing(listing)));

export const fetchListings = (searchParams) => dispatch =>
  listingApiUtil
    .fetchListings(searchParams)
    .then(listings => dispatch(receiveListings(listings)));

export const createListing = listing => dispatch =>
  listingApiUtil.createListing(listing).then(
    listing => dispatch(receiveListing(listing)),
    errors => dispatch(receiveListingErrors(errors.responseJSON))
  );

export const editListing = listing => dispatch =>
  listingApiUtil.editListing(listing).then(
    listing => dispatch(receiveListing(listing)),
    errors => dispatch(receiveListingErrors(errors.responseJSON))
  );

export const deleteListing = listingId => dispatch =>
  listingApiUtil
    .deleteListing(listingId)
    .then(() => dispatch(removeListing(listingId)));
