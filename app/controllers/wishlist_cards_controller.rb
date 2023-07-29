class WishlistCardsController < ApplicationController
  def create
    wishlist = @current_user.wishlists.find(params[:wishlist_id])
    card = Card.find_by(card_data: params[:card])

    if card.nil?
      card = Card.create(card_data: params[:card])
    end

    wishlist_card = wishlist.wishlist_cards.find_by(card_id: card.id)
    if wishlist_card
      wishlist_card.quantity += 1
      wishlist_card.save!
    else
      wishlist_card = wishlist.wishlist_cards.create!(deck_cards_params.merge(card_id: card.id, quantity: 1))
    end

    if wishlist_card.persisted?
      render json: wishlist_card, status: :ok
    else
      render json: wishlist_card.errors, status: :unprocessable_entity
    end
  end

  private

  def deck_cards_params
    params.permit(:card, :wishlist_id)
  end
  
end
