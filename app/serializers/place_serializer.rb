class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :map_url, :website_url, :notes, :region_id, :activity_id
end
