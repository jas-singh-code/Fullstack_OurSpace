# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  likeable_type :string           not null
#  likeable_id   :bigint           not null
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Like < ApplicationRecord
    validates :likeable_id, :likeable_type, :user_id, presence:true 
    validates :user_id, uniqueness: {scope: [:likeable_id, :likeable_type]}
    
    belongs_to :likeable, polymorphic: true

    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id
end
