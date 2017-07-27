class Api::GroupsController < ApplicationController



  def index
    @groups = Group.all
  end

  def create
    @group = Group.new(group_params)
    @group.user_id = current_user.id
    if @group.save
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
    # render api_group_url(:id)

    render :show
  end

  def update
    @group =Group.find(params[:group][:id])
    if @group.update(group_params)
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
      params.require(:group).permit(:user_id, :name, :info, :location)
    end


end
