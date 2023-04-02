class Region < ApplicationRecord
    has_many :places
    has_many :activities, through: :places
end
