require 'test_helper'

class GlossaryControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
