json.array! @adventurers do |adventurer|
    json.partial! 'api/users/user', adventurer: adventurer
  end
  