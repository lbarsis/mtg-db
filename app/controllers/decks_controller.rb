class DecksController < ApplicationController
  def create
    deck = @current_user.decks.create!(deck_name: "#{@current_user.decks.length + 1}")
  end

  private

  def deck_params
    params.permit(:deck_name, :description)
  end
end
