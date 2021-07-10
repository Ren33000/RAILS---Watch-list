class ListsController < ApplicationController
    def index
        @lists = List.all
    end
#go to view, restaurants folder, create file index.html.erb
#when the view is finished, gst, add, commit -m "create index"
#when create the next def : raise to debbug

  def show
		#@restaurant = Restaurant.find(params[:id])
  end
#go to view, gst, add, commit



  def new 
    @restaurant = Restaurant.new
  end
		#form to send = authenticity token (need to add hidden fiel tag in the form.html BUT automatic in Rails


  def create
    @restaurant = Restaurant.new(restaurant_params)
    @restaurant.save
    redirect_to restaurant_path(@restaurant) #using the strong params
	  #don't need to recreate and update the form, use form_for in the html
  end
end
