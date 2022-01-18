class EpisodesController < ApplicationController

    def index
        episodes = Episode.all
        render json: episodes, status: :ok
    end

end
