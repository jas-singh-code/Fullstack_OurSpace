# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  session_token   :string
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string
#  last_name       :string
#  friends         :text             default([]), is an Array
#  email           :string
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
