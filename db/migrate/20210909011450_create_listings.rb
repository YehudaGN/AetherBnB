class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|     
      t.string :title, null: false
      t.string :description, null: false
      t.integer :host_id, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip_code, null: false
      t.integer :num_beds, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.integer :price, null: false
      t.timestamps
    end
    add_index :listings, :host_id
  end
end
