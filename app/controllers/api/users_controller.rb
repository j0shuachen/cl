class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user = save
      sign_in(@user)
      render "api/users/show"
    else
      render(
        json: ["invalid username or password"],
        status: 401
      )
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
