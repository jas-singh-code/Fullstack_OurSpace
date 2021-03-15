# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  liker_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  post_id    :integer
#
class Like < ApplicationRecord
    belongs_to :liker,
    foreign_key: :liker_id,
    class_name: :User

    belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post
end
