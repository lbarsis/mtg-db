class DecksController < ApplicationController
  def index
    decks = @current_user.decks
    render json: decks, status: :ok
  end

  def show
    deck = @current_user.decks.find(params[:id])
    render json: deck, status: :ok
  end

  def create
    deck = @current_user.decks.create!(deck_params)
    deck.update!(deck_name:  "New Deck #{@current_user.decks.length + 1}")
    render json: deck, status: :ok
  end

  def update
    deck = @current_user.decks.find(params[:id])
    deck.update!(deck_params)
    render json: deck, status: :ok
  end

  private

  def deck_params
    params.permit(:id, :deck_name, :description)
  end
end
