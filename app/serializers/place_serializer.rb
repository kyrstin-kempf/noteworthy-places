class PlaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :map_url, :website_url, :notes

  # belongs_to :region

end
