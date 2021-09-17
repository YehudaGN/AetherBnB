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

10.times do |i|
    User.create! ({
        fname: Faker::Name.first_name,
        lname: Faker::Name.last_name,
        email: Faker::Internet.unique.email,
        password: "password",
        bio: Faker::Quote.most_interesting_man_in_the_world
    })
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





