class DeckCard < ApplicationRecord
  belongs_to :decks
  belongs_to :cards
end
