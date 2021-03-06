class Api::UsersController < ApplicationController
  PICS = [
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic19_d9sdwt.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic18_skpd06.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic17_fmxia5.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic16_ynk2vd.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic15_gor5uo.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic9_iumnqj.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic8_vzlgfc.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic7_xwj780.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic6_atszgv.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic6_ivry6z.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic14_kwe5vt.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic13_cexzpr.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic12_cymiu8.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic11_bswwjc.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic10_vcbhqh.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic5_fmwzal.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic4_nobsac.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic3_wyfdnd.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic2_a25vgi.jpg',
    'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic1_pn35e9.jpg'
  ]
  def create
    @user = User.new(user_params)
    @user.image_url = PICS[rand(20)]

    if @user.save
      p @user.image_url
      sign_in(@user)
      render :show
    else
      render(
        json: ["Invalid username or password"],
        status: 401
      )
    end
  end

  def show
    @user = User.find(params[:id])
    # @eventswent = EventEnrollment.joins('INNER JOIN events ON events.id = event_enrollments.event_id').where('event_enrollments.user_id = ?', @user.id)
    # @eventswent = Event.joins('INNER JOIN event_enrollments ON event_enrollments.event_id = events.id').where('events.user_id = ?', @user.id)
    @eventrsvps = EventEnrollment.where('user_id = ?', @user.id )
    @epoc = []
    @eventswent =[]
    @eventrsvps.each do |e|
      @epoc.push(Event.where('id =?', e.event_id))
    end
    @epoc.flatten!
      @epoc.each do |ex|
        if ex['start_time'] != 'tbd' && ex['end_time'] != 'tbd'
          if DateTime.parse(ex['start_time']) < DateTime.now || DateTime.parse(ex['end_time']) < DateTime.now
            @eventswent.push(ex)
          end
        end
      end
    # p 'checking'
    # p @eventswent
    # @eventsdos = GroupEnrollment.joins('INNER JOIN groups ON groups.id = group_enrollments.group_id').where('group_enrollments.user_id =?', @user.id)
    @eventsdos = Group.joins('INNER JOIN group_enrollments ON group_enrollments.group_id = groups.id').where('group_enrollments.user_id = ?', @user.id)
    # p 'doneo'
    # p @eventsdos

    render `api/users/#{@user.id}`
  end

  def update
    p 'params'
    p params
      @user = User.find(params[:user][:id])
      p @user
      # @user = User.find(user_params[:id])
      if @user.update(user_params)
        p @user.id
        # render `/api/users/#{@user.id}`
        render :show
      else
        render(
        json: ["Invalid params"],
        status: 401
        )
      end

  end

  def destroy
    @group_enrollment = GroupEnrollment.where(user_id: user_params[:user_id], group_id: user_params[:group_id])
    # if @group_enrollment.destroy

    if @group_enrollment
      # v = @group_enrollment
      @group_enrollment.each do |x|
        x.destroy
      end
        # if x.destroy
        #   render 'api/groups/groupId'
        # end
      # render :show
      # render :show
      # render 'api'

    else
      render(
      json: ["error"],
      status: 909
      )
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :name, :location, :email, :id, :group_id)
  end
end
