class PlacesController < ApplicationController
  skip_before_action :authorize, only: [:index]

  def index
    places = Place.all
    render json: places
  end

  def create 
    place = Place.create!(place_params)
    render json: place, status: :created
  end

  private

  def place_params 
    params.permit(:name, :map_url, :website_url, :notes, :user_id, :region_id, :activity_id)
  end

end