class Listing < ApplicationRecord
    validates :title, :description, :host_id, :address, :city, :state, :zip_code, :num_beds, :longitude, :latitude, :price, presence: true
    
    belongs_to :user, 
        foreign_key: :host_id, 
        class_name: :User


end