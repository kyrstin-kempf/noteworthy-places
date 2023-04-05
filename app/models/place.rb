class Place < ApplicationRecord
    belongs_to :user 
    belongs_to :region
    belongs_to :activity
end
