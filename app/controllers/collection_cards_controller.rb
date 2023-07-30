class CollectionCardsController < ApplicationController
  def index 
    cards = @current_user.collection_cards
    render json: cards, status: :ok
  end
end
