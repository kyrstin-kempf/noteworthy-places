class User < ApplicationRecord
    has_many :places
    has_many :regions, through :places
end
