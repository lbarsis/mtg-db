class CreateCards < ActiveRecord::Migration[7.0]
  def change
    enable_extension 'hstore' unless extension_enabled?('hstore')
    create_table :cards do |t|
      t.hstore :card_data

      t.timestamps
    end
  end
end
