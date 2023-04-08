class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :activity_type

  has_many :places
end
