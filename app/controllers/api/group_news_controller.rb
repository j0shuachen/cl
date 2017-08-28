class Api::GroupNewsController < ApplicationController
  def index
    # @group_enrollments = GroupEnrollment.all

    @group_news = GroupNews.where(group_id: group_news_params[:group_id])




    render 'api/group_news/index'
  end

  # def show
  #   @group_new = GroupNews.where(group_id: group_news_params[:group_id])
  #   # @group_enrollments.each do |enrollment|
  #   #   return enrollment if enrollment.user_id ==  group_enrollment_params[:user_id]
  #   # end
  #   render :index
  # end

  def create
    @group_new = GroupNews.new(group_news_params)
    @group = Group.find(group_news_params[:group_id])
    # @user = User.find(group_enrollment_params[:user_id])
    @group_new.user_id = current_user.id
    if @group_new.save
      @group_news = GroupNews.where(group_id: group_news_params[:group_id])

      render :index
    else
      render(
      json: ["Missing required fields"],
      status: 808
      )
    end
  end

  # def destroy
  #   # @group_enrollment = GroupEnrollment.find_by(user_id: group_enrollment_params[:user_id], group_id: group_enrollment_params[:group_id])
  #   # @group_enrollment = GroupEnrollment.where(user_id: group_enrollment_params[:user_id], group_id: group_enrollment_params[:group_id])
  #
  #   @group_enrollment = GroupEnrollment.find_by(user_id: group_enrollment_params[:user_id])
  #   # @group_enrollment = GroupEnrollment.find(group_enrollment_params[:id])
  #   if @group_enrollment
  #   @group_enrollment.destroy
  #   @group_enrollments = GroupEnrollment.where(group_id: group_enrollment_params[:group_id])
  #   # @group = Group.where(group_id: group_enrollment_params[:group_id])
  #   @group = Group.find(group_enrollment_params[:group_id])
  #   @users = []
  #   @group_enrollments.each do |enrollment|
  #     @users.push(User.find(enrollment.user_id))
  #   end
  #   render :index
  #   else
  #     render(
  #     json: ["error"],
  #     status: 909
  #     )
  #   end
  # end





  private

  def group_news_params
    params.require(:group_news).permit(:group_id, :news, :user_id)
  end

end
