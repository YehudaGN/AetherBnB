class Api::UsersController < ApplicationController


    def show
        @user = User.find_by(id: params[:id])
        render :show
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

    # def update
    #     @user = User.find_by(id: params[:id])
    #     if @user && @user.update(user_params) # <--- is this wrong
    #         render '/api/users/show'
    #     else
    #         render json: @user.errors.full_messages
    #     end
    # end

    # def destroy

    # end

    private

    def user_params
        params.require(:user).permit(:email, :fname, :lname, :password, :bio)
    end
end