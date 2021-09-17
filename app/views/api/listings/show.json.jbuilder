json.partial! "api/listings/listing", listing: @listing
json.host @listing.user, :id, :fname, :lname, :bio, :created_at
json.listing_reviews @listing.reviews .each do |review|
    json.extract! review, :id, :body, :rating, :guest_id, :listing_id, :cleanliness, :communication, :check_in, :accuracy, :location, :value, :created_at
    json.reviewer review.guest, :id, :fname, :lname
end