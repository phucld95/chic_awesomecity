class Admin
  class DishesController < ApplicationController
    before_action :logged_in_admin
    before_action :find_dish, except: [:index, :new]
    before_action :load_category, only: [:new, :edit]

    load_and_authorize_resource

    def index
      @dishes_support = Supports::AdminDish.new dish: Dish.all, param: params
    end

    def show; end

    def new
      @dish = Dish.new
    end

    def create
      @dish = Dish.new dish_params
      if @dish.save
        flash[:success] = t "flash.dish.create_success"
        redirect_to admin_dish_path @dish
      else
        render :new
      end
    end

    def edit; end

    def update
      if @dish.update_attributes dish_params
        flash[:success] = t "flash.dish.update_success"
        redirect_to admin_dish_path @dish
      else
        render :edit
      end
    end

    def destroy
      if @dish.destroy
        flash[:success] = t "flash.dish.destroy"
      else
        flash[:danger] = t "flash.dish.destroy_fail"
      end
      respond_to do |format|
        format.html{redirect_to :back}
        format.json{head :no_content}
      end
    end

    private
    def dish_params
      params.require(:dish).permit :name, :price, :description, :image,
        :is_available, category_ids: []
    end

    def find_dish
      @dish = Dish.find_by id: params[:id]

      return if @dish
      flash[:danger] = t "flash.dish.find_fail"
      redirect_to admin_dishes_path
    end

    def load_category
      @categories = Category.all
    end
  end
end
