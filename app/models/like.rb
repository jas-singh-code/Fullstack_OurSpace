# == Schema Information
#
# Table name: likes
#
#  id           :bigint           not null, primary key
#  likable_type :string
#  likable_id   :bigint
#
class Like < ApplicationRecord
    validates :likable_type, inclusion: { in: ['Post', 'Comment'] }
    belongs_to :likable, polymorphic: true
end
