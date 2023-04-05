class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :map_url, :website_url, :notes, :activity_id, :region_id

end
