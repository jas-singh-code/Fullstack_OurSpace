# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  message    :text
#  poster_id  :integer
#  wall_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  post_img   :string
#
class Post < ApplicationRecord
    validates :message, presence: true

    has_one_attached :photo

    has_many :comments,
    :dependent => :destroy

    belongs_to :author,
    foreign_key: :poster_id,
    class_name: :User

    has_many :likes, as: :likeable

    
    # belongs_to :wall,
    # foreign_key: :wall_id,
    # class_name: :User

end
