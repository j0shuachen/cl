class Api::EventsController < ApplicationController

  def index

      @events = Event.all
  end

  def create
    @event = Event.new(event_params)
    @event.user_id = current_user.id
  
    if @event.save
      render :show
    else
      render(
      json: ["Missing required fields"],
      status: 808
      )
    end
  end

  def show
    @event = Event.find(params[:id])
    render :show
  end

  def update
    @event = Event.find(params[:id])

    if @event.update_attributes
      render "api/events/:id"
    else
      render(
      json:["Invalid params"],
      status: 401
      )
    end
  end

  private

  def event_params
    params.require(:event).permit(:group_id, :user_id, :name, :description, :location, :start_time, :end_time)
  end
end