class WelcomeController < ApplicationController

  def index
    @checkins = Checkin.all
    @checkin = Checkin.new
  end

end
