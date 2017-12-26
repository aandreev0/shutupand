json.extract! checkin, :id, :line, :created_at, :updated_at
json.url checkin_url(checkin, format: :json)