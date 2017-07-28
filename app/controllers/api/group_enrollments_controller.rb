class Api::GroupEnrollmentsController < ApplicationController

  def index
    # @group_enrollments = GroupEnrollment.all

    @group_enrollments = GroupEnrollment.where(group_id: group_enrollment_params[:group_id])

    @users = []
    @group_enrollments.each do |enrollment|
      @users.push(User.find(enrollment.user_id))
    end


    render 'api/group_enrollments/index'
  end

  def show
    @group_enrollments = GroupEnrollment.where(group_id: group_enrollment_params[:group_id])
    @group_enrollments.each do |enrollment|
      return enrollment if enrollment.user_id ==  group_enrollment_params[:user_id]
    end
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
