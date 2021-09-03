class SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
          )
      
          if @user
            login(@user)
            render "api/users/show"
          else
            render json: ["Invalid credentials"], status: 401 # change to correct error?
          end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render "/api/users/show" # do i render this? 
        else
            render json: ["Nobody signed in"], status: 404
        end
    end
end