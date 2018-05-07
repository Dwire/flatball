class Game < ApplicationRecord
  has_many :usersgames
  has_many :users, through: :usersgames
end
