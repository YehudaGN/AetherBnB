class Api::ListingsController < ApplicationController
    
    def show
        # debugger
        @listing = Listing.with_attached_photos.find_by(id: params[:id])
    end

    def index
        debugger
        @listings = Listing.with_attached_photos.all
        render :index # add sql for search by city

     

    end

    def create
        @listing = Listing.new(listing_params)
        @listing.host_id = current_user.id
        if @listing.save
            render :show
        else
            render json: @listing.errors.full_messages
        end
    end

    def update
        @listing = Listing.find_by(id: params[:id])
        if @listing && @listing.update(listing_params)
            render :show
        else
            render json: @listing.errors.full_messages
        end
    end

    def destroy
        @listing = Listing.find_by(id: params[:id])
        @listing.destroy
    end

    private

    def listing_params
        params.require(:listing).permit(:title, :description, :address, :city, :state, :zip_code, :num_beds, :longitude, :latitude, :price, photos: [])
    end
end