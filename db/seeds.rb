require 'faker'
require 'open-uri'

User.destroy_all
Listing.destroy_all
Booking.destroy_all
Review.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('listings')
ApplicationRecord.connection.reset_pk_sequence!('bookings')
ApplicationRecord.connection.reset_pk_sequence!('reviews')

demo_user = User.create!(
    fname: "Demo",
    lname: "User",
    email: "demouser@gmail.com",
    password: "demouser",
    bio: "I'm a demo user!"
)
demo_user.photo.attach(io: File.open('app/assets/images/profile_pics/tree-favicon.png'), filename: 'tree-favicon.png' )

user_pics = [
    ['app/assets/images/profile_pics/tree-favicon.png', 'tree-favicon.png'],
    ['app/assets/images/sunset.jpg', 'sunset.jpg'],
    ['app/assets/images/arch-city.jpg', 'arch-city.jpg'],
    ['app/assets/images/city-beach.jpg', 'city-beach.jpg'],
    ['app/assets/images/city-ocean.jpg', 'city-ocean.jpg'],
    ['app/assets/images/city-river.jpg', 'city-river.jpg'],
    ['app/assets/images/clouds.jpg', 'clouds.jpg'],
    ['app/assets/images/night-sky.png', 'night-sky.png'],
    ['app/assets/images/tree-city.jpg', 'tree-city.jpg'],
    ['app/assets/images/warm-city-beach.jpg', 'warm-city-beach.jpg']
]

i = 0
10.times do
    user = User.create! ({
        fname: Faker::Name.first_name,
        lname: Faker::Name.last_name,
        email: Faker::Internet.unique.email,
        password: "password",
        bio: Faker::Quote.most_interesting_man_in_the_world
    })
    user.photo.attach(io: File.open(user_pics[i][0]), filename: user_pics[i][1] )
    i += 1
end

# 20.times do |i|
#     listing = Listing.create! ({
#         host_id: Faker::Number.within(range: 1..11),
#         title: Faker::Book.title,
#         description: Faker::Quote.famous_last_words,
#         address: Faker::Address.street_address,
#         city: Faker::Address.city,
#         state: Faker::Address.state,
#         zip_code: Faker::Address.zip_code,
#         num_beds: Faker::Number.within(range: 1..10),
#         longitude: Faker::Address.longitude,
#         latitude: Faker::Address.latitude,
#         price: Faker::Number.within(range: 100..2000)
#     })
#     listing.photos.attach(io: File.open('app/assets/images/sunset.jpg'), filename: 'sunset.jpg' )
# end
exteriors = [
    ['app/assets/images/exteriors/vu-anh-TiVPTYCG_3E-unsplash.jpg', 'vu-anh-TiVPTYCG_3E-unsplash.jpg'],
    ['app/assets/images/exteriors/todd-kent-178j8tJrNlc-unsplash.jpg', 'todd-kent-178j8tJrNlc-unsplash.jpg'],
    ['app/assets/images/exteriors/stephan-bechert-yFV39g6AZ5o-unsplash.jpg', 'stephan-bechert-yFV39g6AZ5o-unsplash.jpg'],
    ['app/assets/images/exteriors/sieuwert-otterloo-aren8nutd1Q-unsplash.jpg', 'sieuwert-otterloo-aren8nutd1Q-unsplash.jpg'],
    ['app/assets/images/exteriors/ricardo-gomez-angel-YwVBpx4Wbag-unsplash.jpg', 'ricardo-gomez-angel-YwVBpx4Wbag-unsplash.jpg'],
    ['app/assets/images/exteriors/rendy-novantino-btfixf2BbS0-unsplash.jpg', 'rendy-novantino-btfixf2BbS0-unsplash.jpg'],
    ['app/assets/images/exteriors/r-architecture-2gDwlIim3Uw-unsplash.jpg', 'r-architecture-2gDwlIim3Uw-unsplash.jpg'],
    ['app/assets/images/exteriors/ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg', 'ralph-ravi-kayden-mR1CIDduGLc-unsplash.jpg'],
    ['app/assets/images/exteriors/ralph-kelly-z9fFOzL5L_Y-unsplash.jpg', 'ralph-kelly-z9fFOzL5L_Y-unsplash.jpg'],
    ['app/assets/images/exteriors/naomi-ellsworth-EMPLSuvDuhQ-unsplash.jpg', 'naomi-ellsworth-EMPLSuvDuhQ-unsplash.jpg'],
    ['app/assets/images/exteriors/ksenia-balandina-RCF5KSWb7Ms-unsplash.jpg', 'ksenia-balandina-RCF5KSWb7Ms-unsplash.jpg'],
    ['app/assets/images/exteriors/john-fornander-tVzyDSV84w8-unsplash.jpg', 'john-fornander-tVzyDSV84w8-unsplash.jpg'],
    ['app/assets/images/exteriors/john-fornander-Id7u0EkTjBE-unsplash.jpg', 'john-fornander-Id7u0EkTjBE-unsplash.jpg'],
    ['app/assets/images/exteriors/gus-ruballo-h5QNclJUiA8-unsplash.jpg', 'gus-ruballo-h5QNclJUiA8-unsplash.jpg'],
    ['app/assets/images/exteriors/greg-rivers-rChFUMwAe7E-unsplash.jpg', 'greg-rivers-rChFUMwAe7E-unsplash.jpg'],
    ['app/assets/images/exteriors/florian-schmidinger-b_79nOqf95I-unsplash.jpg', 'florian-schmidinger-b_79nOqf95I-unsplash.jpg'],
    ['app/assets/images/exteriors/dillon-kydd-XGvwt544g8k-unsplash.jpg', 'dillon-kydd-XGvwt544g8k-unsplash.jpg'],
    ['app/assets/images/exteriors/bailey-anselme-Bkp3gLygyeA-unsplash.jpg', 'bailey-anselme-Bkp3gLygyeA-unsplash.jpg'],
    ['app/assets/images/exteriors/avi-werde-hHz4yrvxwlA-unsplash.jpg', 'avi-werde-hHz4yrvxwlA-unsplash.jpg'],
    ['app/assets/images/exteriors/ann-wallace-biepNX5n7r4-unsplash.jpg', 'ann-wallace-biepNX5n7r4-unsplash.jpg']
]

