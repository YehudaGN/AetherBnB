class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email, null: false, index: { unique: true }
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false, index: { unique: true }
      t.text :bio
      t.timestamps
    end
  end
end
