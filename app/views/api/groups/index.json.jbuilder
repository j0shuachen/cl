@groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :name, :image_url
  end
end
