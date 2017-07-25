class Api::EventEnrollmentsController < ApplicationController

  def create
    @event_enrollment= EventEnrollment.new(event_enrollment_params)
    @event_enrollment.user_id = current_user.id

    if @event_enrollment.save
      render :show
    else
      render(
      json: ["Missing required fields"],
      status: 808
      )
    end
  end





  private

  def event_enrollment_params
    params.require(:event).permit(:group_id, :user_id)
  end

end




end
