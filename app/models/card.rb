class Card < ApplicationRecord
  has_many :collection_cards
  has_many :users, through: :collection_cards

  has_many :deck_cards
  has_many :decks, through: :deck_cards

  has_many :wishlist_cards
  has_many :wishlists, through: :wishlist_cards
end
