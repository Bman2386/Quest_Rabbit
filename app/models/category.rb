class Category < ApplicationRecord
    validates :category_name, presence: true, uniqueness: true
    validates :ex_description, presence: true

    has_many :quest

    # belongs_to :user,
    #     foreign_key: :adventurer_id
end
