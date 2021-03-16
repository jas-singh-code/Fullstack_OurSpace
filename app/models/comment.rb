# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  author_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  post_id    :integer
#  body       :string
#  likes      :text             default([]), is an Array  make sure to delete this column from your db
#
class Comment < ApplicationRecord
    belongs_to :commenter,
    class_name: :User,
    foreign_key: :author_id

    belongs_to :post,
    class_name: :Post,
    foreign_key: :post_id

    # has_many :likes, as: :likeable we dont need this anymore because w ehave a likes tables for this
end
