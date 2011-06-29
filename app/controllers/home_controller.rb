class HomeController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json {
        render :json => json
      }
    end
  end
end
