class User < ApplicationRecord
    has_many :places
    has_many :regions, through: :places
    has_many :activities, through: :places
end
