Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {formant: :json} do
    resources :users, only: [:index, :show, :create, :destroy, :update]
    resource :session, only: [:new, :create, :destroy]
    resources :posts, only: [:create, :index,  :destroy]
  end
end
