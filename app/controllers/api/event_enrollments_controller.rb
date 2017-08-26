class Api::EventEnrollmentsController < ApplicationController

  def create
    @event_enrollment= EventEnrollment.new(event_enrollment_params)
    @event_enrollment.user_id = current_user.id

    if @event_enrollment.save
      @users = []
      @event_enrollments = EventEnrollment.where(event_id: event_enrollment_params[:event_id])
      @event_enrollments.each do |enrollment|
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

  def index
    @event_enrollments = EventEnrollment.where(event_id: event_enrollment_params[:event_id])
    @users = []
    @event_enrollments.each do |x|
      @users.push(User.find(x.user_id))
    end
    render :index
  end

  def destroy
    @event_enrollment = EventEnrollment.find_by(user_id: event_enrollment_params[:user_id], event_id: event_enrollment_params[:event_id] )
    @event_enrollment.destroy
    @event = Event.find(event_enrollment_params[:event_id])
    @event_enrollments = EventEnrollment.where(event_id: event_enrollment_params[:event_id])
    @users = []
    @event_enrollments.each do |mem|
      @users.push(User.find(mem.user_id))
    end
    render :index
  end




  private

  def event_enrollment_params
    params.require(:event_enrollment).permit(:group_id, :user_id, :event_id)
  end

end
