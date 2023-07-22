class RenameDecksIdInDeckCards < ActiveRecord::Migration[7.0]
  def change
    rename_column :deck_cards, :decks_id, :deck_id
    rename_column :deck_cards, :cards_id, :card_id

  end
end
