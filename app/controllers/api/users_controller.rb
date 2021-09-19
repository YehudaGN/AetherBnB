class Api::UsersController < ApplicationController


    def show
        @user = User.with_attached_photo.find_by(id: params[:id])
        render :show
    end

    def index 
        @users = User.all
        render :index
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show' # just sends up to frontend? dont actually need to render the users show in front end i think
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find_by(id: params[:id])
        debugger # trying to figure out add photo to user
        if @user && @user.update(user_update_params) # <--- is this wrong
            debugger
            render '/api/users/show'
        else
            debugger
            render json: @user.errors.full_messages
        end
    end

    # def destroy

    # end

    private

    def user_params
        params.require(:user).permit(:email, :fname, :lname, :password, :bio)
    end

    def user_update_params
        params.require(:user).permit(:email, :fname, :lname, :bio, :photo)
    end
end