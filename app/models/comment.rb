# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  commenter_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  post_id      :integer
#  body         :string
#
class Comment < ApplicationRecord
    belongs_to :commenter,
    class_name: :User,
    foreign_key: :commenter_id
end
