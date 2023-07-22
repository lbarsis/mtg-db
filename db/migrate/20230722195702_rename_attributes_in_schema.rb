class RenameAttributesInSchema < ActiveRecord::Migration[7.0]
  def change
    rename_column :wishlist_cards, :wishlists_id, :wishlist_id
    rename_column :wishlist_cards, :cards_id, :card_id
    rename_column :wishlists, :users_id, :user_id
  end
end
