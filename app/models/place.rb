class Place < ApplicationRecord
    belongs_to :user 
    belongs_to :region
    belongs_to :activity

    validates :name, presence: true
    validates :notes, presence: true, length: { maximum: 200 }
end
