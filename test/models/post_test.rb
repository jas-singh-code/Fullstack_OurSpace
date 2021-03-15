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
#  image_url  :string
#  video_url  :string
#
require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
