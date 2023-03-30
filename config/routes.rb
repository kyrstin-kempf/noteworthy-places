Rails.application.routes.draw do
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
  
  resources :users, only: [:create, :show]
  resources :places, except: [:new, :edit]
  resources :regions, except: [:new, :edit]
  resources :activities, only: [:create]
  
end
