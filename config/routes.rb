Rails.application.routes.draw do

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session
    resources :groups
    resources :events
    # resources :groups
    resources :event_enrollments
    resources :group_enrollments
    resources :group_news
    resources :sponsors
    resources :pages
    # resources :events
    # resources :event_enrollments
  end

end
