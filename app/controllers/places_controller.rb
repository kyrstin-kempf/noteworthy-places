class PlacesController < ApplicationController

  def index
    user = User.find_by(id: session[:user_id])
    places = user.places.order('LOWER(name)') 
    render json: places

    # user = User.find_by(id: session[:user_id])
    # places = user.places.order('LOWER(name)')
    # render json: group_places(places)
  end

  def show
    place = Place.find_by(id: params[:id])
    if place 
      render json: place
    else
      render json: { error: 'Not found' }, status: :not_found 
    end
  end

  def create 
    place = Place.create!(place_params)
    render json: place, status: :created
  end

  def update 
    place = Place.find(params[:id])
    place.update(place_params) 
    render json: place
  end

  def destroy 
    place = Place.find(params[:id])
    place.destroy
    head :no_content
  end

  private

  def place_params 
    params.permit(:name, :map_url, :website_url, :notes, :user_id, :region_id, :activity_id)
  end

  # def group_places(places)
  #   groups = places.each_with_object({}) do |place, hsh|
  #     key = "#{place.region.city}, #{place.region.state}"
  #     hsh[key] = { id: place.region.id, city: place.region.city, state: place.region.state, places: [], activity: place.activity, user: place.user } if !hsh.key?(key)
  #     hsh[key][:places] << place
  #   end
  #   groups.values
  # end
 
end