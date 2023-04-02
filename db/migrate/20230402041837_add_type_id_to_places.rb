class AddTypeIdToPlaces < ActiveRecord::Migration[7.0]
  def change
    add_column :places, :activity_id, :integer
  end
end
