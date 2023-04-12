class ActivitiesController < ApplicationController
  skip_before_action :authorize, only: [:index]

  def index
    activities = Activity.all
    render json: activities
  end

  def create
    render json: Activity.create!(activity_params)
  end

  private

  def activity_params
    params.require(:activity).permit(:activity_type)
  end

end
