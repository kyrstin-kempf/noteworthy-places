class PlacesController < ApplicationController
  skip_before_action :authorize, only: [:index, :create, :destroy, :update]

  def index
    user = User.find_by(id: session[:user_id])
    # preload region
    places = user.places.includes(:region).order(name: :asc) 
    render json: group_places(places)
  end

  def create 
    place = Place.create!(place_params)
    render json: place, status: :created
  end

  def update
    user = User.find_by(id: session[:user_id]) 
    place = user.places.find(params[:id])
    place.update(place_params)
    render json: place
  end

  def destroy 
    place = Place.find(params[:id])
    place.destroy
    head :no_content
  end

  private

  def find_place
    @user.places.find(params[:id])
  end

  def place_params 
    params.permit(:name, :map_url, :website_url, :notes, :user_id, :region_id, :activity_id)
  end

  def group_places(places)
    groups = places.each_with_object({}) do |place, hsh|
      key = "#{place.region.city}, #{place.region.state}"
      hsh[key] = { city: place.region.city, state: place.region.state, places: [] } if !hsh.key?(key)
      hsh[key][:places] << place
    end
    groups.values
  end
end