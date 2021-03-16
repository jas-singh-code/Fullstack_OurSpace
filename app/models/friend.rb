# == Schema Information
#
# Table name: friends
#
#  id          :bigint           not null, primary key
#  sender_id   :integer
#  receiver_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  pending     :boolean
#
class Friend < ApplicationRecord
    belongs_to :requested,
    class_name: :User,
    foreign_key: :sender_id

    belongs_to :received,
    class_name: :User,
    foreign_key: :receiver_id

end
