class RemoveOldForeignKeys < ActiveRecord::Migration[7.0]
  def change
    remove_foreign_key "collection_cards", "cards"
    remove_foreign_key "collection_cards", "users"
    remove_foreign_key "deck_cards", "cards"
    remove_foreign_key "deck_cards", "decks"
    remove_foreign_key "decks", "users"
    remove_foreign_key "wishlist_cards", "cards"
    remove_foreign_key "wishlist_cards", "wishlists"
    remove_foreign_key "wishlists", "users"
  end
end
