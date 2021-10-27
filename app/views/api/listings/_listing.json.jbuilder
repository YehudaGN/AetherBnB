json.extract! listing, :id, :host_id, :title, :description, :address, :city, :state, :zip_code, :num_beds, :longitude, :latitude, :price
json.photos listing.photos.map {|photo| url_for(photo)}
# json.bookings listing.bookings.map {|booking| [booking.start_date, booking.end_date]}