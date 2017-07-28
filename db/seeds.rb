# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)

User.destroy_all
Group.destroy_all
Event.destroy_all
GroupEnrollment.destroy_all

user1 = User.create!(username: "user1", password: "user11", name: "user1", location: "san francisco", email: "user1@gmail.com")
user2 = User.create!(username: "user2", password: "user21", name: "user2", location: "san francisco", email: "user2@gmail.com")
user3 = User.create!(username: "user3", password: "user31", name: "user3", location: "san francisco", email: "user3@gmail.com")
user4 = User.create!(username: "user4", password: "user41", name: "user4", location: "san francisco", email: "user4@gmail.com")
user5 = User.create!(username: "user5", password: "user51", name: "user5", location: "san francisco", email: "user5@gmail.com")
user6 = User.create!(username: "user6", password: "user61", name: "user6", location: "san francisco", email: "user6@gmail.com")
user7 = User.create!(username: "user7", password: "user71", name: "user7", location: "san francisco", email: "user7@gmail.com")
user8 = User.create!(username: "user8", password: "user81", name: "user8", location: "san francisco", email: "user8@gmail.com")
user9 = User.create!(username: "user9", password: "user91", name: "user9", location: "san francisco", email: "user9@gmail.com")
user10 = User.create!(username: "user10", password: "user10", name: "user10", location: "san francisco", email: "user10@gmail.com")
user11 = User.create!(username: "vegeta", password: "vegeta", name: "vegeta", location: "san jose", email: "vegeta33@hotmail.com"  )
user12 = User.create!(username: "goku", password: "gokawfwu", name: "goku", location: "san jose", email: "goku99@hotmail.com"  )
user13 = User.create!(username: "kenny", password: "kennawfawfay", name: "kenny", location: "san jose", email: "slimdunkin@aol.com"  )
user14 = User.create!(username: "cam", password: "camwafwfa", name: "cam", location: "mountain view", email: "goku99@aol.com"  )
user15 = User.create!(username: "j0hn", password: "j0hnwfawf", name: "john", location: "sunnyvale", email: "johnjohnjohn@hotmail.com"  )
user16 = User.create!(username: "slim", password: "slimawfaw", name: "slim", location: "san jose", email: "virginiaslim@gmail.com"  )
user17 = User.create!(username: "gohan", password: "gohaawfawfawn", name: "gohan", location: "milpitas", email: "goku99@hotmail.com"  )
user18 = User.create!(username: "kakashi", password: "kakashi", name: "kakashi", location: "milpitas", email: "hiddenleaf9@hotmail.com"  )
user19 = User.create!(username: "arvind45", password: "arvind", name: "arvind", location: "castro valley", email: "21savage@hotmail.com"  )
user20 = User.create!(username: "chuckthenorris", password: "norris", name: "norris", location: "richmond", email: "chuckthenorris@hotmail.com"  )
guest1 = User.create!(username: "guest1", password: "guest11", name: "guest1", location: "castro valley", email: "guest1@gmail.com")
guest2 = User.create!(username: "guest2", password: "guest21", name: "guest2", location: "castro valley", email: "guest1@gmail.com")
guest3 = User.create!(username: "guest3", password: "guest31", name: "guest3", location: "castro valley", email: "guest1@gmail.com")
guest4 = User.create!(username: "guest4", password: "guest41", name: "guest4", location: "castro valley", email: "guest1@gmail.com")
guest5 = User.create!(username: "guest5", password: "guest51", name: "guest5", location: "castro valley", email: "guest1@gmail.com")
guest6 = User.create!(username: "guest6", password: "guest61", name: "guest6", location: "castro valley", email: "guest1@gmail.com")
guest7 = User.create!(username: "guest7", password: "guest71", name: "guest7", location: "castro valley", email: "guest1@gmail.com")
guest8 = User.create!(username: "guest8", password: "guest81", name: "guest8", location: "castro valley", email: "guest1@gmail.com")
guest9 = User.create!(username: "guest9", password: "guest91", name: "guest9", location: "castro valley", email: "guest1@gmail.com")
guest10 = User.create!(username: "guest10", password: "guest101", name: "guest10", location: "castro valley", email: "guest1@gmail.com")

