Rails.application.routes.draw do
  resources :checkins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'welcome#index'
end
