# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  last_name       :string
#  first_name      :string
#  birthday        :string
#  gender          :text
#  location        :string
#  occupation      :string
#  email           :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :birthday, presence: true, length: {minimum: 8}
    validates :email, presence: true, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :password_digest, :birthday, :gender, presence: true
    validates :session_token, presence: true, uniqueness: true
    attr_reader :password
  
    # has_many :likes, as: :likeable
  
    has_many :posts,
    class_name: :Post,
    foreign_key: :poster_id
  
    # has_many :comments,
    # class_name: :Comment,
    # foreign_key: :author_id
  
    # has_many :friends, 
    # class_name: :Friend,
    # foreign_key: :sender_id
  
  
    after_initialize :ensure_session_token
    
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end
  
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
  
    def is_password?(password)
        BCrypt::Password.New(password_digest).is_password?(password)
    end
  
    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end
  
    private
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
  
  end
