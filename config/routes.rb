Rails.application.routes.draw do

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :places, except: [:new, :edit]
  resources :regions, only: [:index, :create]
  resources :activities, only: [:index, :create]
  
end
