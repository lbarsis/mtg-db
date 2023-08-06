class DeckSerializer < ActiveModel::Serializer
  attributes :id, :deck_name
  has_many :deck_cards
end
