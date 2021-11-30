# AetherBnb 

## Live Site
- [Live site](https://aether-bnb.herokuapp.com/)

## Introduction

AetherBnb is a clone of the website Airbnb that implements many of the features available on Airbnb. 
- Search for listings in a city
- Book a stay at a listing
- Leave a review about your experience at that listing
- Or even create your own listing to rent out

<img src='/app/assets/images/gifs/ListingIndex.gif' width='400'/>

## Technologies Used

### Frontend
- React
- Redux
- Javascript
- HTML5
- CSS

### Backend 
- Ruby on Rails
- PostgreSQL

### Additional Technologies
- Webpack
- Git
- AWS

<img src='/app/assets/images/gifs/ListingShow.gif' width='400'/>

## Features
- Users can create an account or log in to an existing account
- Users can search for listings by city
- Users can book a stay at a listing
- Users can leave a review on a listing as well as edit it after having stayed there
- Users can create a listing, edit, or delete their listing

<img src='/app/assets/images/gifs/Bookings.gif' width='400' height='400'/>

## Challenges 
- In order to have the option to search for listings by a city, but also to have the option to just search through all the listings, I decided to add optional data to the backend containing the search params. If the params contained a city, I would fetch all the listings with that city. If the params did not contain a city, I would fetch all the listings.

``` Javascript
def index 
    if !params[:searchParams]     
        @listings = Listing.with_attached_photos.all    
    elsif params[:searchParams][:city]
       @listings = Listing.with_attached_photos.where(city: params[:searchParams][:city])
    end
    render :index
end 
 ```
    
Photos courtesy of <a href="https://unsplash.com/s/photos/homes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
