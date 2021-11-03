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
demo_user.photo.attach(io: File.open('app/assets/images/night-sky.png'), filename: 'night-sky.png' )

10.times do |i|
    user = User.create! ({
        fname: Faker::Name.first_name,
        lname: Faker::Name.last_name,
        email: Faker::Internet.unique.email,
        password: "password",
        bio: Faker::Quote.most_interesting_man_in_the_world
    })
    user.photo.attach(io: File.open('app/assets/images/night-sky.png'), filename: 'night-sky.png' )
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

i = 0

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
    listing1NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[i][1] )
    listing1NewYork.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listing1NewYork.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listing1NewYork.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listing1NewYork.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

listing2NewYork = Listing.create! ({
    host_id: Faker::Number.within(range: 1..11),
    title: Faker::Book.title,
    description: Faker::Quote.famous_last_words,
    address: '3488 Redbud Drive',
    city: 'New York',
    state: 'New York',
    zip_code: 10011,
    num_beds: Faker::Number.within(range: 1..10),
    longitude: -73.920090,
    latitude: 40.781387,
    price: Faker::Number.within(range: 100..2000)
})
    rand_num_1 = rand(19)
    rand_num_2 = rand(19)
    rand_num_3 = rand(19)
    rand_num_4 = rand(19)
    rand_num_5 = rand(20)
    listing2NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[i][1] )
    listing2NewYork.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listing2NewYork.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listing2NewYork.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listing2NewYork.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

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
    listing2NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[i][1] )
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
    listing3NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[i][1] )
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
    listing4NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[i][1] )
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
    listing5NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[i][1] )
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
    listing6NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[i][1] )
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
    listing7NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[i][1] )
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
    listing8NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[i][1] )
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
    listing9NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[i][1] )
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
    listing10NewYork.photos.attach(io: File.open(exteriors[rand_num_5][0]), filename: exteriors[i][1] )
    listing10NewYork.photos.attach(io: File.open(interiors[rand_num_1][0]), filename: interiors[rand_num_1][1] )
    listing10NewYork.photos.attach(io: File.open(interiors[rand_num_2][0]), filename: interiors[rand_num_2][1] )
    listing10NewYork.photos.attach(io: File.open(interiors[rand_num_3][0]), filename: interiors[rand_num_3][1] )
    listing10NewYork.photos.attach(io: File.open(interiors[rand_num_4][0]), filename: interiors[rand_num_4][1] )

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



