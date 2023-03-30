Rails.application.routes.draw do
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
  
  resources :users, except: [:new, :edit]
  resources :places, except: [:new, :edit]
  

end
