class Api::GroupEnrollmentsController < ApplicationController

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





  private

  def group_enrollment_params
    params.require(:group_enrollment).permit(:group_id, :user_id)
  end

end
