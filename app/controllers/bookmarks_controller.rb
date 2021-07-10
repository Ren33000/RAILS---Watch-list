class BookmarksController < ApplicationController
    def new 
        @bookmark = Bookmark.new
    end

    def create
         @bookmark = Bookmark.new(bookmark_params)
        if @bookmark.save
            redirect_to bookmark_path(@bookmark)
        else
            render 'new'
        end
    end

    def destroy
        @bookmark.destroy
        redirect_to bookmarks_path
     end
end