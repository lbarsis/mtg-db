class ChangeCardToJson < ActiveRecord::Migration[7.0]
  def change
    change_column :cards, :card_data, 'jsonb USING CAST(card_data AS jsonb)'
  end
end
