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
#
class Post < ApplicationRecord
    validates :message, presence: true

    belongs_to :author,
    foreign_key: :poster_id,
    class_name: :User

end