interiors = [
    ['app/assets/images/interiors/aaron-huber-oMOx_wV6mLQ-unsplash.jpg', 'aaron-huber-oMOx_wV6mLQ-unsplash.jpg'],
    ['app/assets/images/interiors/behzad-ghaffarian-nhWgZNV85LQ-unsplash.jpg', 'behzad-ghaffarian-nhWgZNV85LQ-unsplash.jpg'],
    ['app/assets/images/interiors/collov-home-design-4_jQL4JCS98-unsplash.jpg', 'collov-home-design-4_jQL4JCS98-unsplash.jpg'],
    ['app/assets/images/interiors/daniel-chen-SoNaNOFT974-unsplash.jpg', 'daniel-chen-SoNaNOFT974-unsplash.jpg'],
    ['app/assets/images/interiors/daniil-silantev-sN4u56baSB0-unsplash.jpg', 'daniil-silantev-sN4u56baSB0-unsplash.jpg'],
    ['app/assets/images/interiors/jorge-de-jorge-NvqYkDPE0Rw-unsplash.jpg', 'jorge-de-jorge-NvqYkDPE0Rw-unsplash.jpg'],
    ['app/assets/images/interiors/kam-idris-_HqHX3LBN18-unsplash.jpg', 'kam-idris-_HqHX3LBN18-unsplash.jpg'],
    ['app/assets/images/interiors/kam-idris-kyt0PkBSCNQ-unsplash.jpg', 'kam-idris-kyt0PkBSCNQ-unsplash.jpg'],
    ['app/assets/images/interiors/kara-eads-L7EwHkq1B2s-unsplash.jpg', 'kara-eads-L7EwHkq1B2s-unsplash.jpg'],
    ['app/assets/images/interiors/katja-bayer-77JACslA8G0-unsplash.jpg', 'katja-bayer-77JACslA8G0-unsplash.jpg'],
    ['app/assets/images/interiors/nastuh-abootalebi-JdcJn85xD2k-unsplash.jpg', 'nastuh-abootalebi-JdcJn85xD2k-unsplash.jpg'],
    ['app/assets/images/interiors/neonbrand-Wp7t4cWN-68-unsplash.jpg', 'neonbrand-Wp7t4cWN-68-unsplash.jpg'],
    ['app/assets/images/interiors/prudence-earl-NwBx723XaHw-unsplash.jpg', 'prudence-earl-NwBx723XaHw-unsplash.jpg'],
    ['app/assets/images/interiors/r-architecture-TRCJ-87Yoh0-unsplash.jpg', 'r-architecture-TRCJ-87Yoh0-unsplash.jpg'],
    ['app/assets/images/interiors/r-architecture-wDDfbanbhl8-unsplash.jpg', 'r-architecture-wDDfbanbhl8-unsplash.jpg'],
    ['app/assets/images/interiors/roberto-nickson-emqnSQwQQDo-unsplash.jpg', 'roberto-nickson-emqnSQwQQDo-unsplash.jpg'],
    ['app/assets/images/interiors/roberto-nickson-tleCJiDOri0-unsplash.jpg', 'roberto-nickson-tleCJiDOri0-unsplash.jpg'],
    ['app/assets/images/interiors/steven-ungermann-vvah86ql8iM-unsplash.jpg', 'steven-ungermann-vvah86ql8iM-unsplash.jpg'],
    ['app/assets/images/interiors/vinicius-amnx-amano-17NCG_wOkMY-unsplash.jpg', 'vinicius-amnx-amano-17NCG_wOkMY-unsplash.jpg']
]



# 20.times do
#     listing = Listing.create! ({
#         host_id: Faker::Number.within(range: 1..11),
#         title: Faker::Book.title,
#         description: Faker::Quote.famous_last_words,
#         address: Faker::Address.street_address,
#         city: Faker::Address.city,
#         state: Faker::Address.state,
#         zip_code: Faker::Address.zip_code,
#         num_beds: Faker::Number.within(range: 1..10),
#         longitude: Faker::Address.longitude,
#         latitude: Faker::Address.latitude,
#         price: Faker::Number.within(range: 100..2000)
#     })
    
#     rand_num_1 = rand(19)
#     rand_num_2 = rand(19)
#     rand_num_3 = rand(19)
#     rand_num_4 = rand(19)
#     listing.photos.attach(io: File.open(exteriors[i][0]), filename: exteriors[i][1] )
#     listing.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
#     listing.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
#     listing.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
#     listing.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
    
#     i += 1
# end

