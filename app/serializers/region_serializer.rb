class RegionSerializer < ActiveModel::Serializer
  attributes :id, :city, :state, :places

  has_many :places
end
