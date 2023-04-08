class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name

  # def user_regionplaces 
  #   adjusted_regions = object.regions.map do |region|
  #     ar = {}
  #     ar[:city] = region.city
  #     ar[:state] = region.state
  #     ar[:places] = region.places.order("name").select { |p| p.user_id == object.id }
  #     ar
  #   end
  #   adjusted_regions
  # end

end
