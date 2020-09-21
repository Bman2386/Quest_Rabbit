class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :user_name, null: false
      t.string :session_token
      t.string :password_digest
      t.boolean :adventurer
      t.timestamps
    end
    add_index :users, :user_name
    add_index :users, :session_token
  end
end
