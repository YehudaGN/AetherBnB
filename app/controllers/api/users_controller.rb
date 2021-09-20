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
        # @user.photo.attach(io: File.open('app/assets/images/user-icon.png'), filename: 'user-icon.png' )
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find_by(id: params[:id])
        if @user && @user.update(user_params) 
            render '/api/users/show'
        else
            render json: @user.errors.full_messages
        end
    end

    # def destroy

    # end

    private

    def user_params
        params.require(:user).permit(:email, :fname, :lname, :password, :bio, :photo)
    end

    def user_update_params
        params.require(:user).permit(:email, :fname, :lname, :bio, :photo)
    end
end