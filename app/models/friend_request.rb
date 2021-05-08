# == Schema Information
#
# Table name: friend_requests
#
#  id           :bigint           not null, primary key
#  requester_id :integer          not null
#  receiver_id  :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class FriendRequest < ApplicationRecord
    validates :requester_id, :receiver_id, presence:true
    validates :receiver_id, uniqueness: {scope: :requester_id,
    message: "You've already sent a request to this user."}

    belongs_to :requester,
        class_name: :User 
    
    belongs_to :receiver,
        class_name: :User
end
