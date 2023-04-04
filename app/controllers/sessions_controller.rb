class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create 
        user = User.find_by(email: session_params[:email])
        if user && user.authenticate(session_params[:password])
            session[:user_id] = user.id
            render json: user
        else 
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def destroy 
        session.delete :user_id
        head :no_content
    end

    private

    def session_params 
        params.permit(:email, :password)
    end

end
