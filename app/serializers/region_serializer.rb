class RegionSerializer < ActiveModel::Serializer
  attributes :id, :city, :state

  has_many :places
end