listing1NewYork = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1319 Jarvisville Road',
    city: 'New York',
    state: 'New York',
    zip_code: 10004,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -74.034424,
    latitude: 40.716480,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listing1NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listing1NewYork.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listing1NewYork.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listing1NewYork.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listing1NewYork.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listing2NewYork = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '2929 Oakwood Avenue',
    city: 'New York',
    state: 'New York',
    zip_code: Faker::Address.zip_code,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -73.931625,
    latitude: 40.778976,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listing2NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listing2NewYork.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listing2NewYork.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listing2NewYork.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listing2NewYork.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listing3NewYork = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '4928 Forest Avenue',
    city: 'New York',
    state: 'New York',
    zip_code: 10013,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -74.063934,
    latitude: 40.722752,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listing3NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listing3NewYork.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listing3NewYork.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listing3NewYork.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listing3NewYork.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listing4NewYork = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '188 Abia Martin Drive',
    city: 'New York',
    state: 'New York',
    zip_code: 10011,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -73.928604,
    latitude: 40.717571,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listing4NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listing4NewYork.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listing4NewYork.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listing4NewYork.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listing4NewYork.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listing5NewYork = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: '983 Bicetown Road',
    address: Faker::Address.street_address,
    city: 'New York',
    state: 'New York',
    zip_code: 10011,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -73.958443,
    latitude: 40.750381,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listing5NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listing5NewYork.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listing5NewYork.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listing5NewYork.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listing5NewYork.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listing6NewYork = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1255 Oakwood Avenue',
    city: 'New York',
    state: 'New York',
    zip_code: 10003,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -73.988541,
    latitude: 40.752403,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listing6NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listing6NewYork.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listing6NewYork.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listing6NewYork.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listing6NewYork.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listing7NewYork = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '4563 Forest Avenue',
    city: 'New York',
    state: 'New York',
    zip_code: 10013,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -74.059074,
    latitude: 40.753021,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listing7NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listing7NewYork.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listing7NewYork.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listing7NewYork.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listing7NewYork.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listing8NewYork = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '4493 Redbud Drive',
    city: 'New York',
    state: 'New York',
    zip_code: 10011,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -73.981567,
    latitude: 40.826473,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listing8NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listing8NewYork.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listing8NewYork.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listing8NewYork.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listing8NewYork.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listing9NewYork = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '3431 Pallet Street',
    city: 'New York',
    state: 'New York',
    zip_code: 10011,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -73.904900,
    latitude: 40.791691,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listing9NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listing9NewYork.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listing9NewYork.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listing9NewYork.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listing9NewYork.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listing10NewYork = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '139 Farnum Road',
    city: 'New York',
    state: 'New York',
    zip_code: Faker::Address.zip_code,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -73.945114,
    latitude: 40.772659,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listing10NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listing10NewYork.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listing10NewYork.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listing10NewYork.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listing10NewYork.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingAustin1 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '4259 Oliver Street',
    city: 'Austin',
    state: 'Texas',
    zip_code: 78701,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.772926,
    latitude: 30.277521,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingAustin1.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingAustin1.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingAustin1.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingAustin1.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingAustin1.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
listingAustin2 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1196 Short Street',
    city: 'Austin',
    state: 'Texas',
    zip_code: 78701,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.770164,
    latitude: 30.252169,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingAustin2.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingAustin2.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingAustin2.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingAustin2.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingAustin2.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
listingAustin3 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '555 Sundown Lane',
    city: 'Austin',
    state: 'Texas',
    zip_code: 78759,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.756081,
    latitude: 30.374189,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingAustin3.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingAustin3.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingAustin3.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingAustin3.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingAustin3.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
listingAustin4 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1628 Short Street',
    city: 'Austin',
    state: 'Texas',
    zip_code: 78741,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.658096,
    latitude: 30.281981,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingAustin4.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingAustin4.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingAustin4.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingAustin4.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingAustin4.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
listingAustin5 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1355 Station Street',
    city: 'Austin',
    state: 'Texas',
    zip_code: 78756,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.643806,
    latitude: 30.250952,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingAustin5.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingAustin5.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingAustin5.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingAustin5.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingAustin5.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
listingAustin6 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1438 Sundown Lane',
    city: 'Austin',
    state: 'Texas',
    zip_code: 78664,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.720085,
    latitude: 30.282656,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingAustin6.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingAustin6.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingAustin6.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingAustin6.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingAustin6.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
listingAustin7 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '2850 Brentwood Drive',
    city: 'Austin',
    state: 'Texas',
    zip_code: 78753,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.595474,
    latitude: 30.386597,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingAustin7.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingAustin7.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingAustin7.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingAustin7.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingAustin7.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
listingAustin8 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1089 Valley Lane',
    city: 'Austin',
    state: 'Texas',
    zip_code: 78701,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.695641,
    latitude: 30.327950,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingAustin8.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingAustin8.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingAustin8.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingAustin8.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingAustin8.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
listingAustin9 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '546 Valley Lane',
    city: 'Austin',
    state: 'Texas',
    zip_code: 78704,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.720917,
    latitude: 30.210773,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingAustin9.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingAustin9.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingAustin9.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingAustin9.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingAustin9.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
listingAustin10 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '3044 Station Street',
    city: 'Austin',
    state: 'Texas',
    zip_code: 78756,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.767647,
    latitude: 30.299713,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingAustin10.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingAustin10.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingAustin10.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingAustin10.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingAustin10.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingSanDiego1 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '461 Metz Lane',
    city: 'San Diego',
    state: 'California',
    zip_code: 92111,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -117.260979,
    latitude: 32.732395,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingSanDiego1.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingSanDiego1.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingSanDiego1.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingSanDiego1.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingSanDiego1.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
