class RegionsController < ApplicationController
  skip_before_action :authorize, only: [:index, :destroy, :update]

  def index
    render json: Region.all
  end

  def create
    render json: Region.create!(regions_params)
  end

  def update 
    region = Region.find(params[:id])
    region.update(regions_params) 
    render json: region
  end

  def destroy 
    region = Region.find(params[:id])
    region.destroy
    head :no_content
  end

  private

  def regions_params
    params.require(:region).permit(:state, :city)
  end
end