class User < ApplicationRecord
  has_secure_password
  
  has_many :collection_cards
  has_many :cards, through: :collection_cards

  has_many :decks

  has_many :wishlists
end
