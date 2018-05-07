class Api::V1::GamesController < ApplicationController
  before_action :set_game, only: [:show,:update,:destroy]

  def index
    games = Game.all
    render json: games, status: 200
  end

  def create
    game = Game.create(game_params)
    render json: game, status: 201
  end

  def update
    @game.update(game_params)
    render json: @game, status: 200
  end

  def destroy
    gameId = @game.id
    @game.destroy
    render json: {message:"Zap! game deleted", gameId:gameId}
  end

  def show
    render json: @game, status: 200
  end

  private
  def game_params
    params.permit(:name)
  end

  def set_game
    @game = Game.find(params[:id])
  end
end
