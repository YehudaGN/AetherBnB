json.partial! "api/listings/listing", listing: @listing
json.host @listing.user, :id, :fname, :lname, :bio, :created_at
if @listing.user.photo.attached?
    json.hostPhoto url_for(@listing.user.photo)
end
json.listing_reviews @listing.reviews .each do |review|
    json.extract! review, :id, :body, :rating, :guest_id, :listing_id, :cleanliness, :communication, :check_in, :accuracy, :location, :value, :created_at
    json.reviewer review.guest, :id, :fname, :lname
    if review.guest.photo.attached?
        json.guestPhoto url_for(review.guest.photo)
    end
end

json.bookings @listing.bookings.map {|booking| [booking.start_date, booking.end_date]}

json.fullPhotos @listing.photos.map {|photo| photo}