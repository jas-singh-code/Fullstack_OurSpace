# == Schema Information
#
# Table name: friends
#
#  id                   :bigint           not null, primary key
#  friend_id            :integer
#  assoicated_friend_id :integer
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#
class Friend < ApplicationRecord
    belongs_to :user,
    class_name: :User,
    foreign_key: :friend_id

    has_one :friend,
    class_name: :User,
    foreign_key: :assoicated_friend_id
end
