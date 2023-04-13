class Activity < ApplicationRecord
    has_many :places

    validates :activity_type, presence: true
end
