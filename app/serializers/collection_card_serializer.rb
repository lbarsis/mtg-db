class CollectionCardSerializer < ActiveModel::Serializer
  attributes :id, :total_quantity, :available_quantity
  belongs_to :card
end
