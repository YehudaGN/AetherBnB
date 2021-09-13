class Api::BookingsController < ApplicationController
    
    def show 
        @booking = Booking.find_by(id: params[:id])
        # listing = Listing.find_by(id: @booking.listing_id)
        # @host = User.find_by(id: listing.host_id)

        render :show
    end

    def index
        @bookings = Booking.all
        render :index
    end

    def create
        @booking = Booking.create(booking_params)
        if @booking.save 
            render :show
        end
    end

    def destroy
        @booking = Booking.find_by(id: params[:id])
        @booking.destroy
    end

    private 

    def booking_params 
        params.require(:booking).permit(:start_date, :end_date, :guest_id, :listing_id, :num_guests, :price)
    end
end