class Api::V1::ProductsController < Api::BaseController

  
  def create
    company = Company.find(params[:company_id])
    product = Product.new(product_params)
    product.company = company
    product.save
    render json: {success:true}
  end

  private

  def product_params
    params.require(:product).permit(:body)
  end
end
