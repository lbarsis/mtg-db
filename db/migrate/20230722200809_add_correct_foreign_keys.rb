class AddCorrectForeignKeys < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key "collection_cards", "cards", column: "card_id"
    add_foreign_key "collection_cards", "users", column: "user_id"
    add_foreign_key "deck_cards", "cards", column: "card_id"
    add_foreign_key "deck_cards", "decks", column: "deck_id"
    add_foreign_key "decks", "users", column: "user_id"
    add_foreign_key "wishlist_cards", "cards", column: "card_id"
    add_foreign_key "wishlist_cards", "wishlists", column: "wishlist_id"
    add_foreign_key "wishlists", "users", column: "user_id"
  end
end
