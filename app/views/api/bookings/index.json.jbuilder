@bookings.each do |booking|
    json.set! booking.id do
        json.extract! booking, :id, :start_date, :end_date, :guest_id, :listing_id, :num_guests, :price
        json.photos booking.listing.photos.map {|photo| url_for(photo)}
    end
end