listingSanDiego2 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '382 Hood Avenue',
    city: 'San Diego',
    state: 'California',
    zip_code: 92128,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -117.073647,
    latitude: 32.958649,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingSanDiego2.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingSanDiego2.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingSanDiego2.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingSanDiego2.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingSanDiego2.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
listingSanDiego3 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '28 Holden Street',
    city: 'San Diego',
    state: 'California',
    zip_code: 92105,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -117.095459,
    latitude: 32.711090,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingSanDiego3.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingSanDiego3.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingSanDiego3.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingSanDiego3.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingSanDiego3.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
listingSanDiego4 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '3335 Parkway Street',
    city: 'San Diego',
    state: 'California',
    zip_code: 92103,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -117.187485,
    latitude: 32.732185,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingSanDiego4.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingSanDiego4.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingSanDiego4.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingSanDiego4.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingSanDiego4.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
listingSanDiego5 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '3115 Ocello Street',
    city: 'San Diego',
    state: 'California',
    zip_code: 92103,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -117.096626,
    latitude: 32.722439,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingSanDiego5.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingSanDiego5.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingSanDiego5.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingSanDiego5.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingSanDiego5.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
listingSanDiego6 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '3476 Hamill Avenue',
    city: 'San Diego',
    state: 'California',
    zip_code: 92121,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -117.134445,
    latitude: 32.831329,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingSanDiego6.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingSanDiego6.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingSanDiego6.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingSanDiego6.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingSanDiego6.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
listingSanDiego7 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '3511 Coleman Avenue',
    city: 'San Diego',
    state: 'California',
    zip_code: 92121,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -117.196129,
    latitude: 32.976376,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingSanDiego7.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingSanDiego7.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingSanDiego7.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingSanDiego7.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingSanDiego7.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
listingSanDiego8 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '394 Hood Avenue',
    city: 'San Diego',
    state: 'California',
    zip_code: 92111,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -117.076721,
    latitude: 32.864594,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingSanDiego8.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingSanDiego8.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingSanDiego8.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingSanDiego8.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingSanDiego8.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
listingSanDiego9 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '3157 Hood Avenue',
    city: 'San Diego',
    state: 'California',
    zip_code: 92123,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -117.133354,
    latitude: 32.883507,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingSanDiego9.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingSanDiego9.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingSanDiego9.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingSanDiego9.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingSanDiego9.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )
