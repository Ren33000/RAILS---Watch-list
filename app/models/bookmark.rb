class Bookmark < ApplicationRecord
  belongs_to :movie
  belongs_to :list

  validates :list_id, presence: true, uniqueness: { scope: :movie_id }
  validates :comment, presence: true, length: { minimum: 6 }
end
