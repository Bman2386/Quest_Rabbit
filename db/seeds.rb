# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.delete_all
# User.delete_all

Category.create({
    id: 1,
    category_name: 'Fetch',
    ex_description: 'Find and deliver 13 pink frost crystals'
})

Category.create({
    id: 2,
    category_name: 'Craft',
    ex_description: 'Craft an alchemy table'
})

Category.create({
    id: 3,
    category_name: 'Escort',
    ex_description: 'Escort the princess through the forbidden forest'
})

Category.create({
    id: 4,
    category_name: 'Slay',
    ex_description: 'Slay that pesky dragon terrorizing the village'
})

# User.create({})