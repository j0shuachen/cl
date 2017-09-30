class Api::GroupsController < ApplicationController



  def index
    @groups = Group.all
  end

  def create
    @group = Group.new(group_params)
    # if @group.user_id
      @group.user_id = current_user.id
      if @group.save
        @creator = @group.created_at.strftime('%b %Y')
        @numembers = @group.members.length
        @user = User.find(current_user.id)
        s = @user.name
        t = @group.name
        p s
        p t
        GroupNews.create!(group_id: @group.id, news: s + ' created the group '+ t, user_id: current_user.id, oid: @group.id, typo: 'g')
        GroupEnrollment.create!(group_id: @group.id, user_id: @user.id)
        v = @group.id
        p 'yooolo'
        p v
        # @groups = Group.all
        @group
        # @group
        # render :index
        # # render api_group_url(v)
        # render `api/groups/#{@group.id}`
      # render :index
      # render :show
      render @group
    else
      render(
      json: ["Missing required fields"],
      status: 808
      )
    end
  end

  def show
    @group = Group.find(params[:id])
    @creator = @group.created_at.strftime('%b %Y')
    p 'yolllllooooooooooo'
    p @group.members
    @numembers = @group.members.length
    @members = @group.members

    if @members.length <= 9
      @randos = @members.shuffle
    elsif @members.length > 9
      @randos = @members.shuffle.take(8)
    end
    p 'members!!'
    p @members
    p 'lengthy!!'
    p @numembers
    @enrollments = @group.group_enrollments
    if current_user
      @user = User.find(current_user.id)
    end
    p @creator
    @eventboth = []
    both = @group.events.where(start_time: 'tbd', end_time: 'tbd')
    both.each do |s|
      @eventboth << s
    end
    @eventboth.reverse!
    @eventeither = []
    either = @group.events.where('start_time = ? and end_time != ?', 'tbd', 'tbd').or(@group.events.where('start_time != ? and end_time = ?', 'tbd', 'tbd'))
    if either.length > 0
      either.each do |s|
        if s.start_time == 'tbd'
          s[:timer] = DateTime.parse(s.end_time)
          @eventeither << s
        else
          s[:timer] = DateTime.parse(s.start_time)
          @eventeither << s
        end
      end
      @eventeither.sort_by! do |t|
        t[:timer]
      end.reverse!
    end
    @pastevents = @group.events.where('start_time < ? or end_time < ?', DateTime.now, DateTime.now).order('end_time DESC')
    # @eventstart = []
#     starter = @group.events.where('start_time = ? and end_time != ?', 'tbd', 'tbd')
#     if starter.length > 0
#     starter.each do |s|
#       @eventstart << s
#     end
#     @eventstart.sort_by! do |s|
#       (DateTime.parse(s.end_time))
#     end.reverse!
#   end
#
#     @eventend = []
#   ender = @group.events.where('end_time = ? and start_time != ?', 'tbd', 'tbd')
#   if ender.length > 0
#   ender.each do |s|
#     @eventend << s
#   end
#   @eventend.sort_by! do |s|
#     (DateTime.parse(s.start_time))
#   end.reverse!
# end
    # @evented = []
    # k = @group.events.where(start_time: 'tbd').or(@group.events.where(end_time: 'tbd'))
    # if k.length > 0
    #   k.each do |s|
    #     @evented << s
    #   end
    # end
    @upcomingevents = @group.events.where('start_time > ? and end_time > ?',DateTime.now, DateTime.now ).order('start_time ASC')
    @eventd=[]
    o=  @group.events.where.not(start_time: 'tbd', end_time: 'tbd')
    if o.length > 0
      o.each do |s|
        @eventd << s
      end
    end
    @eventd.sort_by! do |el|
      el.start_time
    end
    @eventd.reverse!

    @events = @group.events.reverse
    p 'youyo'
    p @group.news
    @groo = @group.news.sort_by do |opo|
      opo.id
    end
    @groo = @groo.reverse

    # render api_group_url(:id)

    render :show
  end

  def update
    @group =Group.find(params[:group][:id])
    if @group.update(group_params)
      @creator = @group.created_at.strftime('%b %Y')
      @numembers = @group.members.length
      @user = User.find(current_user.id)
      @members = @group.members



      if @members.length <= 9
        @randos = @members.shuffle
      elsif @members.length > 9
        @randos = @members.shuffle.take(8)
      end
      p 'members!!'
      p @members
      p 'lengthy!!'
      p @numembers
      @enrollments = @group.group_enrollments
      if current_user
        @user = User.find(current_user.id)
      end
      p @creator
      @eventboth = []
      both = @group.events.where(start_time: 'tbd', end_time: 'tbd')
      both.each do |s|
        @eventboth << s
      end
      @eventboth.reverse!
      @eventeither = []
      either = @group.events.where('start_time = ? and end_time != ?', 'tbd', 'tbd').or(@group.events.where('start_time != ? and end_time = ?', 'tbd', 'tbd'))
      if either.length > 0
        either.each do |s|
          if s.start_time == 'tbd'
            s[:timer] = DateTime.parse(s.end_time)
            @eventeither << s
          else
            s[:timer] = DateTime.parse(s.start_time)
            @eventeither << s
          end
        end
        @eventeither.sort_by! do |t|
          t[:timer]
        end.reverse!
      end
      @pastevents = @group.events.where('start_time < ? or end_time < ?', DateTime.now, DateTime.now).order('end_time DESC')


      @upcomingevents = @group.events.where('start_time > ? and end_time > ?',DateTime.now, DateTime.now ).order('start_time ASC')
      @eventd=[]
      o=  @group.events.where.not(start_time: 'tbd', end_time: 'tbd')
      if o.length > 0
        o.each do |s|
          @eventd << s
        end
      end
      @eventd.sort_by! do |el|
        el.start_time
      end
      @eventd.reverse!

      @events = @group.events.reverse
      p 'youyo'
      p @group.news
      @groo = @group.news.sort_by do |opo|
        opo.id
      end
      @groo = @groo.reverse
      render :show
    else
      render(
      json:["Invalid params"],
      status: 401
      )
    end
  end

    private

    def group_params
      params.require(:group).permit(:user_id, :name, :info, :location, :image_url, :color)
    end


end
