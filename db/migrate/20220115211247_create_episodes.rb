class CreateEpisodes < ActiveRecord::Migration[7.0]
  def change
    create_table :episodes do |t|
      t.string :winner
      t.string :loser
      t.string :challenge
      t.integer :queen_1
      t.integer :queen_2
      t.integer :queen_3
      t.integer :queen_4
      t.integer :queen_5

      t.timestamps
    end
  end
end


# 1 ROAST 1 2 3 4 5 6 7 8 9 10
# 2 RUSICAL 1 2 3 4 5 6 7 8 9
# 3 SNATCH 1 2 3 4 5 6 7 8 