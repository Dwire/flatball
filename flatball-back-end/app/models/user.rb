class User < ApplicationRecord
  has_many :usersgames
  has_many :games, through: :usersgames
end
