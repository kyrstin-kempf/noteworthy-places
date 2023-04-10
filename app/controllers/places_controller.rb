class PlacesController < ApplicationController
  skip_before_action :authorize, only: [:index, :create, :destroy, :update, :show]

  def index
    # render json: Place.all
    user = User.find_by(id: session[:user_id])
    places = user.places.includes(:region).order(name: :asc) 
    render json: group_places(places)
  end

  def show
    place = Place.find_by(id: params[:id])
    if place 
      render json: place
    else
      render json: { error: 'Not found' }, status: :not_found 
    end
    # user = User.find_by(id: session[:user_id])
    # # preload region
    # places = user.places.includes(:region).order(name: :asc) 
    # placesList = group_places(places)
    # region = placesList.find_by(region_id: params[:region_id])
    # place = region.places.find_by(id: params[:id])
    # if region 
    #   render json: region 
    # else
    #   render json: { error: 'Not found' }, status: :not_found
    # end
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
      hsh[key] = { id: place.region.id, city: place.region.city, state: place.region.state, places: [] } if !hsh.key?(key)
      hsh[key][:places] << place
    end
    groups.values
  end
end