listingSanDiego10 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '2376 Poplar Avenue',
    city: 'San Diego',
    state: 'California',
    zip_code: 92103,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -117.204590,
    latitude: 32.806499,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listingSanDiego10.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
    listingSanDiego10.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listingSanDiego10.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listingSanDiego10.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listingSanDiego10.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingAnchorage1 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '2543 Blackwell Street',
    city: 'Anchorage',
    state: 'Alaska',
    zip_code: 99518,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -149.979828,
    latitude: 61.248772,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingAnchorage1.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingAnchorage1.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingAnchorage1.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingAnchorage1.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingAnchorage1.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingAnchorage2 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1130 Kidd Avenue',
    city: 'Anchorage',
    state: 'Alaska',
    zip_code: 99501,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -149.878403,
    latitude: 61.300598,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingAnchorage2.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingAnchorage2.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingAnchorage2.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingAnchorage2.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingAnchorage2.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingAnchorage3 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '235 Veltri Drive',
    city: 'Anchorage',
    state: 'Alaska',
    zip_code: 99503,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -149.937317,
    latitude: 61.224735,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingAnchorage3.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingAnchorage3.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingAnchorage3.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingAnchorage3.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingAnchorage3.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingAnchorage4 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '655 Blackwell Street',
    city: 'Anchorage',
    state: 'Alaska',
    zip_code: 99503,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -149.853180,
    latitude: 61.233864,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingAnchorage4.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingAnchorage4.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingAnchorage4.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingAnchorage4.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingAnchorage4.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingAnchorage5 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '556 Veltri Drive',
    city: 'Anchorage',
    state: 'Alaska',
    zip_code: 99503,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -149.803589,
    latitude: 61.266994,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingAnchorage5.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingAnchorage5.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingAnchorage5.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingAnchorage5.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingAnchorage5.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingAnchorage6 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '2186 Blackwell Street',
    city: 'Anchorage',
    state: 'Alaska',
    zip_code: 99503,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -149.856659,
    latitude: 61.261467,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingAnchorage6.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingAnchorage6.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingAnchorage6.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingAnchorage6.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingAnchorage6.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingAnchorage7 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '2511 Timbercrest Road',
    city: 'Anchorage',
    state: 'Alaska',
    zip_code: 99502,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -149.906525,
    latitude: 61.065601,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingAnchorage7.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingAnchorage7.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingAnchorage7.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingAnchorage7.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingAnchorage7.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingAnchorage8 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1113 Timbercrest Road',
    city: 'Anchorage',
    state: 'Alaska',
    zip_code: 99503,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -149.927109,
    latitude: 61.254375,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingAnchorage8.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingAnchorage8.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingAnchorage8.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingAnchorage8.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingAnchorage8.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingAnchorage9 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '235 Veltri Drive',
    city: 'Anchorage',
    state: 'Alaska',
    zip_code: 99503,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -149.937317,
    latitude: 61.224735,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingAnchorage9.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingAnchorage9.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingAnchorage9.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingAnchorage9.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingAnchorage9.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingAnchorage10 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '2128 Veltri Drive',
    city: 'Anchorage',
    state: 'Alaska',
    zip_code: 99503,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -149.803040,
    latitude: 61.273464,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingAnchorage10.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingAnchorage10.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingAnchorage10.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingAnchorage10.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingAnchorage10.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingPhiladelphia1 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1324 Filbert Street',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    zip_code: 19103,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -75.202583,
    latitude: 40.031155,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingPhiladelphia1.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingPhiladelphia1.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingPhiladelphia1.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingPhiladelphia1.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingPhiladelphia1.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingPhiladelphia2 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '3132 Renwick Drive',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    zip_code: 19108,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -75.201469,
    latitude: 40.053806,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingPhiladelphia2.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingPhiladelphia2.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingPhiladelphia2.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingPhiladelphia2.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingPhiladelphia2.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingPhiladelphia3 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '3328 Tipple Road',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    zip_code: 19103,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -75.183151,
    latitude: 39.944149,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingPhiladelphia3.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingPhiladelphia3.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingPhiladelphia3.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingPhiladelphia3.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingPhiladelphia3.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingPhiladelphia4 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '4850 Tipple Road',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    zip_code: 19111,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -75.061562,
    latitude: 39.984844,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingPhiladelphia4.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingPhiladelphia4.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingPhiladelphia4.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingPhiladelphia4.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingPhiladelphia4.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingPhiladelphia5 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '3021 Wakefield Street',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    zip_code: 19125,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -75.058578,
    latitude: 40.037533,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingPhiladelphia5.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingPhiladelphia5.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingPhiladelphia5.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingPhiladelphia5.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingPhiladelphia5.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingPhiladelphia6 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '4086 Wakefield Street',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    zip_code: 19107,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -75.146873,
    latitude: 40.003990,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingPhiladelphia6.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingPhiladelphia6.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingPhiladelphia6.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingPhiladelphia6.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingPhiladelphia6.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingPhiladelphia7 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '330 Lyndon Street',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    zip_code: 19107,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -75.180977,
    latitude: 40.026161,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingPhiladelphia7.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingPhiladelphia7.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingPhiladelphia7.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingPhiladelphia7.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingPhiladelphia7.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingPhiladelphia8 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '2205 Spring Avenue',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    zip_code: 19108,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -75.240837,
    latitude: 39.898300,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingPhiladelphia8.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingPhiladelphia8.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingPhiladelphia8.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingPhiladelphia8.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingPhiladelphia8.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingPhiladelphia9 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '2205 Rocky Road',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    zip_code: 19115,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -75.089890,
    latitude: 40.024799,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingPhiladelphia9.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingPhiladelphia9.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingPhiladelphia9.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingPhiladelphia9.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingPhiladelphia9.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingPhiladelphia10 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '3737 Berkley Street',
    city: 'Philadelphia',
    state: 'Pennsylvania',
    zip_code: 19108,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -75.185509,
    latitude: 40.076248,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingPhiladelphia10.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingPhiladelphia10.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingPhiladelphia10.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingPhiladelphia10.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingPhiladelphia10.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingMiami1 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '671 Ridenour Street',
    city: 'Miami',
    state: 'Florida',
    zip_code: 33176,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -80.274498,
    latitude: 25.686443,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingMiami1.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingMiami1.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingMiami1.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingMiami1.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingMiami1.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingMiami2 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1109 Marigold Lane',
    city: 'Miami',
    state: 'Florida',
    zip_code: 33179,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -80.254311,
    latitude: 26.046629,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingMiami2.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingMiami2.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingMiami2.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingMiami2.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingMiami2.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingMiami3 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1327 Steve Hunt Road',
    city: 'Miami',
    state: 'Florida',
    zip_code: 33131,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -80.271965,
    latitude: 25.861746,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingMiami3.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingMiami3.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingMiami3.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingMiami3.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingMiami3.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingMiami4 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '532 Arbutus Drive',
    city: 'Miami',
    state: 'Florida',
    zip_code: 33012,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -80.373001,
    latitude: 25.668497,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingMiami4.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingMiami4.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingMiami4.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingMiami4.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingMiami4.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingMiami5 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1062 Steve Hunt Road',
    city: 'Miami',
    state: 'Florida',
    zip_code: 33169,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -80.129196,
    latitude: 25.973722,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingMiami5.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingMiami5.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingMiami5.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingMiami5.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingMiami5.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingMiami6 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1063 Steve Hunt Road',
    city: 'Miami',
    state: 'Florida',
    zip_code: 33169,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -80.120064,
    latitude: 25.925823,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingMiami6.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingMiami6.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingMiami6.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingMiami6.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingMiami6.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingMiami7 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1548 Travis Street',
    city: 'Miami',
    state: 'Florida',
    zip_code: 33128,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -80.130424,
    latitude: 25.762749,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingMiami7.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingMiami7.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingMiami7.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingMiami7.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingMiami7.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingMiami8 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '4476 Rinehart Road',
    city: 'Miami',
    state: 'Florida',
    zip_code: 33179,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -80.155830,
    latitude: 25.932756,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingMiami8.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingMiami8.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingMiami8.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingMiami8.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingMiami8.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingMiami9 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '993 Rinehart Road',
    city: 'Miami',
    state: 'Florida',
    zip_code: 33179,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -80.175797,
    latitude: 25.880060,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingMiami9.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingMiami9.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingMiami9.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingMiami9.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingMiami9.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingMiami10 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1857 Tyler Avenue',
    city: 'Miami',
    state: 'Florida',
    zip_code: 33176,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -80.313515,
    latitude: 25.675922,
    price: Faker::Number.within(range: 100..2000)
})
rand_num_1 = rand(19)
rand_num_2 = rand(19)
rand_num_3 = rand(19)
rand_num_4 = rand(19)
rand_num_5 = rand(20)
listingMiami10.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingMiami10.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingMiami10.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingMiami10.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingMiami10.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingArlington1 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1579 Waldeck Street',
    city: 'Arlington',
    state: 'Texas',
    zip_code: 76013,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.092712,
    latitude: 32.707577,
    price: Faker::Number.within(range: 100..2000)
})
listingArlington1.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingArlington1.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingArlington1.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingArlington1.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingArlington1.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingArlington2 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '2865 Ersel Street',
    city: 'Arlington',
    state: 'Texas',
    zip_code: 76011,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.130402,
    latitude: 32.745613,
    price: Faker::Number.within(range: 100..2000)
})
listingArlington2.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingArlington2.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingArlington2.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingArlington2.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingArlington2.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingArlington3 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1240 Carolyns Circle',
    city: 'Arlington',
    state: 'Texas',
    zip_code: 76011,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.113670,
    latitude: 32.699211,
    price: Faker::Number.within(range: 100..2000)
})
listingArlington3.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingArlington3.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingArlington3.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingArlington3.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingArlington3.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingArlington4 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '3243 Florence Street',
    city: 'Arlington',
    state: 'Texas',
    zip_code: 76011,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -96.992493,
    latitude: 32.847809,
    price: Faker::Number.within(range: 100..2000)
})
listingArlington4.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingArlington4.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingArlington4.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingArlington4.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingArlington4.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingArlington5 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '2255 Carolyns Circle',
    city: 'Arlington',
    state: 'Texas',
    zip_code: 76011,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.020950,
    latitude: 32.813625,
    price: Faker::Number.within(range: 100..2000)
})
listingArlington5.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingArlington5.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingArlington5.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingArlington5.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingArlington5.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingArlington6 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1579 Waldeck Street',
    city: 'Arlington',
    state: 'Texas',
    zip_code: 76013,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.092712,
    latitude: 32.707577,
    price: Faker::Number.within(range: 100..2000)
})
listingArlington6.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingArlington6.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingArlington6.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingArlington6.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingArlington6.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingArlington7 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '4196 Waldeck Street',
    city: 'Arlington',
    state: 'Texas',
    zip_code: 76013,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.216629,
    latitude: 32.694473,
    price: Faker::Number.within(range: 100..2000)
})
listingArlington7.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingArlington7.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingArlington7.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingArlington7.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingArlington7.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingArlington8 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1660 Jones Street',
    city: 'Arlington',
    state: 'Texas',
    zip_code: 76011,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.044708,
    latitude: 32.738369,
    price: Faker::Number.within(range: 100..2000)
})
listingArlington8.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingArlington8.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingArlington8.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingArlington8.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingArlington8.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingArlington9 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '4052 Waldeck Street',
    city: 'Arlington',
    state: 'Texas',
    zip_code: 76010,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.059761,
    latitude: 32.741619,
    price: Faker::Number.within(range: 100..2000)
})
listingArlington9.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingArlington9.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingArlington9.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingArlington9.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingArlington9.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingArlington10 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '212 Fancher Drive',
    city: 'Arlington',
    state: 'Texas',
    zip_code: 76011,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -97.145172,
    latitude: 32.748772,
    price: Faker::Number.within(range: 100..2000)
})
listingArlington10.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingArlington10.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingArlington10.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingArlington10.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingArlington10.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingVirginaBeach1 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '424 Murry Street',
    city: 'Virginia Beach',
    state: 'Virginia',
    zip_code: 23455,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -76.108749,
    latitude: 36.863865,
    price: Faker::Number.within(range: 100..2000)
})
listingVirginaBeach1.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingVirginaBeach1.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingVirginaBeach1.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingVirginaBeach1.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingVirginaBeach1.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingVirginaBeach2 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '323 Murry Street',
    city: 'Virginia Beach',
    state: 'Virginia',
    zip_code: 23462,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -76.156006,
    latitude: 36.823887,
    price: Faker::Number.within(range: 100..2000)
})
listingVirginaBeach2.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingVirginaBeach2.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingVirginaBeach2.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingVirginaBeach2.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingVirginaBeach2.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingVirginaBeach3 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '955 Murry Street',
    city: 'Virginia Beach',
    state: 'Virginia',
    zip_code: 23462,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -76.186737,
    latitude: 36.927898,
    price: Faker::Number.within(range: 100..2000)
})
listingVirginaBeach3.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingVirginaBeach3.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingVirginaBeach3.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingVirginaBeach3.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingVirginaBeach3.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingVirginaBeach4 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '4960 Murry Street',
    city: 'Virginia Beach',
    state: 'Virginia',
    zip_code: 23451,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -75.972969,
    latitude: 36.822052,
    price: Faker::Number.within(range: 100..2000)
})
listingVirginaBeach4.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingVirginaBeach4.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingVirginaBeach4.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingVirginaBeach4.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingVirginaBeach4.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingVirginaBeach5 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '4474 Pinchelone Street',
    city: 'Virginia Beach',
    state: 'Virginia',
    zip_code: 23464,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -76.157768,
    latitude: 36.833305,
    price: Faker::Number.within(range: 100..2000)
})
listingVirginaBeach5.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingVirginaBeach5.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingVirginaBeach5.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingVirginaBeach5.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingVirginaBeach5.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingVirginaBeach6 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '827 Murry Street',
    city: 'Virginia Beach',
    state: 'Virginia',
    zip_code: 23451,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -75.895027,
    latitude: 36.956112,
    price: Faker::Number.within(range: 100..2000)
})
listingVirginaBeach6.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingVirginaBeach6.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingVirginaBeach6.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingVirginaBeach6.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingVirginaBeach6.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingVirginaBeach7 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '3631 Murry Street',
    city: 'Virginia Beach',
    state: 'Virginia',
    zip_code: 23456,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -75.821381,
    latitude: 36.739624,
    price: Faker::Number.within(range: 100..2000)
})
listingVirginaBeach7.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingVirginaBeach7.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingVirginaBeach7.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingVirginaBeach7.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingVirginaBeach7.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingVirginaBeach8 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '485 Pinchelone Street',
    city: 'Virginia Beach',
    state: 'Virginia',
    zip_code: 23454,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -76.039864,
    latitude: 36.802540,
    price: Faker::Number.within(range: 100..2000)
})
listingVirginaBeach8.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingVirginaBeach8.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingVirginaBeach8.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingVirginaBeach8.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingVirginaBeach8.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingVirginaBeach9 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '1790 Pinchelone Street',
    city: 'Virginia Beach',
    state: 'Virginia',
    zip_code: 23464,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -76.151443,
    latitude: 36.711376,
    price: Faker::Number.within(range: 100..2000)
})
listingVirginaBeach9.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingVirginaBeach9.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingVirginaBeach9.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingVirginaBeach9.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingVirginaBeach9.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listingVirginaBeach10 = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '3371 Allison Avenue',
    city: 'Virginia Beach',
    state: 'Virginia',
    zip_code: 23464,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -76.172913,
    latitude: 36.712601,
    price: Faker::Number.within(range: 100..2000)
})
listingVirginaBeach10.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[rand_num_5][1] )
listingVirginaBeach10.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
listingVirginaBeach10.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
listingVirginaBeach10.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
listingVirginaBeach10.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

