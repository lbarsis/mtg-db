class CardsController < ApplicationController

  def add_card_to_collection
    card = Card.find_by(card_data: params[:card_data])

    # if card does not exist, create it in the db
    unless card
      card = Card.create(card_params)
      # render json: {message: "card does not exists"}
    end

    collection_card = @current_user.collection_cards.find_by(card_id: card.id)

    if collection_card
      collection_card.total_quantity = collection_card.total_quantity + 1
      collection_card.available_quantity = collection_card.available_quantity + 1  
      collection_card.save 
    else
      collection_card = CollectionCard.create!(user: @current_user, card: card, total_quantity: 1, available_quantity: 1)
    end

    render json: collection_card, status: :ok

  end

  private

  def card_params
    params.permit(card_data: {})
  end
end
