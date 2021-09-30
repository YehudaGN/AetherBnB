require 'faker'
require 'open-uri'

User.destroy_all
Listing.destroy_all
Booking.destroy_all

demo_user = User.create!(
    fname: "Demo",
    lname: "User",
    email: "demouser@gmail.com",
    password: "demouser",
    bio: "I'm a demo user!"
)
demo_user.photos.attach(io: File.open('app/assets/images/night-sky.png'), filename: 'night-sky.png' )

10.times do |i|
    user = User.create! ({
        fname: Faker::Name.first_name,
        lname: Faker::Name.last_name,
        email: Faker::Internet.unique.email,
        password: "password",
        bio: Faker::Quote.most_interesting_man_in_the_world
    })
    user.photos.attach(io: File.open('app/assets/images/night-sky.png'), filename: 'night-sky.png' )
end

20.times do |i|
    listing = Listing.create! ({
        host_id: Faker::Number.within(range: 1..11),
        title: Faker::Book.title,
        description: Faker::Quote.famous_last_words,
        address: Faker::Address.street_address,
        city: Faker::Address.city,
        state: Faker::Address.state,
        zip_code: Faker::Address.zip_code,
        num_beds: Faker::Number.within(range: 1..10),
        longitude: Faker::Address.longitude,
        latitude: Faker::Address.latitude,
        price: Faker::Number.within(range: 100..2000)
    })
    listing.photos.attach(io: File.open('app/assets/images/sunset.jpg'), filename: 'sunset.jpg' )
end

listingNewYork = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: Faker::Address.street_address,
    city: 'New York',
    state: 'New York',
    zip_code: Faker::Address.zip_code,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: Faker::Address.longitude,
    latitude: Faker::Address.latitude,
    price: Faker::Number.within(range: 100..2000)
})
listingNewYork.photos.attach(io: File.open('app/assets/images/sunset.jpg'), filename: 'sunset.jpg' )

listingAustin = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: Faker::Address.street_address,
    city: 'Austin',
    state: 'Texas',
    zip_code: Faker::Address.zip_code,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: Faker::Address.longitude,
    latitude: Faker::Address.latitude,
    price: Faker::Number.within(range: 100..2000)
})
listingAustin.photos.attach(io: File.open('app/assets/images/sunset.jpg'), filename: 'sunset.jpg' )

listingSanDiego = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: Faker::Address.street_address,
    city: 'San Diego',
    state: 'California',
    zip_code: Faker::Address.zip_code,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: Faker::Address.longitude,
    latitude: Faker::Address.latitude,
    price: Faker::Number.within(range: 100..2000)
})
listingSanDiego.photos.attach(io: File.open('app/assets/images/sunset.jpg'), filename: 'sunset.jpg' )

listingAnchorage = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: Faker::Address.street_address,
    city: 'Anchorage',
    state: 'Alaska',
    zip_code: Faker::Address.zip_code,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: Faker::Address.longitude,
    latitude: Faker::Address.latitude,
    price: Faker::Number.within(range: 100..2000)
})
listingAnchorage.photos.attach(io: File.open('app/assets/images/sunset.jpg'), filename: 'sunset.jpg' )

listingPhiladelphia = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: Faker::Address.street_address,
    city: 'Philadelphia',
    state: 'Pennsylvania',
    zip_code: Faker::Address.zip_code,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: Faker::Address.longitude,
    latitude: Faker::Address.latitude,
    price: Faker::Number.within(range: 100..2000)
})
listingPhiladelphia.photos.attach(io: File.open('app/assets/images/sunset.jpg'), filename: 'sunset.jpg' )

listingBoston = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: Faker::Address.street_address,
    city: 'Boston',
    state: 'Massachusetts',
    zip_code: Faker::Address.zip_code,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: Faker::Address.longitude,
    latitude: Faker::Address.latitude,
    price: Faker::Number.within(range: 100..2000)
})
listingBoston.photos.attach(io: File.open('app/assets/images/sunset.jpg'), filename: 'sunset.jpg' )

listingArlington = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: Faker::Address.street_address,
    city: 'Arlington',
    state: 'Texas',
    zip_code: Faker::Address.zip_code,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: Faker::Address.longitude,
    latitude: Faker::Address.latitude,
    price: Faker::Number.within(range: 100..2000)
})
listingArlington.photos.attach(io: File.open('app/assets/images/sunset.jpg'), filename: 'sunset.jpg' )

listingVirginaBeach = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: Faker::Address.street_address,
    city: 'Virginia Beach',
    state: 'Virginia',
    zip_code: Faker::Address.zip_code,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: Faker::Address.longitude,
    latitude: Faker::Address.latitude,
    price: Faker::Number.within(range: 100..2000)
})
listingVirginaBeach.photos.attach(io: File.open('app/assets/images/sunset.jpg'), filename: 'sunset.jpg' )

150.times do 
    cleanliness = Faker::Number.within(range: 1..5)
    communication = Faker::Number.within(range: 1..5)
    check_in = Faker::Number.within(range: 1..5)
    accuracy = Faker::Number.within(range: 1..5)
    location = Faker::Number.within(range: 1..5)
    value = Faker::Number.within(range: 1..5)
    rating = (cleanliness + communication  + check_in + accuracy + location + value) / 6.0
    Review.create! ({
        body: Faker::TvShows::RickAndMorty.quote,
        rating: rating,
        guest_id: Faker::Number.within(range: 1..11), 
        listing_id: Faker::Number.within(range: 1..28),
        cleanliness: cleanliness,
        communication: communication,
        check_in: check_in,
        accuracy: accuracy,
        location: location,
        value: value
    })
end



