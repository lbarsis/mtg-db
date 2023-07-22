class CreateDecks < ActiveRecord::Migration[7.0]
  def change
    create_table :decks do |t|
      t.references :users, null: false, foreign_key: true
      t.string :deck_name
      t.text :description

      t.timestamps
    end
  end
end
