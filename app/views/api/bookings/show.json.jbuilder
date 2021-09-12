json.extract! @booking, :id, :start_date, :end_date, :guest_id, :listing_id, :num_guests, :price
json.guest @booking.user, :id, :fname, :lname
json.listing @booking.listing, :id, :title
json.extract! @host, :id, :fname, :lname