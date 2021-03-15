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
require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
