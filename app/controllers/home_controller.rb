class HomeController < ApplicationController
  def index
  end

  def watcher
    render :text => "yes"
  end
end
