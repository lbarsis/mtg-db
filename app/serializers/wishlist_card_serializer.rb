class WishlistCardSerializer < ActiveModel::Serializer
  attributes :id, :card, :quantity
  belongs_to :card
  belongs_to :deck
end
