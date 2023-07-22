class Deck < ApplicationRecord
  belongs_to :users

  has_many :deck_cards
  has_many :cards, through: :deck_cards
end
