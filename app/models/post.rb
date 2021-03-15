# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  title      :string
#  message    :string
#  poster_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    validates :title, presence:true

    belongs_to :user,
    foreign_key: :poster_id,
    class_name: :User

end
