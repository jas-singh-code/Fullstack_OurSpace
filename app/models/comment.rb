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
end
