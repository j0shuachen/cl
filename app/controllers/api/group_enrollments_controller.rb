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
    @group_enrollment = GroupEnrollment.where(group_id: group_enrollment_params[:group_id], user_id: group_enrollment_params[:user_id])
    # @group_enrollments.each do |enrollment|
    #   return enrollment if enrollment.user_id ==  group_enrollment_params[:user_id]
    # end
    render :show
  end

  def create
    @group_enrollment= GroupEnrollment.new(group_enrollment_params)
    @group_enrollment.user_id = current_user.id
    @group = Group.find(group_enrollment_params[:group_id])
    # @user = User.find(group_enrollment_params[:user_id])

    if @group_enrollment.save
      @group_enrollments = GroupEnrollment.where(group_id: group_enrollment_params[:group_id])
      @users = []
      @group_enrollments.each do |enrollment|
        @users.push(User.find(enrollment.user_id))
      end
      render :index
    else
      render(
      json: ["Missing required fields"],
      status: 808
      )
    end
  end

  def destroy
    # @group_enrollment = GroupEnrollment.find_by(user_id: group_enrollment_params[:user_id], group_id: group_enrollment_params[:group_id])
    # @group_enrollment = GroupEnrollment.where(user_id: group_enrollment_params[:user_id], group_id: group_enrollment_params[:group_id])

    @group_enrollment = GroupEnrollment.find_by(user_id: group_enrollment_params[:user_id])
    # @group_enrollment = GroupEnrollment.find(group_enrollment_params[:id])
    if @group_enrollment
    @group_enrollment.destroy
    @group_enrollments = GroupEnrollment.where(group_id: group_enrollment_params[:group_id])
    # @group = Group.where(group_id: group_enrollment_params[:group_id])
    @group = Group.find(group_enrollment_params[:group_id])
    @users = []
    @group_enrollments.each do |enrollment|
      @users.push(User.find(enrollment.user_id))
    end
    render :index
    # render @group
    # if @group_enrollment.destroy
    # if @group_enrollment
    #   if @group_enrollment.is_a?
    #     @group_enrollment.each do |x|
    #       x.destroy
    #     end
    #   else
    #   # p @group_enrollment
    #     if @group_enrollment.destroy
    #   # end
    #     # if x.destroy
    #     #   render 'api/groups/groupId'
    #     # end
    #     # render :show
    #     render `api/groups/#{group_enrollment_params[:group_id]}`
    #     end
    #   end
      # render :show
      # render 'api'
      # if @group_enrollment
      #   GroupEnrollment.destroy(params[:id])

    else
      render(
      json: ["error"],
      status: 909
      )
    end
  end





  private

  def group_enrollment_params
    params.require(:group_enrollment).permit(:group_id, :user_id, :id)
  end

end
