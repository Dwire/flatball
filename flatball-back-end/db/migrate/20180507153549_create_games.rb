class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.string :location
      t.integer :home_score
      t.integer :away_score
    end
  end
end
