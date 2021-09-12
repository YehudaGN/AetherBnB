Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy, :show, :update, :index]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:create, :update, :destroy, :index, :show]
  end

  root 'static_pages#root'
end
