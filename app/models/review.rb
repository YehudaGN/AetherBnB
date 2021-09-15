class Review < ApplicationRecord 
    validates :body, :rating, :guest_id, :listing_id, :cleanliness, :communication, :check_in, :accuracy, :location, :value, presence: true

    belongs_to :guest,
        foreign_key: :guest_id,
        class_name: :User

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing
end