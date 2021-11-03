import * as reviewsApiUtil from "../util/reviews_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const createReview = review => dispatch => (
    reviewsApiUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)))
)

export const editReview = review => dispatch => (
    reviewsApiUtil.editReview(review)
)

export const deleteReview = reviewId => dispatch => (
    reviewsApiUtil.deleteReview(reviewId)
)