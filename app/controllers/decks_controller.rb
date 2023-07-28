class DecksController < ApplicationController
  def index
    decks = @current_user.decks
    render json: decks, status: :ok
  end

  def create
    deck = @current_user.decks.create!(deck_name: "New Deck #{@current_user.decks.length + 1}")
    render json: deck, status: :ok
  end

  private

  def deck_params
    params.permit(:deck_name, :description)
  end
end
