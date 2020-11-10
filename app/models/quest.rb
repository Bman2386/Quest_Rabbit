class Quest < ApplicationRecord
    validates :quest_name, :category_id, :details, :creator_id, presence: true
    # validates :adventurer_id, :start_time, allow_nil: true
    
    belongs_to :user,
        foreign_key: :creator_id

    belongs_to :category
end
