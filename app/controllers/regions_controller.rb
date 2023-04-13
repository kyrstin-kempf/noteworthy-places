class RegionsController < ApplicationController

  def index
    render json: Region.all
    # user = User.find_by(id: session[:user_id])
    # regions = user.regions
    # render json: regions
  end

  def create
    render json: Region.create!(regions_params)
  end

  private

  def regions_params
    params.require(:region).permit(:state, :city)
  end
end