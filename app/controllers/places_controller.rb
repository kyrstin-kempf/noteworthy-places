class PlacesController < ApplicationController

  def index
    user = User.find_by(id: session[:user_id])
    places = user.places.order('LOWER(name)') 
    render json: places
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
 
end