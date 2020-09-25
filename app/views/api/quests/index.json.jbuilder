json.quests do 
    @quests.each do |quest|
        json.set! quest.id do 
            json.partial! "api/quests/quest", quest: quest
        end
    end
end

