class Wishlist < ApplicationRecord
  belongs_to :user

  has_many :wishlist_cards
  has_many :cards, through: :wishlist_cards
end
