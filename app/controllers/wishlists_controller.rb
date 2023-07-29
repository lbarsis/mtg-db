class WishlistsController < ApplicationController
  def index
    wishlists = @current_user.wishlists
    render json: wishlists, status: :ok
  end

  def create
    wishlist = @current_user.wishlists.create!(wishlist_params)
    render json: wishlist, status: :ok
  end
  

  private

  def wishlist_params
    params.permit(:wishlist_name, :description).merge(wishlist_name: "New Wishlist #{@current_user.wishlists.length + 1}")
  end
end
