class CreateUsersGames < ActiveRecord::Migration[5.1]
  def change
    create_table :usersgames do |t|
      t.integer :user_id
      t.integer :game_id
    end
  end
end
