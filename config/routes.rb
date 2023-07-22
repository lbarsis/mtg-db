Rails.application.routes.draw do
  resources :users
  resources :wishlist_cards
  resources :deck_cards
  resources :wishlists
  resources :collection_cards
  resources :decks
  resources :cards

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'users#show'

  
  post '/add_card_to_collection', to: 'cards#add_card_to_collection'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
