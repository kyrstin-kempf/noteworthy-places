class CreatePlaces < ActiveRecord::Migration[7.0]
  def change
    create_table :places do |t|
      t.string :name
      t.string :map_url
      t.string :website_url
      t.string :notes
      t.integer :user_id
      t.integer :region_id

      t.timestamps
    end
  end
end
