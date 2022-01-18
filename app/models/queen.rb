class Queen < ApplicationRecord
    has_many :episodes
    validates :name, :image, presence: true, uniqueness: true
end
