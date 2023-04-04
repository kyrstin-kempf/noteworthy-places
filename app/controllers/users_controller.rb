class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :index, :destroy]
  
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end
  
  def show
    render json: @user
  end

  def index 
    users = User.all 
    render json: users
  end

  def destroy 
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end

  private
    
  def user_params
    params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end

end
