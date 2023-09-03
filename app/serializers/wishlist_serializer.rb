class WishlistSerializer < ActiveModel::Serializer
  attributes :id, :wishlist_name, :description
  has_many :wishlist_cards
end
