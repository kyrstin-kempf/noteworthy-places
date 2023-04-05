Rails.application.routes.draw do
  
  # resources :users, only: [:create, :show]
  # resources :sessions, only: [:create, :destroy]

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  delete '/users/:id', to: 'users#destroy'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # resources :places, except: [:new, :edit]

  get '/places', to: 'places#index'
  post '/places', to: 'places#create'

  # resources :regions, except: [:new, :edit]

  get '/regions', to: 'regions#index'

  # resources :activities, only: [:create]

  get '/activities', to: 'activities#index'
  
end
