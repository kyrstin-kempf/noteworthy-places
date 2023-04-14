class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :map_url, :website_url, :notes, :region_id

  belongs_to :user
  belongs_to :region
  belongs_to :activity
end
