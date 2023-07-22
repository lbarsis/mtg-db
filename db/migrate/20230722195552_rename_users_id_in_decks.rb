class RenameUsersIdInDecks < ActiveRecord::Migration[7.0]
  def change
    rename_column :decks, :users_id, :user_id
  end
end
