class WishlistCard < ApplicationRecord
  belongs_to :wishlists
  belongs_to :cards
end
