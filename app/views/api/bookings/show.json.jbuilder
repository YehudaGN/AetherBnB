json.extract! @booking, :id, :start_date, :end_date, :guest_id, :listing_id, :num_guests, :price

json.guest @booking.guest, :id, :fname, :lname

json.listing @booking.listing, :id, :title, :address, :city, :state, :zip_code, :latitude, :longitude  
json.photos @booking.listing.photos.map {|photo| url_for(photo)}
json.host @booking.listing.user, :id, :fname, :lname