group1= Group.create!(name: "star wars", location: "milpitas", user_id: user1.id, info: "star wars > star trek!! We are a group of star wars lovers that get together every weekend to hang out. Movie screening on the 21st of every month! May the force be with you!", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258263/1200px-Star_Wars_Logo.svg_murnm7.png")
group2= Group.create!(name: "bootcamp grads", location: "san francisco", user_id: user12.id, info: "Bay area coding boot camp grads! We love coding and having fun! Join us as we explore  technologies every Wednesday night. Happy Hour socials on Friday!", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258708/download_d4zzwb.png")
group3= Group.create!(name: "South Bay Ping Pong", location: "santa clara", user_id: user18.id, info: "• Ping pong is a fun way to meet people and get a great work out all year round; rain or shine.

• Have fun during your lunch break and join us  Tuesdays, Thursdays & Fridays from 12 pm-2 pm for just $5 per day

• We now have three nights,  Mondays, Wednesdays, and Fridays from 7:30pm-10:00pm

• Drop in open play $5

• All levels welcome

• We play with multiple balls, so it's okay to miss because you always have another ball ready to go

• Better players are encouraged to help lower level players

", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258277/download_1_imnrgf.jpg")
group4= Group.create!(user_id: user13.id, name: "weekend baksetball cru", location:"san francisco", info: "Weekend basketball crew! Players of all skill levels welcome! After a long week at work, there's nothing like a few pickup games to blow off steam!

We meet every Saturday and Sunday at 10:00am!", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258707/6359464693365503891966175787_pickup_basketball_gzp8ie.jpg")



group5= Group.create!(name: "hip hop lovers", location: "mountain view", user_id: user12.id, info: "Hip hop appreciation crew. We love everything about hip hop. Join us to hear about upcoming events and concerts first! No ticket scalping allowed here!", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501259103/65c9ba984e90d29163196b211369ee63--graffiti-artists-hiphop_w1beva.jpg")
group6= Group.create!(name: "KPOP", location: "san francisco", user_id: user11.id, info: "Eat, drink, sleep kpop! Join us to learn about upcoming concerts, events, music drops and more!  members welcome at our Fresh Fridays where we watch  kpop music videos released over the last week!!!", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258279/kpop-jpg_hv06pm.gif")
group7= Group.create!(name: "Anime Club", location: "hayward", user_id: user15.id, info: "Naruto, Bleach, One Piece, Cowboy Bebop, we love em all!!!! Anime lovers unite!!! Join us if you are a fellow anime lover interested in making a few like-minded friends! We have a weekly ice cream social where  members are welcome to attend!", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258285/2a1c5bbb55d56e983ff7ba2b09caa556--sharingan-eyes-kakashi-sharingan_vh5ubs.jpg")
group8= Group.create!(name: "caltrain commuters", location: "cupertino", user_id: user16.id, info: "You know what this is... caltrain commuters!!! Join us to share your funny caltrain stories and vent if need be! ")
group9= Group.create!(name: "L2SpeakKorean", location: "san francisco", user_id: user17.id, info: "Want to learn to speak korean? This is the club for you! All proficiency levels welcome! Please send me an email if you are a native speaker interested in helping others learn!")
group10= Group.create!(name: "San Jose Hiking Crew", location: "san jose", user_id: user14.id, info: "South bay hikers! We love the outdoors. Weekly hikes on Saturday from 7:00am-3:00pm and Sunday from 9:00am-5:00pm! Come out and hike with us!", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501259174/download_10_ahldfl.jpg")
group11= Group.create!(name: "food club", location: "san jose", user_id: user18.id, info: "We are a group of food lovers that explore different restaurants around the bay area. Join us as we explore a  restaurant every week!  members welcome!!", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501259277/585be1aa1600002400bdf2a6_ipusya.jpg")


group12 = Group.create!(name: "90's babies", location: "sunnyvale", user_id: user13.id, info: "The realization that this incoming high school freshmen were born in the 2000s means that the high school reign of 90s babies is over. But that doesn't mean we're getting old, it just means we're growing up!
I create!d this group for people who just moved here like I did, or for locals who are interested in meeting  people. This group is as much as yours as it is mine. So if you have a great idea, don't hesitate to let me know!
", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258285/2a1c5bbb55d56e983ff7ba2b09caa556--sharingan-eyes-kakashi-sharingan_vh5ubs.jpg")

group13 = Group.create!( name: "Bar Wednesday", location: "san jose", user_id: user20.id, info: "Bar Wednesday is a casual weekly event for local professionals across industries to socialize, philosophize and discuss  technologies. Members represent local startups, finance, technology, automotive, real estate and other industries.
user
B.idar Wednesday is an open event and will never have a sponsor or specific agenda. It will be hosted at various South Bay bars, cocktail lounges and breweries.

All are welcome! Please enjoy Bar Wednesday responsibly.", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258713/download_7_psujbp.jpg")

group14 = Group.create!( name: "Hackaday", location: "san jose", user_id: user17.id, info: "This meetup is for Hackaday enthusiasts in San Jose, run in partnership with Hackaday! More info to be added here soon.")

group15= Group.create!(name:"Silicon Valley Offbeat 20's and 30's", location: "sunnyvale", user_id: 11, info: "This is a group for people in their 20s & early 30s looking to bond with cool  friends over quirky, fun activities. We're less about the happy hours and meeting over drinks (though they're bound to happen informally) and more about the strange, fun things you've always wanted to try doing (Quidditch, anyone?).

Activities can range from the casual (hikes, game nights, karaoke nights, etc.) to the more offbeat (puzzle hunts, obstacle courses, murder mysteries, etc.). If this sounds right up your alley, come join us for some random fun!", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258281/BoHxGMbIEAAUPgn_q7gcyk.jpg")

group16= Group.create!(name: "Asian Party Club", location: "san francisco", user_id: user20.id, info: "·  The Asian party club was recently founded to meet the needs of the Asian community.

·  Hosts fun, social and networking events in San Francisco and the Silicon Valley.", image_url: "https://res.cloudinary.com/dxeyfggji/image/upload/v1501258716/download_9_yyeqwp.jpg")



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
GroupEnrollment.create!(user_id: user2.id, group_id: group1.id )
GroupEnrollment.create!(user_id: user3.id, group_id: group1.id )
GroupEnrollment.create!(user_id: user4.id, group_id: group1.id )
GroupEnrollment.create!(user_id: user5.id, group_id: group1.id )
