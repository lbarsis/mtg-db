class CollectionCard < ApplicationRecord
  belongs_to :users
  belongs_to :cards
end
