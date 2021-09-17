class Listing < ApplicationRecord
    validates :title, :description, :host_id, :address, :city, :state, :zip_code, :num_beds, :longitude, :latitude, :price, presence: true
    
    belongs_to :user, 
        foreign_key: :host_id, 
        class_name: :User

    has_many_attached :photos

    has_many :bookings,
        foreign_key: :listing_id,
        class_name: :Booking

    has_many :reviews,
        foreign_key: :listing_id,
        class_name: :Review


end