class QueensController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :queen_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :queen_invalid

    # return a random array of 10 unique queens
    def random
        queens = Queen.limit(10).order("RANDOM()")
        render json: queens, status: :ok
    end
    
    def index
        queens = Queen.limit(10).order("RANDOM()")
        render json: queens, status: :ok
    end

    def update
        queen = find_queen
        queen.update!(queen_params)
        render json: queen, status: :ok
    end

    def show
        queen = find_queen
        render_success(queen)
    end

    def destroy
        queen = find_queen.destroy
        render json: {"success!" => "dead"}, status: :ok
    end

    def create
        queen = Queen.create!(queen_params)
        render_success(queen)
    end



    private

    def render_success(queen)
        render json: queen, status: :ok
    end

    def find_queen
        Queen.find(queen_params[:id])
    end

    def queen_params
        params.permit(:id, :name, :image)
    end

    def queen_invalid
        render json: {"error" => "no uniqness here"}, status: :unprocessable_entity
    end

    def queen_not_found
        render json: {"error" => "queen not found"}, status: :not_found
    end

end
