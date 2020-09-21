class User < ApplicationRecord
    validates :user_name, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :adventurer, inclusion: { in: [true, false] }

    attr_reader :password

    after_initialize :ensure_session_token

    def self.find_by_credientials(username, password)
        user = User.find_by( :user_name, username)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end
end
