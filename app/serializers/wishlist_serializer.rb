class WishlistSerializer < ActiveModel::Serializer
  attributes :id, :wishlist_name
  has_many :wishlist_cards
end
