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
      json: ["Invalid params"],
      status: 401
      )
    end
  end

  def destroy
    @group_enrollment = GroupEnrollment.where(user_id: user_params[:user_id], group_id: user_params[:group_id])
    # if @group_enrollment.destroy

    if @group_enrollment
      # v = @group_enrollment
      @group_enrollment.each do |x|
        x.destroy
      end
        # if x.destroy
        #   render 'api/groups/groupId'
        # end
      # render :show
      # render :show
      # render 'api'

    else
      render(
      json: ["error"],
      status: 909
      )
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :name, :location, :email, :user_id, :group_id)
  end
end
