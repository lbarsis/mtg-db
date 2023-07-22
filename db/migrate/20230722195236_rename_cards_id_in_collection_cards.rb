class RenameCardsIdInCollectionCards < ActiveRecord::Migration[7.0]
  def change
    rename_column :collection_cards, :cards_id, :card_id
  end
end
