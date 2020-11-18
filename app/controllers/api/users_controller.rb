
class Api::UsersController < ApplicationController


    def index
      users = User.all
      @adventurers = users.where(adventurer: true)
      render :index
   end

    def create
      # debugger
        @user = User.new(user_params)
        if @user.save
          login!(@user)
          render :show
        else
          render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = User.find(params[:id])
    end

    def update
        @user =  User.find(params[:id])
        if @user && @user.update_attributes(user_params)
          render :show
        elsif !@user
          render json: ['Could not locate user'], status: 400
        else
          render json: @user.errors.full_messages, status: 401
        end
    end

    def destroy
        @user = User.find(params[:id])
        if @user
          @user.destroy
          redirect_to new_session_url
        else
          render ['Could not find user']
        end
      end

    private
    def user_params
        params.require(:user).permit(:username, :password, :adventurer)
    end
end