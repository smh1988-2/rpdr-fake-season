class Season < ApplicationRecord
    belongs_to :episode
    belongs_to :queen
end
