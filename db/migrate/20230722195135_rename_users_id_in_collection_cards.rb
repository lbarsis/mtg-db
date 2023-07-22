class RenameUsersIdInCollectionCards < ActiveRecord::Migration[7.0]
  def change
    rename_column :collection_cards, :users_id, :user_id
  end
end
