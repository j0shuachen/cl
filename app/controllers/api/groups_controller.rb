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
        GroupNews.create!(group_id: @group.id, news: s + ' created the group '+ t, user_id: current_user.id)
        GroupEnrollment.create!(group_id: @group.id, user_id: @user.id)
        @group

      render :show
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
    @numembers = @group.members.length
    if current_user
      @user = User.find(current_user.id)
    end
    p @creator
    # render api_group_url(:id)

    render :show
  end

  def update
    @group =Group.find(params[:group][:id])
    if @group.update(group_params)
      @creator = @group.created_at.strftime('%b %Y')
      @numembers = @group.members.length
      @user = User.find(current_user.id)


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
      params.require(:group).permit(:user_id, :name, :info, :location, :image_url)
    end


end
