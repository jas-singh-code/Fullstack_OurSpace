Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :update, :show] 
      # resource :posts, only: [:create]
    # end
    resource :session, only: [:create, :destroy]
    resources :friendships, only: [:create, :destroy, :index]
    resources :friend_requests, only: [:create, :destroy, :index]
    resources :likes, only: [:create, :destroy, :index]
    resources :posts, only: [:create, :index,  :destroy]
    resources :comments, only: [:create, :update, :destroy, :index]
  end
  root to: 'static_pages#root'
end
