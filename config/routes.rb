Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {formant: :json} do
    resources :users, only: [:index, :destroy, :update] do 
      resource :posts, only: [:create]
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :index,  :destroy]
  end
end