30.times do 
    cleanliness1 = Faker::Number.within(range: 1..5)
    communication1 = Faker::Number.within(range: 1..5)
    check_in1 = Faker::Number.within(range: 1..5)
    accuracy1 = Faker::Number.within(range: 1..5)
    location1 = Faker::Number.within(range: 1..5)
    value1 = Faker::Number.within(range: 1..5)
    rating1 = (cleanliness1 + communication1  + check_in1 + accuracy1 + location1 + value1) / 6.0
    Review.create! ({
        body: 'I had a really good time! This house is excellent',
        rating: rating1,
        guest_id: Faker::Number.within(range: 1..11), 
        listing_id: Faker::Number.within(range: 1..80),
        cleanliness: cleanliness1,
        communication: communication1,
        check_in: check_in1,
        accuracy: accuracy1,
        location: location1,
        value: value1
    })
    cleanliness2 = Faker::Number.within(range: 1..5)
    communication2 = Faker::Number.within(range: 1..5)
    check_in2 = Faker::Number.within(range: 1..5)
    accuracy2 = Faker::Number.within(range: 1..5)
    location2 = Faker::Number.within(range: 1..5)
    value2 = Faker::Number.within(range: 1..5)
    rating2 = (cleanliness2 + communication2  + check_in2 + accuracy2 + location2 + value2) / 6.0
    Review.create! ({
        body: 'I highly recommend this rental to anyone!!',
        rating: rating2,
        guest_id: Faker::Number.within(range: 1..11), 
        listing_id: Faker::Number.within(range: 1..80),
        cleanliness: cleanliness2,
        communication: communication2,
        check_in: check_in2,
        accuracy: accuracy2,
        location: location2,
        value: value2
    })
    cleanliness3 = Faker::Number.within(range: 1..5)
    communication3 = Faker::Number.within(range: 1..5)
    check_in3 = Faker::Number.within(range: 1..5)
    accuracy3 = Faker::Number.within(range: 1..5)
    location3 = Faker::Number.within(range: 1..5)
    value3 = Faker::Number.within(range: 1..5)
    rating3 = (cleanliness3 + communication3  + check_in3 + accuracy3 + location3 + value3) / 6.0
    Review.create! ({
        body: 'I love this city, did not disappoint.',
        rating: rating3,
        guest_id: Faker::Number.within(range: 1..11), 
        listing_id: Faker::Number.within(range: 1..80),
        cleanliness: cleanliness3,
        communication: communication3,
        check_in: check_in3,
        accuracy: accuracy3,
        location: location3,
        value: value3
    })
    cleanliness4 = Faker::Number.within(range: 1..5)
    communication4 = Faker::Number.within(range: 1..5)
    check_in4 = Faker::Number.within(range: 1..5)
    accuracy4 = Faker::Number.within(range: 1..5)
    location4 = Faker::Number.within(range: 1..5)
    value4 = Faker::Number.within(range: 1..5)
    rating4 = (cleanliness4 + communication4  + check_in4 + accuracy4 + location4 + value4) / 6.0
    Review.create! ({
        body: 'The location was super cool.',
        rating: rating4,
        guest_id: Faker::Number.within(range: 1..11), 
        listing_id: Faker::Number.within(range: 1..80),
        cleanliness: cleanliness4,
        communication: communication4,
        check_in: check_in4,
        accuracy: accuracy4,
        location: location4,
        value: value4
    })
    cleanliness5 = Faker::Number.within(range: 1..5)
    communication5 = Faker::Number.within(range: 1..5)
    check_in5 = Faker::Number.within(range: 1..5)
    accuracy5 = Faker::Number.within(range: 1..5)
    location5 = Faker::Number.within(range: 1..5)
    value5 = Faker::Number.within(range: 1..5)
    rating5 = (cleanliness5 + communication5  + check_in5 + accuracy5 + location5 + value5) / 6.0
    Review.create! ({
        body: 'The host gave us gift bags.',
        rating: rating5,
        guest_id: Faker::Number.within(range: 1..11), 
        listing_id: Faker::Number.within(range: 1..80),
        cleanliness: cleanliness5,
        communication: communication5,
        check_in: check_in5,
        accuracy: accuracy5,
        location: location5,
        value: value5
    })
    cleanliness6 = Faker::Number.within(range: 1..5)
    communication6 = Faker::Number.within(range: 1..5)
    check_in6 = Faker::Number.within(range: 1..5)
    accuracy6 = Faker::Number.within(range: 1..5)
    location6 = Faker::Number.within(range: 1..5)
    value6 = Faker::Number.within(range: 1..5)
    rating6 = (cleanliness6 + communication6  + check_in6 + accuracy6 + location6 + value6) / 6.0
    Review.create! ({
        body: 'I really wanted a gift bag.',
        rating: rating6,
        guest_id: Faker::Number.within(range: 1..11), 
        listing_id: Faker::Number.within(range: 1..80),
        cleanliness: cleanliness6,
        communication: communication6,
        check_in: check_in6,
        accuracy: accuracy6,
        location: location6,
        value: value6
    })
    cleanliness7 = Faker::Number.within(range: 1..5)
    communication7 = Faker::Number.within(range: 1..5)
    check_in7 = Faker::Number.within(range: 1..5)
    accuracy7 = Faker::Number.within(range: 1..5)
    location7 = Faker::Number.within(range: 1..5)
    value7 = Faker::Number.within(range: 1..5)
    rating7 = (cleanliness7 + communication7  + check_in7 + accuracy7 + location7 + value7) / 6.0
    Review.create! ({
        body: 'They said they never give gift bags.',
        rating: rating7,
        guest_id: Faker::Number.within(range: 1..11), 
        listing_id: Faker::Number.within(range: 1..80),
        cleanliness: cleanliness7,
        communication: communication7,
        check_in: check_in7,
        accuracy: accuracy7,
        location: location7,
        value: value7
    })
    cleanliness8 = Faker::Number.within(range: 1..5)
    communication8 = Faker::Number.within(range: 1..5)
    check_in8 = Faker::Number.within(range: 1..5)
    accuracy8 = Faker::Number.within(range: 1..5)
    location8 = Faker::Number.within(range: 1..5)
    value8 = Faker::Number.within(range: 1..5)
    rating8 = (cleanliness8 + communication8  + check_in8 + accuracy8 + location8 + value8) / 6.0
    Review.create! ({
        body: 'I loved staying here.',
        rating: rating8,
        guest_id: Faker::Number.within(range: 1..11), 
        listing_id: Faker::Number.within(range: 1..80),
        cleanliness: cleanliness8,
        communication: communication8,
        check_in: check_in8,
        accuracy: accuracy8,
        location: location8,
        value: value8
    })
    cleanliness9 = Faker::Number.within(range: 1..5)
    communication9 = Faker::Number.within(range: 1..5)
    check_in9 = Faker::Number.within(range: 1..5)
    accuracy9 = Faker::Number.within(range: 1..5)
    location9 = Faker::Number.within(range: 1..5)
    value9 = Faker::Number.within(range: 1..5)
    rating9 = (cleanliness9 + communication9  + check_in9 + accuracy9 + location9 + value9) / 6.0
    Review.create! ({
        body: 'We had a fantastic time here.',
        rating: rating9,
        guest_id: Faker::Number.within(range: 1..11), 
        listing_id: Faker::Number.within(range: 1..80),
        cleanliness: cleanliness9,
        communication: communication9,
        check_in: check_in9,
        accuracy: accuracy9,
        location: location9,
        value: value9
    })
    cleanliness10 = Faker::Number.within(range: 1..5)
    communication10 = Faker::Number.within(range: 1..5)
    check_in10 = Faker::Number.within(range: 1..5)
    accuracy10 = Faker::Number.within(range: 1..5)
    location10 = Faker::Number.within(range: 1..5)
    value10 = Faker::Number.within(range: 1..5)
    rating10 = (cleanliness10 + communication10  + check_in10 + accuracy10 + location10 + value10) / 6.0
    Review.create! ({
        body: 'What can I say? The listings rating speaks for itself.',
        rating: rating10,
        guest_id: Faker::Number.within(range: 1..11), 
        listing_id: Faker::Number.within(range: 1..80),
        cleanliness: cleanliness10,
        communication: communication10,
        check_in: check_in10,
        accuracy: accuracy10,
        location: location10,
        value: value10
    })
   
end



