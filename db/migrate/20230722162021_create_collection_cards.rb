class CreateCollectionCards < ActiveRecord::Migration[7.0]
  def change
    create_table :collection_cards do |t|
      t.references :users, null: false, foreign_key: true
      t.references :cards, null: false, foreign_key: true
      t.integer :total_quantity
      t.integer :available_quantity

      t.timestamps
    end
  end
end
