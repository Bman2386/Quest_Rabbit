export const getQuests = () => (
    $.ajax({
        url:`/api/quests`
    })
);

export const getQuest = questId => (
    $.ajax({
        url:`api/quests/${questId}`
    })
)

export const updateQuest = quest => (
    $.ajax({
        url: `/api/quests/${quest.id}`,
        method: `PATCH`,
        data: {quest}
    })
)

export const createQuest = quest => (
    $.ajax({
        url: `/api/quests`,
        method: `POST`,
        data: { quest }
    })
)