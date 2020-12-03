class AddDetailsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :avg_rating, :integer
    add_column :users, :total_ratings, :integer
    add_column :users, :elite, :boolean
    add_column :users, :pitch, :string
    add_column :users, :family_crest, :string
    add_column :users, :realm, :string
    add_column :users, :star_sign, :string
  end
end
