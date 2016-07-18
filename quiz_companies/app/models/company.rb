class Company < ActiveRecord::Base
  has_many :products, dependent: :destroy
  validates :title, presence: true
end
