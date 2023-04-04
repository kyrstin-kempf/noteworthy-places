class RegionsController < ApplicationController
  skip_before_action :authorize, only: [:index]

  def index
    regions = Region.all
    render json: regions
  end

end