class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.date :start_date, null: false 
      t.date :end_date, null: false
      t.integer :guest_id, null: false 
      t.integer :listing_id, null: false
      t.integer :num_guests, null: false 
      t.float :price, null: false 
      t.timestamps
    end
    add_index :bookings, :guest_id
    add_index :bookings, :listing_id
  end
end
