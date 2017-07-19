class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render :show
    else
      render(
        json: ["Invalid username or password"],
        status: 401
      )
    end
  end

  def show
    @user = User.find(params[:id])
    render "api/users"
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes
      render "api/users"
    else
      render(
      json:["Invalid params"],
      status: 401
      )
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :name, :location, :email)
  end
end
