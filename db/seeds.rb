# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)

OP=[
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic19_d9sdwt.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic18_skpd06.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic17_fmxia5.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic16_ynk2vd.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic15_gor5uo.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic9_iumnqj.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic8_vzlgfc.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic7_xwj780.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic6_atszgv.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909476/defaultprofilepic6_ivry6z.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic14_kwe5vt.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic13_cexzpr.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic12_cymiu8.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic11_bswwjc.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic10_vcbhqh.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic5_fmwzal.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic4_nobsac.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic3_wyfdnd.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic2_a25vgi.jpg',
'http://res.cloudinary.com/dxeyfggji/image/upload/v1503909468/defaultprofilepic1_pn35e9.jpg'
]
User.destroy_all
Group.destroy_all
Event.destroy_all
GroupEnrollment.destroy_all

user1 = User.create!(username: "user1", password: "user11", name: "user1", location: "san francisco", email: "user1@gmail.com", image_url: OP[rand(20)])
user2 = User.create!(username: "user2", password: "user21", name: "user2", location: "san francisco", email: "user2@gmail.com", image_url: OP[rand(20)])
user3 = User.create!(username: "user3", password: "user31", name: "user3", location: "san francisco", email: "user3@gmail.com", image_url: OP[rand(20)])
user4 = User.create!(username: "user4", password: "user41", name: "user4", location: "san francisco", email: "user4@gmail.com", image_url: OP[rand(20)])
user5 = User.create!(username: "user5", password: "user51", name: "user5", location: "san francisco", email: "user5@gmail.com", image_url: OP[rand(20)])
user6 = User.create!(username: "user6", password: "user61", name: "user6", location: "san francisco", email: "user6@gmail.com", image_url: OP[rand(20)])
user7 = User.create!(username: "user7", password: "user71", name: "user7", location: "san francisco", email: "user7@gmail.com", image_url: OP[rand(20)])
user8 = User.create!(username: "user8", password: "user81", name: "user8", location: "san francisco", email: "user8@gmail.com", image_url: OP[rand(20)])
user9 = User.create!(username: "user9", password: "user91", name: "user9", location: "san francisco", email: "user9@gmail.com", image_url: OP[rand(20)])
user10 = User.create!(username: "user10", password: "user10", name: "user10", location: "san francisco", email: "user10@gmail.com", image_url: OP[rand(20)])
user11 = User.create!(username: "vegeta", password: "vegeta", name: "vegeta", location: "san jose", email: "vegeta33@hotmail.com", image_url: OP[rand(20)]  )
user12 = User.create!(username: "goku", password: "gokawfwu", name: "goku", location: "san jose", email: "goku99@hotmail.com", image_url: OP[rand(20)]  )
user13 = User.create!(username: "kenny", password: "kennawfawfay", name: "kenny", location: "san jose", email: "slimdunkin@aol.com", image_url: OP[rand(20)]  )
user14 = User.create!(username: "cam", password: "camwafwfa", name: "cam", location: "mountain view", email: "goku99@aol.com" , image_url: OP[rand(20)] )
user15 = User.create!(username: "j0hn", password: "j0hnwfawf", name: "john", location: "sunnyvale", email: "johnjohnjohn@hotmail.com", image_url: OP[rand(20)]  )
user16 = User.create!(username: "slim", password: "slimawfaw", name: "slim", location: "san jose", email: "virginiaslim@gmail.com", image_url: OP[rand(20)]  )
user17 = User.create!(username: "gohan", password: "gohaawfawfawn", name: "gohan", location: "milpitas", email: "goku99@hotmail.com", image_url: OP[rand(20)]  )
user18 = User.create!(username: "kakashi", password: "kakashi", name: "kakashi", location: "milpitas", email: "hiddenleaf9@hotmail.com", image_url: OP[rand(20)]  )
user19 = User.create!(username: "arvind45", password: "arvind", name: "arvind", location: "castro valley", email: "21savage@hotmail.com", image_url: OP[rand(20)]  )
user20 = User.create!(username: "chuckthenorris", password: "norris", name: "norris", location: "richmond", email: "chuckthenorris@hotmail.com", image_url: OP[rand(20)]  )
user21 = User.create!(username: Faker::Internet.unique.user_name , password: Faker::Internet.password , name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user22 = User.create!(username: Faker::Internet.unique.user_name , password: Faker::Internet.password , name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user23 = User.create!(username: Faker::Internet.unique.user_name , password: Faker::Internet.password , name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user24 = User.create!(username: Faker::Internet.unique.user_name , password: Faker::Internet.password , name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user25 = User.create!(username: Faker::Internet.unique.user_name , password: Faker::Internet.password , name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user26 = User.create!(username: Faker::Internet.unique.user_name , password: Faker::Internet.password , name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user27 = User.create!(username: Faker::Internet.unique.user_name , password: Faker::Internet.password , name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user28 = User.create!(username: Faker::Internet.unique.user_name , password: Faker::Internet.password , name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user29 = User.create!(username: Faker::Internet.unique.user_name , password: Faker::Internet.password , name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user30 = User.create!(username: Faker::Internet.unique.user_name , password: Faker::Internet.password , name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user31 = User.create!(username: Faker::Internet.unique.user_name , password: Faker::Internet.password , name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user32 = User.create!(username: Faker::Internet.unique.user_name , password: Faker::Internet.password , name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user33 = User.create!(username: Faker::Internet.unique.user_name , password: Faker::Internet.password , name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user34 = User.create!(username: 'tunaRoll' , password: 'password', name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user35 = User.create!(username: 'sf9ers' , password: 'password', name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user36 = User.create!(username: 'PistolPETE' , password: 'password', name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user37 = User.create!(username: 'FIREBALL' , password: 'password', name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user38 = User.create!(username: 'jmo&COKE' , password: 'password', name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user39 = User.create!(username: 'HEEEEM' , password: 'password', name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user40 = User.create!(username: 'jaeger' , password: 'password', name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user41 = User.create!(username: 'kaiju' , password: 'password', name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user42 = User.create!(username: 'KENJI' , password: 'password', name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user43 = User.create!(username: 'benjiROX' , password: 'password', name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user44 = User.create!(username: 'BOyka' , password: 'password', name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])
user45 = User.create!(username: 'crossfit' , password: 'password', name: Faker::StarWars.character, location: Faker::Address.city, email: Faker::Internet.unique.free_email , image_url: OP[rand(20)])



guest1 = User.create!(username: "guest1", password: "guest11", name: "guest1", location: "castro valley", email: "guest1@gmail.com", image_url: OP[rand(20)])
guest2 = User.create!(username: "guest2", password: "guest21", name: "guest2", location: "castro valley", email: "guest1@gmail.com", image_url: OP[rand(20)])
guest3 = User.create!(username: "guest3", password: "guest31", name: "guest3", location: "castro valley", email: "guest1@gmail.com", image_url: OP[rand(20)])
guest4 = User.create!(username: "guest4", password: "guest41", name: "guest4", location: "castro valley", email: "guest1@gmail.com", image_url: OP[rand(20)])
guest5 = User.create!(username: "guest5", password: "guest51", name: "guest5", location: "castro valley", email: "guest1@gmail.com", image_url: OP[rand(20)])
guest6 = User.create!(username: "guest6", password: "guest61", name: "guest6", location: "castro valley", email: "guest1@gmail.com", image_url: OP[rand(20)])
guest7 = User.create!(username: "guest7", password: "guest71", name: "guest7", location: "castro valley", email: "guest1@gmail.com", image_url: OP[rand(20)])
guest8 = User.create!(username: "guest8", password: "guest81", name: "guest8", location: "castro valley", email: "guest1@gmail.com", image_url: OP[rand(20)])
guest9 = User.create!(username: "guest9", password: "guest91", name: "guest9", location: "castro valley", email: "guest1@gmail.com", image_url: OP[rand(20)])
guest10 = User.create!(username: "guest10", password: "guest101", name: "guest10", location: "castro valley", email: "guest1@gmail.com", image_url: OP[rand(20)])

group1= Group.create!(name: "star wars", location: "milpitas", user_id: user1.id, info: "star wars > star trek!! We are a group of star wars lovers that get together every weekend to hang out. Movie screening on the 21st of every month! May the force be with you!", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258263/1200px-Star_Wars_Logo.svg_murnm7.png")
gn33 = GroupNews.create!(group_id: group1.id, news: user1.username + ' created the group ' + group1.name, user_id: user1.id)
ge33 = GroupEnrollment.create!(group_id: group1.id, user_id: user1.id)

group2= Group.create!(name: "bootcamp grads", location: "san francisco", user_id: user12.id, info: "Bay area coding boot camp grads! We love coding and having fun! Join us as we explore  technologies every Wednesday night. Happy Hour socials on Friday!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504310022/logo-emblem-red-1000-1-_ycgof6.jpg")
gn34 = GroupNews.create!(group_id: group2.id, news: user12.username + ' created the group ' + group2.name, user_id: user12.id)
ge34 = GroupEnrollment.create!(group_id: group2.id, user_id: user12.id)


group3= Group.create!(name: "South Bay Ping Pong", location: "santa clara", user_id: user18.id, info: "• Ping pong is a fun way to meet people and get a great work out all year round; rain or shine.

• Have fun during your lunch break and join us  Tuesdays, Thursdays & Fridays from 12 pm-2 pm for just $5 per day

• We now have three nights,  Mondays, Wednesdays, and Fridays from 7:30pm-10:00pm

• Drop in open play $5

• All levels welcome

• We play with multiple balls, so it's okay to miss because you always have another ball ready to go

• Better players are encouraged to help lower level players

", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258277/download_1_imnrgf.jpg")
gn35 = GroupNews.create!(group_id: group3.id, news: user18.username + ' created the group ' + group3.name, user_id: user18.id)
ge35 = GroupEnrollment.create!(group_id: group3.id, user_id: user18.id)


group4= Group.create!(user_id: user13.id, name: "weekend baksetball cru", location:"san francisco", info: "Weekend basketball crew! Players of all skill levels welcome! After a long week at work, there's nothing like a few pickup games to blow off steam!

We meet every Saturday and Sunday at 10:00am!", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258707/6359464693365503891966175787_pickup_basketball_gzp8ie.jpg")
gn36 = GroupNews.create!(group_id: group4.id, news: user13.username + ' created the group ' + group4.name, user_id: user13.id)
ge36 = GroupEnrollment.create!(group_id: group4.id, user_id: user13.id)



group5= Group.create!(name: "hip hop lovers", location: "mountain view", user_id: user12.id, info: "Hip hop appreciation crew. We love everything about hip hop. Join us to hear about upcoming events and concerts first! No ticket scalping allowed here!", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501259103/65c9ba984e90d29163196b211369ee63--graffiti-artists-hiphop_w1beva.jpg")
gn37 = GroupNews.create!(group_id: group5.id, news: user12.username + ' created the group ' + group5.name, user_id: user12.id)
ge37 = GroupEnrollment.create!(group_id: group5.id, user_id: user12.id)


group6= Group.create!(name: "KPOP", location: "san francisco", user_id: user11.id, info: "Eat, drink, sleep kpop! Join us to learn about upcoming concerts, events, music drops and more!  members welcome at our Fresh Fridays where we watch  kpop music videos released over the last week!!!", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258279/kpop-jpg_hv06pm.gif")
gn38 = GroupNews.create!(group_id: group6.id, news: user11.username + ' created the group ' + group6.name, user_id: user11.id)
ge38 = GroupEnrollment.create!(group_id: group6.id, user_id: user11.id)

group7= Group.create!(name: "Anime Club", location: "hayward", user_id: user15.id, info: "Naruto, Bleach, One Piece, Cowboy Bebop, we love em all!!!! Anime lovers unite!!! Join us if you are a fellow anime lover interested in making a few like-minded friends! We have a weekly ice cream social where  members are welcome to attend!", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258285/2a1c5bbb55d56e983ff7ba2b09caa556--sharingan-eyes-kakashi-sharingan_vh5ubs.jpg")
gn39 = GroupNews.create!(group_id: group7.id, news: user15.username + ' created the group ' + group7.name, user_id: user26.id)
ge39 = GroupEnrollment.create!(group_id: group7.id, user_id: user15.id)

group8= Group.create!(name: "caltrain commuters", location: "cupertino", user_id: user16.id, info: "You know what this is... caltrain commuters!!! Join us to share your funny caltrain stories and vent if need be! ", image_url: 'http://res.cloudinary.com/dxeyfggji/image/upload/v1504310134/vSzCaJVS_ju3406.jpg')
gn40 = GroupNews.create!(group_id: group8.id, news: user16.username + ' created the group ' + group8.name, user_id: user16.id)
ge40 = GroupEnrollment.create!(group_id: group8.id, user_id: user16.id)

group9= Group.create!(name: "L2SpeakKorean", location: "san francisco", user_id: user17.id, info: "Want to learn to speak korean? This is the club for you! All proficiency levels welcome! Please send me an email if you are a native speaker interested in helping others learn!", image_url: 'http://res.cloudinary.com/dxeyfggji/image/upload/v1504310359/il_340x270.920999708_jd5c_hhptjx.jpg')
gn41 = GroupNews.create!(group_id: group9.id, news: user17.username + ' created the group ' + group9.name, user_id: user17.id)
ge41 = GroupEnrollment.create!(group_id: group9.id, user_id: user17.id)

group10= Group.create!(name: "San Jose Hiking Crew", location: "san jose", user_id: user14.id, info: "South bay hikers! We love the outdoors. Weekly hikes on Saturday from 7:00am-3:00pm and Sunday from 9:00am-5:00pm! Come out and hike with us!", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501259174/download_10_ahldfl.jpg")
gn42 = GroupNews.create!(group_id: group10.id, news: user14.username + ' created the group ' + group10.name, user_id: user14.id)
ge42 = GroupEnrollment.create!(group_id: group10.id, user_id: user14.id)


group11= Group.create!(name: "food club", location: "san jose", user_id: user18.id, info: "We are a group of food lovers that explore different restaurants around the bay area. Join us as we explore a  restaurant every week!  members welcome!!", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501259277/585be1aa1600002400bdf2a6_ipusya.jpg")
gn43 = GroupNews.create!(group_id: group11.id, news: user18.username + ' created the group ' + group11.name, user_id: user18.id)
ge43 = GroupEnrollment.create!(group_id: group11.id, user_id: user18.id)


group12 = Group.create!(name: "90's babies", location: "sunnyvale", user_id: user13.id, info: "The realization that this incoming high school freshmen were born in the 2000s means that the high school reign of 90s babies is over. But that doesn't mean we're getting old, it just means we're growing up!
I create!d this group for people who just moved here like I did, or for locals who are interested in meeting  people. This group is as much as yours as it is mine. So if you have a great idea, don't hesitate to let me know!
", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258285/2a1c5bbb55d56e983ff7ba2b09caa556--sharingan-eyes-kakashi-sharingan_vh5ubs.jpg")
gn44 = GroupNews.create!(group_id: group12.id, news: user13.username + ' created the group ' + group12.name, user_id: user13.id)
ge44 = GroupEnrollment.create!(group_id: group12.id, user_id: user13.id)


group13 = Group.create!( name: "Bar Wednesday", location: "san jose", user_id: user20.id, info: "Bar Wednesday is a casual weekly event for local professionals across industries to socialize, philosophize and discuss  technologies. Members represent local startups, finance, technology, automotive, real estate and other industries.

Bar Wednesday is an open event and will never have a sponsor or specific agenda. It will be hosted at various South Bay bars, cocktail lounges and breweries.

All are welcome! Please enjoy Bar Wednesday responsibly.", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258713/download_7_psujbp.jpg")
gn45 = GroupNews.create!(group_id: group13.id, news: user20.username + ' created the group ' + group13.name, user_id: user20.id)
ge45 = GroupEnrollment.create!(group_id: group13.id, user_id: user20.id)


group14 = Group.create!( name: "Hackaday", location: "san jose", user_id: user17.id, info: "This meetup is for Hackaday enthusiasts in San Jose, run in partnership with Hackaday! More info to be added here soon.")
gn46 = GroupNews.create!(group_id: group14.id, news: user17.username + ' created the group ' + group14.name, user_id: user17.id)
ge46 = GroupEnrollment.create!(group_id: group14.id, user_id: user17.id)

group15= Group.create!(name:"Silicon Valley Offbeat 20's and 30's", location: "sunnyvale", user_id: 11, info: "This is a group for people in their 20s & early 30s looking to bond with cool  friends over quirky, fun activities. We're less about the happy hours and meeting over drinks (though they're bound to happen informally) and more about the strange, fun things you've always wanted to try doing (Quidditch, anyone?).

Activities can range from the casual (hikes, game nights, karaoke nights, etc.) to the more offbeat (puzzle hunts, obstacle courses, murder mysteries, etc.). If this sounds right up your alley, come join us for some random fun!", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258281/BoHxGMbIEAAUPgn_q7gcyk.jpg")
gn47 = GroupNews.create!(group_id: group15.id, news: user11.username + ' created the group ' + group15.name, user_id: user11.id)
ge47 = GroupEnrollment.create!(group_id: group15.id, user_id: user11.id)

group16= Group.create!(name: "Asian Party Club", location: "san francisco", user_id: user20.id, info: "·  The Asian party club was recently founded to meet the needs of the Asian community.

·  Hosts fun, social and networking events in San Francisco and the Silicon Valley.", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258716/download_9_yyeqwp.jpg")
gn48 = GroupNews.create!(group_id: group16.id, news: user20.username + ' created the group ' + group16.name, user_id: user26.id)
ge48 = GroupEnrollment.create!(group_id: group16.id, user_id: user20.id)




group17= Group.create!(name: "Los Angeles Graphic Designers", location: "Los Angeles", user_id: user25.id, info: "We are a group of graphic designers based in Los Angeles shaking up the design industry! Join us for our weekly meetups and monthly design competitions!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262317/pexels-photo-128666_gr3wrd.jpg")
gn1 = GroupNews.create!(group_id: group17.id, news: user25.username + ' created the group ' + group17.name, user_id: user25.id)
ge1 = GroupEnrollment.create!(group_id: group17.id, user_id: user25.id)

group18= Group.create!(name: "Bay Area Fantasy Football", location: "San Jose", user_id: user12.id, info: "Home to the bay area fantasy football association. Join us to sign up with a registered league and win prizes. Weekly meetups at local bars and pubs to watch the game!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262250/pexels-photo-564071_akyas1.jpg")
gn2 = GroupNews.create!(group_id: group18.id, news: user12.username + ' created the group ' + group18.name, user_id: user12.id)
ge1 = GroupEnrollment.create!(group_id: group18.id, user_id: user12.id)

group19 =Group.create!(name: "Sunnyvale Swimmers", location: "sunnyvale", user_id: user15.id, info: "Sunnyvale Swimmers is a swimming club for all levels and ages! Our members range from beginners to swimmers who swim at a competitive level. Congrats to John S for placing 2nd at last month's county swim meet!!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262248/pexels-photo-261185_bzc0rr.jpg")
gn2 = GroupNews.create!(group_id: group19.id, news: user15.username + ' created the group ' + group19.name, user_id: user19.id)
ge2 = GroupEnrollment.create!(group_id: group19.id, user_id: user15.id)

group20 =Group.create!(name: "SV Indoor Rock Climbing", location: "Sunnyvale", user_id: user15.id, info: "Club for indoor rock climbing enthusiasts! Weekly events hosted at various gyms! Come meet some fellow rock climbers!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262249/pexels-photo-419293_n2xivz.jpg")
gn3 = GroupNews.create!(group_id: group20.id, news: user15.username + ' created the group ' + group20.name, user_id: user15.id)
ge3 = GroupEnrollment.create!(group_id: group20.id, user_id: user15.id)

group21 =Group.create!(name: "SF BALLAS", location: "San Francisco", user_id: user29.id, info: "SF BALLAS!!!! Join us for our weekly pickup games! Dinner and drinks at various pubs afterwards!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262249/pexels-photo-305244_nlzb4s.jpg")
gn4 = GroupNews.create!(group_id: group21.id, news: user29.username + ' created the group ' + group21.name, user_id: user29.id)
ge4 = GroupEnrollment.create!(group_id: group21.id, user_id: user29.id)

group22 =Group.create!(name: "Milpitas Tennis Club", location: "Milpitas", user_id: user18.id, info: "Tennis club based in the heart of Milpitas. Stop by M-F for pickup games and to meet fellow tennis players from the bay area!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262247/pexels-photo-209977_qhuhqb.jpg")
gn5 = GroupNews.create!(group_id: group22.id, news: user18.username + ' created the group ' + group22.name, user_id: user18.id)
ge5 = GroupEnrollment.create!(group_id: group22.id, user_id: user18.id)

group23 =Group.create!(name: "justDIY", location: "San Diego", user_id: user42.id, info: "Why buy, when you can just DIY? Join us for our weekly projects! ", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262247/pexels-photo-209235_vc62fv.jpg")
gn6 = GroupNews.create!(group_id: group23.id, news: user42.username + ' created the group ' + group23.name, user_id: user42.id)
ge6 = GroupEnrollment.create!(group_id: group23.id, user_id: user42.id)

group49 =Group.create!(name: "Frequent Fliers", location: "Chicago", user_id: user38.id, info: "Frequent Fliers, we love travelling! Join our group to find like-minded travel buddies for your next vacay! ", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262247/pexels-photo-210199_jbldak.jpg")
gn7 = GroupNews.create!(group_id: group49.id, news: user38.username + ' created the group ' + group49.name, user_id: user38.id)
ge7 = GroupEnrollment.create!(group_id: group49.id, user_id: user38.id)

group24 =Group.create!(name: "Couples MeetUp", location: "San Jose", user_id: user43.id, info: "Tired of staying home every weekend with your SO? Come hang out and meet up with other couples in the bay area! Weekly events and activities!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262247/pexels-photo-207105_glqiyw.jpg")
gn8 = GroupNews.create!(group_id: group24.id, news: user43.username + ' created the group ' + group24.name, user_id: user43.id)
ge8 = GroupEnrollment.create!(group_id: group24.id, user_id: user43.id)

group25 = Group.create!(name: "Bay Area Stargazers", location: "Mountain View", user_id: user31.id, info: "Bay Area Stargazers. If you love the night sky, join us for our weekend stargazing meetups!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262246/messier-101-ngc-5457-galaxy-pinwheel-galaxy-41954_dslbk1.jpg")
gn9 = GroupNews.create!(group_id: group25.id, news: user31.username + ' created the group ' + group25.name, user_id: user31.id)
ge9 = GroupEnrollment.create!(group_id: group25.id, user_id: user31.id)

group26 = Group.create!(name: "Oakland Producers", location: "Oakland", user_id: user39.id, info: "Bay area music producers! Looking to buy or sell beats? Want to learn how to produce music? Join us for our weekly event tutorials and monthly competitions!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262247/pexels-photo-164907_f5nes9.jpg")
gn10 = GroupNews.create!(group_id: group26.id, news: user39.username + ' created the group ' + group26.name, user_id: user39.id)
ge10 = GroupEnrollment.create!(group_id: group26.id, user_id: user39.id)

group27 = Group.create!(name: "UX design", location: "Palo Alto", user_id: user41.id, info: "UX designers unite! Join us to learn about the newest cutting edge design practices in the industry now!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262246/color-pencil-drawing-coloring-colored-pencils-159825_elwhdg.jpg")
gn11 = GroupNews.create!(group_id: group27.id, news: user41.username + ' created the group ' + group27.name, user_id: user41.id)
ge11 = GroupEnrollment.create!(group_id: group27.id, user_id: user41.id)

group28 = Group.create!(name: "boxing fanatics", location: "San Jose", user_id: user33.id, info: "backyard boxing?! yup!!! Join us for weekly events! Sign up or spectate and enjoy the show!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262246/boxing-training-workout-silhouettes-39582_vzf0wm.jpg")
gn12 = GroupNews.create!(group_id: group28.id, news: user33.username + ' created the group ' + group28.name, user_id: user33.id)
ge12 = GroupEnrollment.create!(group_id: group28.id, user_id: user33.id)

group29 = Group.create!(name: "San Bruno Golfers", location: "San Bruno", user_id: user29.id, info: "Do you love golf? This is the meetup for you! Let's hit the back 9!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262246/golf-sunset-sport-golfer_zt2rrg.png")
gn13 = GroupNews.create!(group_id: group29.id, news: user29.username + ' created the group ' + group29.name, user_id: user29.id)
ge13 = GroupEnrollment.create!(group_id: group29.id, user_id: user29.id)

group30 = Group.create!(name: "Cupertino Track & Field", location: "Cupertino", user_id: user25.id, info: "Run all day, run all night! Welcome to the Cupertino Track & Field MeetUp!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262246/hurdles-track-race-competition-159745_c0fhvm.jpg")
gn14 = GroupNews.create!(group_id: group30.id, news: user25.username + ' created the group ' + group30.name, user_id: user25.id)
ge14 = GroupEnrollment.create!(group_id: group30.id, user_id: user25.id)

group31 = Group.create!(name: "South Bay Robotics", location: "Cupertino", user_id: user27.id, info: "South Bay Robotics Club! We are changing the world, join us for our weekly forums and monthly build competitions!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262251/teens-robot-future-science-39349_hivgkv.jpg")
gn15 = GroupNews.create!(group_id: group31.id, news: user27.username + ' created the group ' + group31.name, user_id: user27.id)
ge15 = GroupEnrollment.create!(group_id: group31.id, user_id: user27.id)

group32 = Group.create!(name: "Hillsdale Chess Club", location: "Hillsdale", user_id: user23.id, info: "Welcome to the Hillsdale chess club. Drop by anytime between M-F 10am - 6pm for a game of chess! All skill levels welcome!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262248/pexels-photo-277052_uphvdh.jpg")
gn16 = GroupNews.create!(group_id: group32.id, news: user23.username + ' created the group ' + group32.name, user_id: user23.id)
ge16 = GroupEnrollment.create!(group_id: group32.id, user_id: user23.id)

group33 = Group.create!(name: "Bay Area Roommate Finder", location: "San Francisco", user_id: user21.id, info: "New to the bay area? Looking for a roomate? This is the meetup for you!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262250/pexels-photo-509789_1_nq60kr.jpg")
gn17 = GroupNews.create!(group_id: group33.id, news: user21.username + ' created the group ' + group33.name, user_id: user21.id)
ge17 = GroupEnrollment.create!(group_id: group33.id, user_id: user21.id)

group34 = Group.create!(name: "Redwood Cloud Chasers", location: "Redwood City", user_id: user36.id, info: "Got your head up in the clouds? Come join us as we daydream and chase clouds", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262248/pexels-photo-266519_trcydf.jpg")
gn18 = GroupNews.create!(group_id: group34.id, news: user36.username + ' created the group ' + group34.name, user_id: user36.id)
ge18 = GroupEnrollment.create!(group_id: group34.id, user_id: user36.id)

group35 = Group.create!(name: "East Bay Muy Thai", location: "Oakland", user_id: user37.id, info: "East Bay Muy Thai. Be active, go muy thai!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262248/pexels-photo-238636_gbwhmn.jpg")
gn19 = GroupNews.create!(group_id: group35.id, news: user37.username + ' created the group ' + group35.name, user_id: user37.id)
ge19 = GroupEnrollment.create!(group_id: group35.id, user_id: user37.id)

group36 = Group.create!(name: "Cupertino Coders", location: "Cupertino", user_id: user41.id, info: "We are a group of avid coders. If you are interested in teaching others how to code, or want to learn to code... this is the group for you!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262250/pexels-photo-546819_1_inccnh.jpg")
gn20 = GroupNews.create!(group_id: group36.id, news: user41.username + ' created the group ' + group36.name, user_id: user41.id)
ge20= GroupEnrollment.create!(group_id: group36.id, user_id: user41.id)

group37 = Group.create!(name: "Summer Madness", location: "Long Beach", user_id: user44.id, info: "Summer is here! Join us to meet new people and find the best places to kick it this summer!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262251/pexels-photo-565999_fukjle.jpg")
gn21 = GroupNews.create!(group_id: group37.id, news: user44.username + ' created the group ' + group37.name, user_id: user44.id)
ge21 = GroupEnrollment.create!(group_id: group37.id, user_id: user44.id)

group38 = Group.create!(name: "West Coast Woodshop", location: "Daly City", user_id: user40.id, info: "Woodshop fanatics! Why buy a table when you can make one?", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262317/pexels-photo-133022_i8efvb.jpg")
gn22 = GroupNews.create!(group_id: group38.id, news: user40.username + ' created the group ' + group38.name, user_id: user40.id)
ge22 = GroupEnrollment.create!(group_id: group38.id, user_id: user40.id)

group39 = Group.create!(name: "Napa Wine Lovers", location: "San Jose", user_id: user26.id, info: "We love Napa! Join us on our bi-monthly napa wine tasting tours!?", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262251/tuscany-grape-field-nature-51947_hpeirt.jpg")
gn23 = GroupNews.create!(group_id: group39.id, news: user26.username + ' created the group ' + group39.name, user_id: user26.id)
ge23 = GroupEnrollment.create!(group_id: group39.id, user_id: user26.id)

group40 = Group.create!(name: "The Great Outdoors", location: "Redwood City", user_id: user22.id, info: "Join us on our monthly camping events!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262250/pexels-photo-558454_mjgmzi.jpg")
gn24 = GroupNews.create!(group_id: group40.id, news: user22.username + ' created the group ' + group40.name, user_id: user22.id)
ge24 = GroupEnrollment.create!(group_id: group40.id, user_id: user22.id)

group41 = Group.create!(name: "Mobile App Dev", location: "Menlo Park", user_id: user28.id, info: "Are you a mobile app developer? This is the group for you! Weekly forums and events! Dev competitions every month!!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262249/pexels-photo-433617_adjfcl.jpg")
gn25 = GroupNews.create!(group_id: group41.id, news: user28.username + ' created the group ' + group41.name, user_id: user28.id)
ge25 = GroupEnrollment.create!(group_id: group41.id, user_id: user28.id)

group42 = Group.create!(name: "PaddleBOARDERS", location: "Monterey", user_id: user31.id, info: "MeetUp for people who want to go paddleboarding or are interested in learning paddleboarding!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262248/pexels-photo-236953_pqillg.jpg")
gn26 = GroupNews.create!(group_id: group42.id, news: user31.username + ' created the group ' + group42.name, user_id: user31.id)
ge26 = GroupEnrollment.create!(group_id: group42.id, user_id: user31.id)

group43 = Group.create!(name: "Bay Area Book Club", location: "Fremont", user_id: user32.id, info: "We share good reads and talk about our favorite books. Join us for our weekly reading events and book sharing dinners. We read books that cover a wide variety of topics including business, tech, etc.", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262247/pexels-photo-220326_ka3nni.jpg")
gn27= GroupNews.create!(group_id: group43.id, news: user32.username + ' created the group ' + group43.name, user_id: user25.id)
ge27 = GroupEnrollment.create!(group_id: group43.id, user_id: user32.id)

group44 = Group.create!(name: "Hayward Puzzle Club", location: "Hayward", user_id: user22.id, info: "We solve puzzles and crack codes! Think outside of the box and challenge your brain! Join us for our code cracking competitions and our puzzle solving events!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262248/pexels-photo-269399_gnrjxz.jpg")
gn28 = GroupNews.create!(group_id: group44.id, news: user22.username + ' created the group ' + group44.name, user_id: user22.id)
ge28 = GroupEnrollment.create!(group_id: group44.id, user_id: user22.id)

group45 = Group.create!(name: "Night Owls", location: "San Leandro", user_id: user45.id, info: "We are a group of nighttime photographers. Join us as we explore the bay area and capture breathtaking nighttime photographs. Weekly outings on Wednesday and Saturday nights!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262250/pexels-photo-434459_b4qo6m.jpg")
gn29 = GroupNews.create!(group_id: group45.id, news: user45.username + ' created the group ' + group45.name, user_id: user45.id)
ge29 = GroupEnrollment.create!(group_id: group45.id, user_id: user45.id)

group46 = Group.create!(name: "Bay Area Concert Krew", location: "Santa Clara", user_id: user26.id, info: "Going to a concert? None of your friends want to go? No worries, join the bay area concert krew and you'll always have a group to chill with!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262247/pexels-photo-154147_dda16b.jpg")
gn30 = GroupNews.create!(group_id: group46.id, news: user26.username + ' created the group ' + group46.name, user_id: user26.id)
ge30 = GroupEnrollment.create!(group_id: group46.id, user_id: user26.id)

group47 = Group.create!(name: "south bay chess", location: "Santa Clara", user_id: user25.id, info: "Welcome to south bay chess! We are a fun group of chess players. Weekly tourneys and monthly competitions against other clubs! All skill levels are welcome! Message group mod if you would like to be a chess mentor for new players!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262317/pexels-photo-131616_lkssd8.jpg")
gn31 = GroupNews.create!(group_id: group47.id, news: user25.username + ' created the group ' + group47.name, user_id: user25.id)
ge31 = GroupEnrollment.create!(group_id: group47.id, user_id: user25.id)

group48 = Group.create!(name: "Silicon Valley Sneakerheads", location: "Cupertino", user_id: user34.id, info: "Silicon Valley Sneakerheads! Looking to trade or sell your sneakers? Join us for monthly trade events, bring your sneakers!", image_url: "http://res.cloudinary.com/dxeyfggji/image/upload/v1504262246/pexels-photo-48262_uxe5nz.jpg")
gn32 = GroupNews.create!(group_id: group48.id, news: user34.username + ' created the group ' + group48.name, user_id: user34.id)
ge32 = GroupEnrollment.create!(group_id: group48.id, user_id: user34.id)











event1= Event.create!(user_id: user17.id, group_id: group16.id, name: "Happy Hour @ Aloft", location: "cupertino", description: "We invite you to join us for our upcoming happy hour social networking event, held at Aloft Sunnyvale inside WXYZ bar.
Happy hour specials will be extended until 9pm, including a selection of cocktails, beer and wine for only $5 to $6.
 members are welcome to attend, and everyone is more than welcome to bring friends. Take some time to unwind and relax in a casual, laid back environment. If you enjoy meeting  people, networking, connecting with others, then this is a perfect event for you.
This event will be co-hosted with few other Meetup groups.  Please look for our “Auserun.idnyvale")

event2= Event.create!(user_id: user11.id, group_id: group2.id, name: "Potluck", description: "Old adage “it’s not what you know but who you know” Every Sun., we'll get together for food, networking and talk about the hottest topic right now", location: "milpitas")
event3= Event.create!(user_id: user12.id, group_id: group2.id, name: "ice cream social", description: "ice cream social to mingle with all the  members to our group! Feel free to bring any friends interested in joining the group!", location: "santa clara")
event4 = Event.create!(user_id: user11.id, group_id: group16.id, name: "Wine, Dine, and Network with Investors, Mentors, Entrepreneurs, CEOs....etc.", description: "Investors & Volunteers come free. Inbox me with your name and affiliation.

 This is THE event of the South Bay held regularly every 2nd Friday of the month at Aloft Cupertino, right across from Apple Headquarter.

The highlight of this spectacular event will include:


6:30-7:30 Registration and networking Meet Founders, VC’s, Executives....etc.

7:30 All attendees will be provided the opportunity to give a 2 sentence elevator pitch (Who you are | What you're looking for) so that everyone in the audience knows the background of everyone else and whom they would benefit from connecting with.

-------Mingle and Network more

-------Food Provided While Supplies Last (Drinks on your own)

------Bar stays open for the entire duration.

We've always had investors showing up!", location: "cupertino")

event5= Event.create!(user_id: user19.id, group_id: group13.id, name: "Bar Wednesday @ Sino
", description: "Bar Wednesday is a casual weekly event for local professionals across industries to socialize, philosophize and discuss  technologies. Members represent local startups, finance, technology, automotive, real estate and other industries.

Bar Wednesday is an open event and will never have a sponsor or specific agenda. It will be hosted at various South Bay bars, cocktail lounges and breweries.

This week's Bar Wednesday will be hosted at Sino in Santana Row, San Jose.

Before that I'll be going to Le Marché Santana Row, an outdoor French market every Wednesday from 4pm-8pm on Santana Row (between Olin Avenue and Olsen Drive).

All are welcome! Please enjoy Bar Wednesday responsibly.", location: "san jose", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258709/download_8_hewzf1.jpg")

event6 = Event.create!(name: "Bar Wednesday @ Paper Plane", user_id: user18.id, group_id: group13.id, description:" Bar Wednesday is a casual weekly event for local professionals across industries to socialize, philosophize and discuss  technologies. Members represent local startups, finance, technology, automotive, real estate and other industries. Bar Wednesday is an open event and will never have a sponsor or specific agenda. It will be hosted at various South Bay bars, cocktail lounges and breweries. This week's Bar Wednesday will be hosted at Paper Plane in downtown San Jose. Paper Plane is home to great cocktails, food and an impressive bottle wall. All are welcome! Please enjoy Bar Wednesday responsibly.", location: "san jose", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258709/download_8_hewzf1.jpg")

event7 = Event.create!( name: "Bar Wednesday @ Haberdasher", user_id: user18.id, group_id: group13.id, description: "Bar Wednesday is a casual (quasi) weekly event for local professionals across industries to socialize, philosophize and discuss  technologies. Members represent local startups, finance, technology, automotive, real estate and other industries. Bar Wednesday is an open event and will never have a sponsor or specific agenda. It will be hosted at various South Bay bars, cocktail lounges and breweries. This week's Bar Wednesday will be hosted at Bar Wednesday standby, Haberdasher, in downtown San Jose. Haberdasher (formerly Singlebarrel) is a speakeasy-style saloon specializing in classic & forgotten cocktails. All are welcome! Please enjoy Bar Wednesday responsibly.", location: "san jose", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258709/download_8_hewzf1.jpg")

event8 = Event.create!( name: "Bar Wednesday @ Five Points", user_id: user18.id, group_id: group13.id, description: "Bar Wednesday is a casual (quasi) weekly event for local professionals across industries to socialize, philosophize and discuss  technologies. Members represent local startups, finance, technology, automotive, real estate and other industries. Bar Wednesday is an open event and will never have a sponsor or specific agenda. It will be hosted at various South Bay bars, cocktail lounges and breweries. This week's Bar Wednesday will be hosted at Five Points in downtown San Jose. Haberdasher (formerly Singlebarrel) is a speakeasy-style saloon specializing in classic & forgotten cocktails. All are welcome! Please enjoy Bar Wednesday responsibly.", location: "san jose", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258709/download_8_hewzf1.jpg")

event9 = Event.create!( name: "Bar Wednesday @ 55South", user_id: user18.id, group_id: group13.id, description: "Bar Wednesday is a casual (quasi) weekly event for local professionals across industries to socialize, philosophize and discuss  technologies. Members represent local startups, finance, technology, automotive, real estate and other industries. Bar Wednesday is an open event and will never have a sponsor or specific agenda. It will be hosted at various South Bay bars, cocktail lounges and breweries. This week's Bar Wednesday will be hosted at 55South, in downtown San Jose. Haberdasher (formerly Singlebarrel) is a speakeasy-style saloon specializing in classic & forgotten cocktails. All are welcome! Please enjoy Bar Wednesday responsibly.", location: "san jose", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258709/download_8_hewzf1.jpg")

event10 = Event.create!( name: "Bar Wednesday @ Haberdasher", user_id: user18.id, group_id: group13.id, description: "Bar Wednesday is a casual (quasi) weekly event for local professionals across industries to socialize, philosophize and discuss  technologies. Members represent local startups, finance, technology, automotive, real estate and other industries. Bar Wednesday is an open event and will never have a sponsor or specific agenda. It will be hosted at various South Bay bars, cocktail lounges and breweries. This week's Bar Wednesday will be hosted at Bar Wednesday standby, Haberdasher, in downtown San Jose. Haberdasher (formerly Singlebarrel) is a speakeasy-style saloon specializing in classic & forgotten cocktails. All are welcome! Please enjoy Bar Wednesday responsibly.", location: "san jose", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258709/download_8_hewzf1.jpg")

event11 = Event.create!(name: "It's Friday. Let's Play Ping Pong Tonight!", user_id: user15.id, group_id: group3.id, description: "• Drop in open play $5

• All levels welcome

• We play with multiple balls, so it's okay to miss because you always have another ball ready to go

• Better players are encouraged to help lower level players", location: "milpitas", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258275/download_qhxlzq.jpg")

event12 = Event.create!(name: "It's Monday. Let's Play Ping Pong Tonight!", user_id: user15.id, group_id: group3.id, description: "• Drop in open play $5

• All levels welcome

• We play with multiple balls, so it's okay to miss because you always have another ball ready to go

• Better players are encouraged to help lower level players", location: "sunnyvale", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258275/download_qhxlzq.jpg")

event13 = Event.create!(name: "It's Wednesday. Let's Play Ping Pong Tonight!", user_id: user15.id, group_id: group3.id, description: "• Drop in open play $5

• All levels welcome

• We play with multiple balls, so it's okay to miss because you always have another ball ready to go

• Better players are encouraged to help lower level players", location: "cupertino", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258275/download_qhxlzq.jpg")

event14 = Event.create!(name: "Saturday Social", user_id: user12.id, group_id: group6.id,  description: "**This event gives attendance priority to bies. **

* This event will be gender-balanced *

ARE YOU  TO SATURDAY SOCIAL?

Sign up and you will be given priority treatment!

ARE YOU AFRAID OF COMING ALONE AND WATCHING EVERYONE HAVE FUN WHILE YOU'RE SITTING IN THE CORNER?

Don't worry! We often have a lot of  people show up. We are very friendly and no one is ever left out. Ever.

WANT TO HAVE FUN RIGHT AWAY AND MEET A LOT OF PEOPLE?

Make sure to ask for the organizer, come up and say hi!", location: "cupertino")

event15 = Event.create!(name: "Hump Day Happy Hour at D&B
", user_id: user12.id, group_id: group6.id, description: "This place is really the place to be on a Wednesday night! On Wednesday it's half off on apps, drinks, and of course games. What gets really interesting is that the middle of Dave and busters becomes dance floor with a DJ.

Lets meet up at 9:30 before it gets too crowded. There is also a cover at 10 that you can use for a drink :)", location: "sunnyvale")

event16= Event.create!(name: "trivia night", group_id: group8.id , user_id: user14.id, description: "et's go to trivia!

Golden State Brewery hosts a trivia night every Thursday. It's a good chance to try some  beers and test your general knowledge.

Trivia starts at 6:30pm but feel free to come a little earlier to grab a drink, play darts and billiards, or just hangout. They don't sell food, but you are more than welcome to bring outside food into the taproom.", location: "santa clara")


event17 = Event.create!(name: "bie night", group_id: group1.id, user_id: user11.id, description: "From 7:30 - 9:30pm, come and chat with  people for good time in the market hall! Watch others sing songs (or participate yourself) and enjoy awesome ice cream at this tradition at the market.

San Pedro Square Market has other restaurants as well so feel free to indulge at other places. For a Thursday night, there should be plenty of seating so it won't be hard to have us all together.

Hope to see you all there!", location: "richmond")

event18= Event.create!(name: "trivia night", group_id: group1.id, user_id: user11.id, description: "Star wars trivia at starbucks!! 1st place $20 gift card!!", location: "milpitas")

event19= Event.create!(name: "movie night", group_id: group1.id, user_id: user11.id, description: "Star wars the force awakens movie night!!!! snacks will be provided but please bybob", location: "milpitas")

event20 =Event.create!(name: "Movie Day: War for the Planet of the Apes", group_id: group9.id , user_id: user18.id, description: "94% Rotten Tomatoes, warring apes & Woody Harrelson, is there a better way to end the weekend? Probably, but this is all I got.

We'll be watching War for the Planet of the Apes at Santana Row.

Plan to get here a little early to get your tickets and so we can get good seats.

We might also walk around and grab a bite afterwards. Looking forward to seeing y'All there!", location: "san francisco" )





GroupEnrollment.create!(user_id: user1.id, group_id: group1.id )
GroupNews.create!(user_id: user1.id, group_id: group1.id, news: user1.name + ' joined the group!')
GroupEnrollment.create!(user_id: user2.id, group_id: group1.id )
GroupNews.create!(user_id: user1.id, group_id: group1.id, news: user2.name + ' joined the group!')

GroupEnrollment.create!(user_id: user3.id, group_id: group1.id )
GroupNews.create!(user_id: user1.id, group_id: group1.id, news: user3.name + ' joined the group!')

GroupEnrollment.create!(user_id: user4.id, group_id: group1.id )
GroupNews.create!(user_id: user1.id, group_id: group1.id, news: user4.name + ' joined the group!')

GroupEnrollment.create!(user_id: user5.id, group_id: group1.id )
GroupNews.create!(user_id: user1.id, group_id: group1.id, news: user5.name + ' joined the group!')
