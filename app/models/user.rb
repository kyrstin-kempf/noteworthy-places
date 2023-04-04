class User < ApplicationRecord
    has_many :places
    has_many :regions, through: :places
    has_many :activities, through: :places

    has_secure_password

    before_save :downcase_email

    validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/ }
    validates :first_name, presence: true
    validates :last_name, presence: true
    
    private 

    def downcase_email
        self.email = email.downcase
    end

end
