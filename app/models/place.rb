class Place < ApplicationRecord
    has_many :activities 

    belongs_to :user 
    belongs_to :region
end
