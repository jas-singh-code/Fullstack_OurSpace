# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :string
#  author_id  :integer
#  post_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :author_id, :body, :post_id, presence: true

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post

    has_many :likes, as: :likeable

    # has_one :author_profile_picture,
    # through: :author,
    # source: :profile_picture

    # has_many :likes,
    # as: :likeable,
    # dependant: :destroy
end
