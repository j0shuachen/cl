@group_news.each do |newz|
  json.set! newz.id do
    json.extract! newz, :news
  end
end
