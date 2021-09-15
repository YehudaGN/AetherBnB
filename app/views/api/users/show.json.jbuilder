json.partial! '/api/users/user', user: @user

json.user_bookings @user.bookings.each do |booking|
    json.extract! booking, :id, :start_date, :end_date, :guest_id, :listing_id
    json.listing booking.listing, :id, :title, :city
    json.photos booking.listing.photos.map {|photo| url_for(photo)}
    json.host booking.listing.user, :id, :fname
end

json.user_reviews @user.reviews .each do |review|
    json.extract! review, :id, :body, :rating, :guest_id, :listing_id, :cleanliness, :communication, :check_in, :accuracy, :location, :value
    json.listing review.listing, :id, :title
    json.host review.listing.user, :id, :fname
end