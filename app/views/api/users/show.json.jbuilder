json.partial! '/api/users/user', user: @user
if @user.photo.attached?
    json.photo url_for(@user.photo)
end
json.user_reviews @user.reviews .each do |review|
    json.extract! review, :id, :body, :rating, :guest_id, :listing_id, :cleanliness, :communication, :check_in, :accuracy, :location, :value, :created_at
    json.listing review.listing, :id, :title
    json.host review.listing.user, :id, :fname
    json.photos review.listing.photos.map {|photo| url_for(photo)}
end
