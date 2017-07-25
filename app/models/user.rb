# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  name            :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  location        :string           not null
#  email           :string           not null
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  has_many :group_enrollments,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :GroupEnrollment

    has_many :groups,
    through: :group_enrollments,
    source: :group

    has_many :group_mod,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Group

    has_many :event_enrollments,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :EventEnrollment

    has_many :events,
    through: :event_enrollments,
    source: :event

    has_many :event_org,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Event


  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  # def generate_session_token
  #   SecureRandom.urlsafe_base64(16)
  # end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
