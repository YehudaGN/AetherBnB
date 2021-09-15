class Api::ReviewsController < ApplicationController
    # may want to remove show and index
    def show 
        @review = Review.find(params[:id])
        render :show
    end

    def index 
        @reviews = Reviews.all
        render :index
    end

    def create 
        @review = Review.create!(review_params)
        # if @review.save 
        #     render :index
        # end
    end

    def update
        @review = Review.find_by(id: params[:id])
        @review.update(review_params)
        # if @review.update(review_params)
            # render :show
        # end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        @review.destroy
    end

    private 

    def review_params 
        params.require(:review).permit(:body, :rating, :guest_id, :listing_id, :cleanliness, :communication, :check_in, :accuracy, :location, :value)
    end
end