export const createReview = review =>
  $.ajax({
    method: "POST",
    url: "api/reviews",
    data: { review },
  });

export const deleteReview = reviewId =>
  $.ajax({
    method: "DELETE",
    url: `api/reviews/${reviewId}`,
  });

export const editReview = review =>
  $.ajax({
    method: "PATCH",
    url: `api/reviews/${review.id}`,
    data: { review },
  });

//   { body: 'super cool', rating: 4.5, guest_id: 2, listing_id: 1, cleanliness: 5, communication: 5, check_in: 3, accuracy: 3, location: 5, value: 3}