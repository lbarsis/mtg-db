class CreateWishlistCards < ActiveRecord::Migration[7.0]
  def change
    create_table :wishlist_cards do |t|
      t.references :wishlists, null: false, foreign_key: true
      t.references :cards, null: false, foreign_key: true
      t.integer :quantity

      t.timestamps
    end
  end
end
