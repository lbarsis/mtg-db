class CreateWishlists < ActiveRecord::Migration[7.0]
  def change
    create_table :wishlists do |t|
      t.references :users, null: false, foreign_key: true
      t.string :wishlist_name
      t.string :description

      t.timestamps
    end
  end
end
