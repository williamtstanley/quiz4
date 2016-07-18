class Api::V1::CompaniesController < Api::BaseController



  def index
    @companies = Company.order(created_at: :desc) #.page(params[:page]).per(params[:per] || DEFAULT_PER_PAGE
    
    companies_json = ActiveModelSerializers::SerializableResource.new(@companies)
    render json: {companies: companies_json}
  end
  

  def show
    company = Company.find(params[:id])
    company_json = ActiveModelSerializers::SerializableResource.new(company)
    render json: {company: company_json}
  end

end
