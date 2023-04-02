# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

uA = User.create!(email: 'a@gmail.com', first_name: 'A', last_name: 'A', password_digest: 'test')
uB = User.create!(email: 'b@gmail.com', first_name: 'B', last_name: 'B', password_digest: 'test')

rA = Region.create!(city: 'Boulder', state: 'Colorado')
rB = Region.create!(city: 'Washington', state: 'District of Columbia')
rC = Region.create!(city: 'London', state: 'United Kingdom')

aA = Activity.create!(type: 'Restaurants')
aB = Activity.create!(type: 'Shopping')

pA = Place.create!(name: 'Arabesque', map_url: 'https://goo.gl/maps/zRkfdvTFnTpPfXc47', website_url: 'http://www.arabesqueboulder.com/index.php', notes: 'Amazing Middle Eastern food. Must order a chai and the bak lava!', user_id: uA.id, region_id: rA.id, type_id: aA.id)
pB = Place.create!(name: 'Absolute Noodle', map_url: 'https://goo.gl/maps/nPB8vE1GbXKBgDb46', website_url: 'https://www.absolutenoodlewashington.com/', notes: 'A great local sushi place. Great sushi with make-your-own soup options.', user_id: uA.id, region_id: rB.id, type_id: aA.id)
pC = Place.create!(name: 'Dans le Noir?', map_url: 'https://goo.gl/maps/1QmjXZXEPaofzv3u8', website_url: 'https://london.danslenoir.com/booking-london.html', notes: 'An unforgettable life experience eating in pitch darkness.', user_id: uB.id, region_id: rC.id, type_id: aA.id)
pD = Place.create!(name: 'Absolute Noodle', map_url: 'https://goo.gl/maps/go7BKNdD739CyvE3A', website_url: 'https://www.shopmadeindc.com/', notes: 'Candles, jewlery, games, art, and home goods made by local D.C. artists!', user_id: uB.id, region_id: rB.id, type_id: aB.id)