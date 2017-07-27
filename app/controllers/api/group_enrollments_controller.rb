class Api::GroupEnrollmentsController < ApplicationController

  def index
    @groupenrollments = GroupEnrollment.all
  end

  def create
    @group_enrollment= GroupEnrollment.new(group_enrollment_params)
    @group_enrollment.user_id = current_user.id

    if @group_enrollment.save
      render :show
    else
      render(
      json: ["Missing required fields"],
      status: 808
      )
    end
  end

  def destroy
    @group_enrollment = GroupEnrollment.find(params[:user_id, :group_id])
    if @group_enrollment.destroy
      render :show
    else
      render(
      json: ["error"],
      status: 909
      )
    end
  end





  private

  def group_enrollment_params
    params.require(:group_enrollment).permit(:group_id, :user_id)
  end

end
