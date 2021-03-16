# == Schema Information
#
# Table name: likes
#
#  id           :bigint           not null, primary key
#  likable_type :string
#  likable_id   :bigint
#
class Like < ApplicationRecord
    validates :likeable_type, inclusion: { in: ['Post', 'Comment'] }
    belongs_to :likeable, polymorphic: true
end
