require 'test_helper'

class ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get group_enrollments" do
    get api_group_enrollments_url
    assert_response :success
  end

end
