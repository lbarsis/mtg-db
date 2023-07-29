class DeckCardsController < ApplicationController
  def create
    deck = @current_user.decks.find(params[:deck_id])
    card = Card.find_by(card_data: params[:card])

    if card.nil?
      card = Card.create(card_data: params[:card])
    end

    deck_card = deck.deck_cards.find_by(card_id: card.id)
    if deck_card
      deck_card.quantity += 1
      deck_card.save!
    else
      deck_card = deck.deck_cards.create!(deck_cards_params.merge(card_id: card.id, quantity: 1))
    end

    if deck_card.persisted?
      add_card_to_collection(card)
      render json: deck_card, status: :ok
    else
      render json: deck_card.errors, status: :unprocessable_entity
    end
  end

  private

  def deck_cards_params
    params.permit(:deck_id)
  end

  def add_card_to_collection(card)
    collection_card = @current_user.collection_cards.find_by(card_id: card.id)

    if collection_card
      collection_card.available_quantity -= 1  
      collection_card.save 
    else
      CollectionCard.create!(user: @current_user, card: card, total_quantity: 1, available_quantity: 0)
    end
  end
end
