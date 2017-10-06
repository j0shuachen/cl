class Api::SponsorsController < ApplicationController


  def index

      @sponsors = Sponsor.all
  end

  def create
    @sponsor = Sponsor.new(sponsor_params)

    if @sponsor.save

      render :show
    else
      render(
      json: ["Missing required fields"],
      status: 808
      )
    end
  end

  def show
    @sponsor = Sponsor.find(params[:id])
    render :show
  end

  def update
    @sponsor = Sponsor.find(params[:sponsor][:id])
    if @sponsor.update(sponsor_params)
      render :show
    else
      render(
      json:["Invalid params"],
      status: 401
      )
    end
  end

  private

  def sponsor_params
    params.require(:sponsor).permit(:group_id, :image_url, :name, :contribution)
  end
end
