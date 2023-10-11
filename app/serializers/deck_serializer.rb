class DeckSerializer < ActiveModel::Serializer
  attributes :id, :deck_name, :description
  has_many :deck_cards
end
