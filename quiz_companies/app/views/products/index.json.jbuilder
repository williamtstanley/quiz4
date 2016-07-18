json.array!(@products) do |product|
  json.extract! product, :id, :title, :company_id
  json.url product_url(product, format: :json)
end
