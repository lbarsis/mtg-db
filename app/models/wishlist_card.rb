class WishlistCard < ApplicationRecord
  belongs_to :wishlist
  belongs_to :card
end
