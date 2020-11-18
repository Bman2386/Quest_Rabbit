Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:index, :create, :show, :update, :destoy]
    resources :categories, only: [:show, :index]
    resources :quests, only: [:index, :new, :create, :show, :update]
    resource :session, only: [:create, :destroy]
  end
  root to: 'root#root'
end
