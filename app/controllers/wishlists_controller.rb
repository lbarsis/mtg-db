class WishlistsController < ApplicationController
  def index
    wishlists = @current_user.wishlists
    render json: wishlists, status: :ok
  end  
  
  def show
    wishlist = @current_user.wishlists.find(params[:id])
    render json: wishlist, status: :ok
  end

  def create
    wishlist = @current_user.wishlists.create!(wishlist_name: "New Wishlist #{@current_user.wishlists.length + 1}")
    render json: wishlist, status: :ok
  end
  
  def update
    wishlist = @current_user.wishlists.find(params[:id])
    wishlist.update!(wishlist_params)
    render json: wishlist, status: :ok
  end

  private

  def wishlist_params
    params.permit(:id, :wishlist_name, :description)
  end
end
