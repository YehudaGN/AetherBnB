json.partial! "api/listings/listing", listing: @listing
json.host @listing.user, :id, :fname, :lname, :bio