class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.integer :home_score
      t.integer :away_score
      t.integer :out_count
    end
  end
end
