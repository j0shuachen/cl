class Api::EventsController < ApplicationController

  def index

      @events = Event.all
  end

  def create
    @event = Event.new(event_params)
    if event_params['start_time'] != 'tbd'
      @event['start_time'] = DateTime.parse(event_params['start_time'])
    end
    if event_params['end_time'] != 'tbd'
      @event['end_time'] = DateTime.parse(event_params['end_time'])
    end
    @event.user_id = current_user.id
    @user = User.find(@event.user_id)
    s = @user.name
    t = @event.name
    if @event.save
      GroupNews.create!(group_id: @event.group_id, news: s + ' created the event '+ t, user_id: current_user.id, oid: @event.id, typo:'e')

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
    @news = GroupNews.where('typo =? and oid=?','e', @event.group_id)
    # @group = Group.find(@event.group_id)
    render :show
  end

  def update
    @event = Event.find(params[:event][:id])
    if @event.update(event_params)
      render :show
    else
      render(
      json:["Invalid params"],
      status: 401
      )
    end
  end

  private

  def event_params
    params.require(:event).permit(:group_id, :image_url, :user_id, :name, :description, :location, :start_time, :end_time)
  end
end
