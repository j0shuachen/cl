class Api::PublicProfilesController < ApplicationController

  def create
    @profile = PublicProfile.new(user_id: current_user, photo: "default.jpg")
  end

  def update
    @profile = PublicProfile.find(params[:id])
    if @profile.update_attributes
      render "/api/public_profiles/:id"
    else
      render(
      json:["Invalid params"],
      status: 401
      )
    end
  end

  private

  def public_profiles_params
    params.require(:public_profiles).permit(:fname, :lname, :age, :bdate, :location, :location, :user_id, :bio, :photo )
  end

end
