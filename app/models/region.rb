class Region < ApplicationRecord
    has_many :places

    validates :city, presence: true
    validates :state, presence: true
end
