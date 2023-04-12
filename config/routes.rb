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
  get '/places/:id', to: 'places#show'
  delete '/places/:id', to: 'places#destroy'

  # resources :regions, except: [:new, :edit]

  get '/regions', to: 'regions#index'
  post '/regions', to: 'regions#create'
  delete 'regions/:id', to: 'regions#destroy'
  patch 'regions/:id', to: 'regions#update'

  # resources :activities, only: [:create]

  get '/activities', to: 'activities#index'
  post '/activities', to: 'activities#create'
  
end
