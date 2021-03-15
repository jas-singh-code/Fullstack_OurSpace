Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :show, :new, :create, :destroy, :edit, :update]
  resource :session, only: [:new, :create, :destroy]
end
