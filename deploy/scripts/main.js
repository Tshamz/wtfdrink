var drinkData = {
  prompts: [
    "Today is: " + ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()] + ". Please drink a fucking",
    "I beg of you, please drink a fucking",
    "Sit down and pour yourself a fucking",
    "Stop fucking around and start sippin\' on a",
    "Board the struggle bus and drink a fucking",
    "Take a ride to <a href=\'http://www.urbandictionary.com/define.php?term=hammertown\' target=\'_blank\'>hamtown</a> and drink a fucking",
    "Go get yourself sauced on a fucking",
    "<a href=\"http://www.youtube.com/watch?v=BWiqnPIxIdM\" target=\"_blank\" >Saddle up</a> and knock back a fucking",
    "I want you to crack open a fucking",
    "Why don\'t you have yourself a fucking",
    "Drown your fucking <a href=\"http://www.youtube.com/watch?v=iNRUjnp-5Rw\" target=\"_blank\" >sorrows</a> with a",
    "Stop Whining<a href=\"http://www.youtube.com/watch?v=EL8e2ujXe8g\" target=\"_blank\" >!</a> Make yourself a fucking",
    "Your fucking glass is empty so go make a",
    "Don\'t not fucking make yourself drink a",
    "Slap on your fucking <a href=\"http://www.youtube.com/watch?v=c9q30Ce2vwE\"  target=\'_blank\' >rollerblades</a> and drink a",
    "<a href=\"http://www.youtube.com/watch?v=35XI37SVVYI\" target=\'_blank\' >Fuckin\' thing sucks!</a> Instead, go drink a ",
    "Listen up <a href=\"http://www.youtube.com/watch?v=oDbIxIS2KWE\" target=\'_blank\' >Brother</a>, go drink a fucking",
    "The fuck do you <a href=\"http://www.youtube.com/watch?v=N0nCs48Jb_w#t=05.5s\" target=\'_blank\' >want?</a> Go pour yourself a",
    "What the fuck!? Why aren\'t you drinking a",
    "Make a great fucking life choice and drink a",
    "Round up your amigos and drink a fucking",
    "Place in and/or around your mouth, a fucking",
    "Better go <a href=\"http://www.youtube.com/watch?v=kiGz2AJPMrQ\" target=\"_blank\" >H.A.M</a> by drinking a fucking",
    "Insert into your talking hole a nice fucking",
    "Fuck isn\'t a nice word, now drink a fucking",
    "Get off your <a href=\"http://www.youtube.com/watch?v=uDDMBwJUApg\" target=\"_blank\" >candy ass</a> and make a fucking",
    "Had pasta, got sauced, by drinking a fucking",
    "Going to <a href=\"http://wtfdrink.com\" >wtfdrink.com</a> also brings you here"
  ],
  drinks: {
    nonalcoholic: [{
      "name": "Water.",
      "link": "http://www.building-hardware.com/wp-content/uploads/2009/08/kitchen_sink.jpg",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/water.png",
      "description": "it's water. What more do you want?",
      "category": "all"
    }, {
      "name": "Capri Sun.",
      "link": "http://w3.kraftbrands.com/CapriSunMoms/",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/capri-sun.png",
      "description": "Cooler than Kool-Aid",
      "category": "all"
    }, {
      "name": "Glass of Hot Dog H20.",
      "link": "http://www.urbandictionary.com/define.php?term=hotdog%20water&defid=2875308",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/hot-dog-h2o.png",
      "description": "This stuff taste great!",
      "category": "all"
    }, {
      "name": "Fresca.",
      "link": "http://www.youtube.com/watch?v=XDFCL5Oiqk0#t=26s",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/fresca.png",
      "description": "How 'bout a Fresca?!??",
      "category": "all"
    }, {
      "name": "Booty Sweat.",
      "link": "http://www.youtube.com/watch?v=b75UIUcQ67w",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/booty-sweat.png",
      "description": "Bumpin' n' Grindin'",
      "category": "all"
    }, {
      "name": "Crystal Lite.",
      "link": "http://www.kraftbrands.com/crystallight/Pages/default.aspx#/home",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/crystal-lite.png",
      "description": "The nectar of the Gods",
      "category": "all"
    }, {
      "name": "Shirley Temple.",
      "link": "http://en.wikipedia.org/wiki/Shirley_Temple_(cocktail)",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shirley-temple.png",
      "description": "I bet you probably drink Roy Rogers...",
      "category": "all"
    }, {
      "name": "Carrot Juice.",
      "link": "http://www.showtickets.com/Las-Vegas-Shows/Carrot-Top/images/carrottop_400x375_a.jpg",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/carrot-top.png",
      "description": "Not to be confused with Carrot Top",
      "category": "all"
    }, {
      "name": "Radiator Fluid.",
      "link": "http://almanargroup.com/images/p_big6.jpg",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/radiator-fluid.png",
      "description": "Yeah. Don't listen to this one",
      "category": "all"
    }, {
      "name": "KFC Gravy.",
      "link": "http://www.youtube.com/watch?v=5ucVjoTr_7s",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/kfc-gravy.jpg",
      "description": "I don't know why you need someone to tell you to do this, just do it",
      "category": "all"
    }],
    simple: [{
      "name": "Shot of Whiskey.",
      "link": "#",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "\"I'm a real man, no chaser\" -Jeff Ashworth"
    }, {
      "name": "Shot of Rum.",
      "link": "#",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "\"I'm a real man, no chaser\" -Jeff Ashworth"
    }, {
      "name": "Shot of Gin.",
      "link": "#",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "\"I'm a real man, no chaser\" -Jeff Ashworth"
    }, {
      "name": "Shot of Vodka.",
      "link": "#",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "\"I'm a real man, no chaser\" -Jeff Ashworth"
    }, {
      "name": "Shot of Tequila",
      "link": "#",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "\"I'm a real man, no chaser\" -Jeff Ashworth"
    }],
    alcoholic: [{
      "name": "Joose.",
      "link": "http://www.drinkjoose.com/",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "4Loko.",
      "link": "http://www.youtube.com/watch?v=KVWWre8tn_U",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "Antifreeze.",
      "link": "http://www.drinknation.com/drink/antifreeze-3",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/mason-jar-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "Asshole Boyfriend.",
      "link": "http://www.drinknation.com/drink/asshole-boyfriend",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupette-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "Limona Corona.",
      "link": "http://www.drinksmixer.com/drink4839.html",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/pint-glass-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "151 Ton Bomb.",
      "link": "http://www.drinknation.com/drink/151-ton-bomb",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/mason-jar-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "John Daly.",
      "link": "http://www.drinknation.com/drink/john-daly",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/snifter-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "MD 20/20.",
      "link": "http://www.bumwine.com/md2020.html",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/white-wine-glass-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "Natty Ice.",
      "link": "http://beeradvocate.com/beer/profile/29/653",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/plastic-beer-cups-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "Bodka-Aid.",
      "link": "http://www.drinknation.com/drink/bodka-aid",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/mason-jar-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "Bottle of Andre.",
      "link": "http://www.bevmo.com/Shop/ProductDetail.aspx?ProductID=2063",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/flute-glass-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Gorilla Fart.",
      "link": "http://www.drinknation.com/drink/gorilla-fart",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/mason-jar-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Stranger Drink.",
      "link": "strangerdrink.html",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/unknown-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Zima.",
      "link": "http://www.thepetitionsite.com/1/bringbackzima/",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/pint-glass-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Adult Hot Chocolate.",
      "link": "http://www.drinknation.com/drink/adult-hot-chocolate",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coffee-mug-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Baileys Cup Of Coffee.",
      "link": "http://www.drinknation.com/drink/baileys-cup-of-coffee",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/irish-coffee-mug-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Bull Shot.",
      "link": "http://www.drinknation.com/drink/bull-shot",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Coffee Keokee.",
      "link": "http://www.drinknation.com/drink/coffee-keokee",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/irish-coffee-mug-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Atomic Bomb.",
      "link": "http://www.drinknation.com/drink/atomic-bomb",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/mason-jar-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Boilermaker.",
      "link": "http://www.drinknation.com/drink/boilermaker",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/irish-coffee-mug-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Captain's Apple.",
      "link": "http://www.drinknation.com/drink/captains-apple",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/snifter-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "Gluehwein.",
      "link": "http://www.drinknation.com/drink/gluehwein",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/irish-coffee-mug-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "Cheap Sunglasses.",
      "link": "http://www.drinknation.com/drink/cheap-sunglasses",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/snifter-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "Dancing Captain.",
      "link": "http://www.drinknation.com/drink/dancing-captain",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/snifter-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "Depressed Goalie.",
      "link": "http://www.drinknation.com/drink/depressed-goalie",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "Fade-O-Rade.",
      "link": "http://www.drinknation.com/drink/fade-o-rade",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "Lawn Mower.",
      "link": "http://www.drinknation.com/drink/lawn-mower",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "One Hit Wonder. ",
      "link": "http://www.drinknation.com/drink/onehitwonder",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/snifter-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "Sand Blaster. ",
      "link": "http://www.drinknation.com/drink/sand-blaster",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "Surfer On Speed. ",
      "link": "http://www.drinknation.com/drink/surfer-on-speed",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/snifter-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "Tough Guy. ",
      "link": "http://www.drinknation.com/drink/tough-guy",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "Voodoo Dew. ",
      "link": "http://www.drinknation.com/drink/voodoo-dew",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/snifter-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "Wave Runner.",
      "link": "http://www.drinknation.com/drink/wave-runner",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/sherry-glass-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "Hot Gold.",
      "link": "http://www.drinknation.com/drink/hot-gold",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coffee-mug-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "Night Cap.",
      "link": "http://www.drinknation.com/drink/night-cap",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/sherry-glass-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "Wooley Mitten.",
      "link": "http://www.drinknation.com/drink/wooley-mitten",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coffee-mug-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "Abortion Shot. ",
      "link": "http://www.drinknation.com/drink/abortion-shot",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupe-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "A Little Dick'll Do. ",
      "link": "http://www.drinknation.com/drink/a-little-dickll-do",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupette-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "Dead Hooker. ",
      "link": "http://www.drinknation.com/drink/dead-hooker",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupe-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "Fucked-up Lemonade. ",
      "link": "http://www.drinknation.com/drink/fucked-up-lemonade",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/sherry-glass-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "Fuck Me Sideways. ",
      "link": "http://www.drinknation.com/drink/fuck-me-sideways",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupe-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "Minty Asshole. ",
      "link": "http://www.drinknation.com/drink/minty-asshole",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupe-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "The Shaved Beaver. ",
      "link": "http://www.drinknation.com/drink/the-shaved-beaver",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupe-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "Victory Drink. ",
      "link": "http://www.drinknation.com/drink/victory-drink",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/sherry-glass-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "Chicago Ice Tea.",
      "link": "http://www.drinknation.com/drink/chicago-ice-tea",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/sour-glass-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "Virgin Purple Drank.",
      "link": "http://www.drinknation.com/drink/purple-drank",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/sour-glass-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "The Dream.",
      "link": "http://www.sofakingdrunk.com/2009/01/16/martin-luther-king-jr-day-drink-recipes-mlk-day-cocktail-recipes/",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/sour-glass-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "Olde English.",
      "link": "http://www.beeradvocate.com/beer/profile/105/3350",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "My Sweet Red Lips.",
      "link": "http://www.drinknation.com/drink/my-sweet-red-lips",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/pousse-cafe-glass-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "Screaming Orgasm. ",
      "link": "http://www.drinknation.com/drink/screaming-orgasm",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/pousse-cafe-glass-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "Strawberries & Cream. ",
      "link": "http://www.drinknation.com/drink/strawberries-and-cream",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupette-icon.png",
      "description": "Damn! This some good ass cheese! How come you didn't tell me how good the cheese was?",
      "category": "all"
    }, {
      "name": "Sunset in a Glass. ",
      "link": "http://www.drinknation.com/drink/sunset-in-a-glass",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupette-icon.png",
      "description": "Damn! This some good ass cheese! How come you didn't tell me how good the cheese was?",
      "category": "all"
    }, {
      "name": "Sweetheart's Kiss. ",
      "link": "http://www.drinknation.com/drink/sweethearts-kiss",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupette-icon.png",
      "description": "Damn! This some good ass cheese! How come you didn't tell me how good the cheese was?",
      "category": "all"
    }, {
      "name": "Sweet Surrender. ",
      "link": "http://www.drinknation.com/drink/sweet-surrender",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/pousse-cafe-glass-icon.png",
      "description": "Damn! This some good ass cheese! How come you didn't tell me how good the cheese was?",
      "category": "all"
    }, {
      "name": "Touchie Feelie. ",
      "link": "http://www.drinknation.com/drink/touchie-feelie",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/pousse-cafe-glass-icon.png",
      "description": "Damn! This some good ass cheese! How come you didn't tell me how good the cheese was?",
      "category": "all"
    }, {
      "name": "Valen-tini. ",
      "link": "http://www.drinknation.com/drink/valen-tini",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/pousse-cafe-glass-icon.png",
      "description": "Damn! This some good ass cheese! How come you didn't tell me how good the cheese was?",
      "category": "all"
    }, {
      "name": "Wedding Cake.",
      "link": "http://www.drinknation.com/drink/wedding-cake",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/pousse-cafe-glass-icon.png",
      "description": "Damn! This some good ass cheese! How come you didn't tell me how good the cheese was?",
      "category": "all"
    }, {
      "name": "Paul Dreamy.",
      "link": "http://www.drinknation.com/drink/paul-dreamy",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/paul.png",
      "description": "Paul Reamy does not love hot sausage.",
      "category": "all"
    }, {
      "name": "Anniversary Punch.",
      "link": "http://www.drinknation.com/drink/anniversary-punch",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/punch-bowl-icon.png",
      "description": "Damn! This some good ass cheese! How come you didn't tell me how good the cheese was?",
      "category": "all"
    }, {
      "name": "Paul Creamy.",
      "link": "http://www.drinknation.com/drink/paul-creamy",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/paul.png",
      "description": "HAHAHA PAUL LOVES HOT SAUSAGE!",
      "category": "all"
    }, {
      "name": "Lynyrd Skynyrd.",
      "link": "http://www.drinksmixer.com/drink10742.html",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "Damn! This some good ass cheese! How come you didn't tell me how good the cheese was?",
      "category": "all"
    }, {
      "name": "Spiked Juice.",
      "link": "http://spikeyourjuice.com/",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/punch-bowl-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "Irish Car Bomb.",
      "link": "http://www.drinknation.com/drink/irish-car-bomb",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/beer-mug-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "Adios Mother Fucker.",
      "link": "http://www.drinknation.com/drink/adios-motherfucker",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/snifter-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "Alcoholic Dr Pepper.",
      "link": "http://en.wikipedia.org/wiki/Alcoholic_Dr_Pepper",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/beer-mug-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "Black Velvet.",
      "link": "http://en.wikipedia.org/wiki/Black_Velvet_(beer_cocktail)",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/beer-mug-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "Flaming Dr Pepper.",
      "link": "http://en.wikipedia.org/wiki/Flaming_Dr_Pepper",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/beer-mug-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "Hangman's Blood.",
      "link": "http://en.wikipedia.org/wiki/Hangman%27s_Blood",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/beer-mug-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "Michelada.",
      "link": "http://www.drinknation.com/drink/michelada",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/beer-mug-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "Porchcrawler.",
      "link": "http://en.wikipedia.org/wiki/Porchcrawler",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/beer-mug-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "Sake Bomb.",
      "link": "http://www.drinknation.com/drink/sake-bomb",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/beer-mug-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "U-Boat.",
      "link": "http://en.wikipedia.org/wiki/U-Boot_(beer_cocktail)",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/beer-mug-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "El Chupacabra.",
      "link": "http://www.drinknation.com/drink/el-chupacabra",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "Bloody Matador.",
      "link": "http://www.drinknation.com/drink/bloody-matador",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/cocktail-glass-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "Blue Lagoon.",
      "link": "http://www.drinknation.com/drink/blue-lagoon",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "Cape Codder.",
      "link": "http://www.drinknation.com/drink/cape-codder",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "Black And Gold.",
      "link": "http://www.drinknation.com/drink/black-gold",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Sam Sparro's Favorite Drink.",
      "category": "all"
    }, {
      "name": "Scuba Divin in Aruba.",
      "link": "http://www.drinknation.com/drink/scuba-divin-in-aruba",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "Cuba Libre.",
      "link": "http://www.drinknation.com/drink/cuba-libre",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "Moscow Mule.",
      "link": "http://www.drinknation.com/drink/moscow-mule",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "7 and 7.",
      "link": "http://www.drinknation.com/drink/7-and-7",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "Mai Tai-ler Shambora.",
      "link": "lololololol.html",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "White Russian.",
      "link": "http://www.drinknation.com/drink/white-russian",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Caucasian.",
      "link": "http://www.drinknation.com/drink/caucasian",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Black Caucasian.",
      "link": "http://www.drinknation.com/drink/black-caucasian",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Old Fashioned.",
      "link": "http://en.wikipedia.org/wiki/Old-fashioned_(Slang)",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "30/4/05.",
      "link": "http://www.drinknation.com/drink/30-4-05",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Avocado Daiquiri.",
      "link": "http://www.drinknation.com/drink/avocado-daiquiri",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Bag Of Filth.",
      "link": "http://www.drinknation.com/drink/bag-of-filth",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Cocaine Shooter.",
      "link": "http://www.drinknation.com/drink/cocaine-shooter",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Dyslexic Easter Bunny.",
      "link": "http://www.drinknation.com/drink/dyslexic-easter-bunny",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Felony.",
      "link": "http://www.drinknation.com/drink/felony",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "O Canada.",
      "link": "http://www.youtube.com/watch?v=-gLLk8JEEpM",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Sex on a Surfboard.",
      "link": "http://www.drinknation.com/drink/sex-on-a-surfboard",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Sex with a Salamander.",
      "link": "http://www.drinknation.com/drink/sex-with-a-salamander",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Vin Diesel.",
      "link": "http://www.drinknation.com/drink/vin-diesel",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Redheaded Slut.",
      "link": "http://www.drinknation.com/drink/redheaded-slut",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/plastic-beer-cups-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "B-52.",
      "link": "http://www.drinknation.com/drink/b-52",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/plastic-beer-cups-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "Liquid Marijuana.",
      "link": "http://www.drinknation.com/drink/liquid-marijuana",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/plastic-beer-cups-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "$3.00 Hooker.",
      "link": "http://www.drinknation.com/drink/300-hooker",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/plastic-beer-cups-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "Asian Hooker.",
      "link": "http://www.drinknation.com/drink/asian-hooker",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/plastic-beer-cups-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "Asian Sensation.",
      "link": "http://www.youtube.com/watch?v=zIGCc5V0lj0&list=FLNuZDUkbVNZQ2jux8jlISbQ&index=2",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/plastic-beer-cups-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "Woo Woo.",
      "link": "http://www.drinknation.com/drink/woo-woo",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/plastic-beer-cups-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "Swedish Fish.",
      "link": "http://www.drinknation.com/drink/swedish-fish",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "A Dum Whitefool.",
      "link": "https://fbcdn-sphotos-a.akamaihd.net/hphotos-ak-snc4/39477_1471078330824_1049580261_31476087_55427_n.jpg",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/unknown-icon.png",
      "description": "\"i prefer to wear new balance shoes over the leading name brand of basket ball shoes\"",
      "category": "all"
    }, {
      "name": "Jungle Juice.",
      "link": "http://www.drinknation.com/drink/jungle-juice",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/punch-bowl-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "Lindsay Lohan.",
      "link": "http://www.drinknation.com/drink/lindsay-lohan",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "Moose Milk.",
      "link": "http://www.drinknation.com/drink/moose-milk",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/mikicon.png",
      "description": "Mikaela Musman, the dreamscape of femininity..",
      "category": "all"
    }, {
      "name": "Blood and Guts.",
      "link": "http://drinknation.com/drink/blood-and-guts",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Werewolf bar mitzvah, spooky scary...",
      "category": "halloween"
    }, {
      "name": "Bloody Mary.",
      "link": "http://drinknation.com/drink/bloody-mary",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "Werewolf bar mitzvah, spooky scary...",
      "category": "halloween"
    }, {
      "name": "Dark Nightmare.",
      "link": "http://drinknation.com/drink/dark-nightmare",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "Werewolf bar mitzvah, spooky scary...",
      "category": "halloween"
    }, {
      "name": "Demon's Breath.",
      "link": "http://drinknation.com/drink/demons-breath",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Werewolf bar mitzvah, spooky scary...",
      "category": "halloween"
    }, {
      "name": "Dirty Oatmeal.",
      "link": "http://drinknation.com/drink/dirty-oatmeal",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "Werewolf bar mitzvah, spooky scary...",
      "category": "halloween"
    }, {
      "name": "Highball.",
      "link": "http://www.drinksmixer.com/drink4266.html",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "FREEEEEEEEZE!",
      "category": "all"
    }]
  }
};

(function(App, drinkData) {

  window.config = {
    "resources": drinkData,
    "state": {
      "drinkType": null,
      "alcoholic": null,
      "nonalcoholic": null,
      "clean": null
    },
    "cleanWordsMap": [{
      "bad": "fucking",
      "clean": "stinking"
    }, {
      "bad": "fuckin\'",
      "clean": "stinkin\'"
    }, {
      "bad": "fuck",
      "clean": "heck"
    }, {
      "bad": "Fuck",
      "clean": "Heck"
    }, {
      "bad": " ass",
      "clean": " butt"
    }],
    "selectors": {
      "aboutClose": document.getElementById('js-about-close'),
      "aboutOpen": document.getElementById('js-about-open'),
      "aboutOverlay": document.getElementById('js-about-overlay'),
      "promptContainer": document.getElementById('js-template-prompt'),
      "drinkTypeTrigger": document.getElementById('js-trigger-drinktype'),
      "newContentTrigger": document.getElementById('js-trigger-moar-drinks'),
      "drinknameContainer": document.getElementById('js-template-drinkname')
    }
  };

  var initializeState = function() {
    var subdomain = window.location.hostname.replace(/www\./).match(/(\w*)/g)[0];
    config.state.alcoholic = true;
    config.state.nonalcoholic = false;
    switch (subdomain) {
      case 'simple':
        config.state.drinkType = 'simple';
        config.state.clean = false;
        break;
      case 'clean':
        config.state.drinkType = 'alcoholic';
        config.state.clean = true;
        break;
      default:
        config.state.drinkType = 'alcoholic';
        config.state.clean = false;
    }
  };

  var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var cleanUpText = function(text) {
    var cleanText = text;
    config.cleanWordsMap.forEach(function(wordPairs) {
      var pattern = new RegExp(wordPairs.bad, "g");
      cleanText = cleanText.replace(pattern, wordPairs.clean);
    });
    return cleanText;
  };

  var cleanUpLanguage = function() {
    if (config.state.clean) {
      document.documentElement.innerHTML = cleanUpText(document.documentElement.innerHTML);
    }
  };

  var getRandomPrompt = function() {
    var randomInt = getRandomInt(0, config.resources.prompts.length);
    var prompt = config.resources.prompts[randomInt];
    if (config.state.clean) {
      prompt = cleanUpText(prompt);
    }
    return prompt;
  };

  var getRandomDrinkObject = function() {
    var drinkType = config.state.alcoholic === true ? config.state.drinkType : 'nonalcoholic';
    var randomInt = getRandomInt(0, config.resources.drinks[drinkType].length);
    return config.resources.drinks[drinkType][randomInt];
  };

  var loadNewContent = function() {
    var drink = getRandomDrinkObject();
    config.selectors.promptContainer.innerHTML = getRandomPrompt() + '...';
    config.selectors.drinknameContainer.innerHTML = '<a href="' + drink.link + '">' + drink.name + '</a>';
  };

  var updateDrinkTypeTrigger = function() {
    if (config.state.alcoholic) {
      config.selectors.drinkTypeTrigger.innerHTML = 'I don\'t wanna fucking drink alcohol.';
    } else if (config.state.nonalcoholic) {
      config.selectors.drinkTypeTrigger.innerHTML = 'Nvm, turns out I do wanna drink alcohol.';
    }
  };

  var bindUIActions = function() {
    config.selectors.newContentTrigger.addEventListener('click', function() {
      loadNewContent();
    });
    config.selectors.drinkTypeTrigger.addEventListener('click', function() {
      config.state.alcoholic = config.state.alcoholic === true ? false : true;
      config.state.nonalcoholic = config.state.nonalcoholic === true ? false : true;
      updateDrinkTypeTrigger();
      loadNewContent();
      return false;
    });
    config.selectors.aboutOpen.addEventListener('click', function() {
      config.selectors.aboutOverlay.style.display = 'block';
      return false;
    });
    config.selectors.aboutClose.addEventListener('click', function() {
      config.selectors.aboutOverlay.style.display = 'none';
    });
  };

  App.init = function() {
    initializeState();
    loadNewContent();
    cleanUpLanguage();
    bindUIActions();
  };

}(window.App = window.App || {}, drinkData));

(function(wtfFacebook, undefined) {

  // Private
  function statusChangeCallback(response) {
    if (response.status === 'connected') {
      document.getElementById('js-state-fb-login-status').style.display = 'none';
    }
  }

  // Public
  wtfFacebook.checkLoginState = function() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  };

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '614158375329555',
      xfbml      : true,
      version    : 'v2.2',
      status     : true
    });
    FB.getLoginStatus(function(response) {
      var facebookState = {
        "loginStatus": response.status,
        "userID": response.authResponse.userID,
        "accessToken": response.authResponse.accessToken
      };
      Main.page.state.facebook = facebookState;
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

}(window.wtfFacebook = window.wtfFacebook || {}));

(function() {

  App.init();

}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyaW5rLWRhdGEuanMiLCJBcHAuanMiLCJGYWNlYm9vay5qcyIsImluaXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdHlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkcmlua0RhdGEgPSB7XG4gIHByb21wdHM6IFtcbiAgICBcIlRvZGF5IGlzOiBcIiArIFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVtuZXcgRGF0ZSgpLmdldERheSgpXSArIFwiLiBQbGVhc2UgZHJpbmsgYSBmdWNraW5nXCIsXG4gICAgXCJJIGJlZyBvZiB5b3UsIHBsZWFzZSBkcmluayBhIGZ1Y2tpbmdcIixcbiAgICBcIlNpdCBkb3duIGFuZCBwb3VyIHlvdXJzZWxmIGEgZnVja2luZ1wiLFxuICAgIFwiU3RvcCBmdWNraW5nIGFyb3VuZCBhbmQgc3RhcnQgc2lwcGluXFwnIG9uIGFcIixcbiAgICBcIkJvYXJkIHRoZSBzdHJ1Z2dsZSBidXMgYW5kIGRyaW5rIGEgZnVja2luZ1wiLFxuICAgIFwiVGFrZSBhIHJpZGUgdG8gPGEgaHJlZj1cXCdodHRwOi8vd3d3LnVyYmFuZGljdGlvbmFyeS5jb20vZGVmaW5lLnBocD90ZXJtPWhhbW1lcnRvd25cXCcgdGFyZ2V0PVxcJ19ibGFua1xcJz5oYW10b3duPC9hPiBhbmQgZHJpbmsgYSBmdWNraW5nXCIsXG4gICAgXCJHbyBnZXQgeW91cnNlbGYgc2F1Y2VkIG9uIGEgZnVja2luZ1wiLFxuICAgIFwiPGEgaHJlZj1cXFwiaHR0cDovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUJXaXFuUEl4SWRNXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgPlNhZGRsZSB1cDwvYT4gYW5kIGtub2NrIGJhY2sgYSBmdWNraW5nXCIsXG4gICAgXCJJIHdhbnQgeW91IHRvIGNyYWNrIG9wZW4gYSBmdWNraW5nXCIsXG4gICAgXCJXaHkgZG9uXFwndCB5b3UgaGF2ZSB5b3Vyc2VsZiBhIGZ1Y2tpbmdcIixcbiAgICBcIkRyb3duIHlvdXIgZnVja2luZyA8YSBocmVmPVxcXCJodHRwOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9aU5SVWpucC01UndcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiA+c29ycm93czwvYT4gd2l0aCBhXCIsXG4gICAgXCJTdG9wIFdoaW5pbmc8YSBocmVmPVxcXCJodHRwOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9RUw4ZTJ1alhlOGdcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiA+ITwvYT4gTWFrZSB5b3Vyc2VsZiBhIGZ1Y2tpbmdcIixcbiAgICBcIllvdXIgZnVja2luZyBnbGFzcyBpcyBlbXB0eSBzbyBnbyBtYWtlIGFcIixcbiAgICBcIkRvblxcJ3Qgbm90IGZ1Y2tpbmcgbWFrZSB5b3Vyc2VsZiBkcmluayBhXCIsXG4gICAgXCJTbGFwIG9uIHlvdXIgZnVja2luZyA8YSBocmVmPVxcXCJodHRwOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9YzlxMzBDZTJ2d0VcXFwiICB0YXJnZXQ9XFwnX2JsYW5rXFwnID5yb2xsZXJibGFkZXM8L2E+IGFuZCBkcmluayBhXCIsXG4gICAgXCI8YSBocmVmPVxcXCJodHRwOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9MzVYSTM3U1ZWWUlcXFwiIHRhcmdldD1cXCdfYmxhbmtcXCcgPkZ1Y2tpblxcJyB0aGluZyBzdWNrcyE8L2E+IEluc3RlYWQsIGdvIGRyaW5rIGEgXCIsXG4gICAgXCJMaXN0ZW4gdXAgPGEgaHJlZj1cXFwiaHR0cDovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PW9EYkl4SVMyS1dFXFxcIiB0YXJnZXQ9XFwnX2JsYW5rXFwnID5Ccm90aGVyPC9hPiwgZ28gZHJpbmsgYSBmdWNraW5nXCIsXG4gICAgXCJUaGUgZnVjayBkbyB5b3UgPGEgaHJlZj1cXFwiaHR0cDovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PU4wbkNzNDhKYl93I3Q9MDUuNXNcXFwiIHRhcmdldD1cXCdfYmxhbmtcXCcgPndhbnQ/PC9hPiBHbyBwb3VyIHlvdXJzZWxmIGFcIixcbiAgICBcIldoYXQgdGhlIGZ1Y2shPyBXaHkgYXJlblxcJ3QgeW91IGRyaW5raW5nIGFcIixcbiAgICBcIk1ha2UgYSBncmVhdCBmdWNraW5nIGxpZmUgY2hvaWNlIGFuZCBkcmluayBhXCIsXG4gICAgXCJSb3VuZCB1cCB5b3VyIGFtaWdvcyBhbmQgZHJpbmsgYSBmdWNraW5nXCIsXG4gICAgXCJQbGFjZSBpbiBhbmQvb3IgYXJvdW5kIHlvdXIgbW91dGgsIGEgZnVja2luZ1wiLFxuICAgIFwiQmV0dGVyIGdvIDxhIGhyZWY9XFxcImh0dHA6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1raUd6MkFKUE1yUVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiID5ILkEuTTwvYT4gYnkgZHJpbmtpbmcgYSBmdWNraW5nXCIsXG4gICAgXCJJbnNlcnQgaW50byB5b3VyIHRhbGtpbmcgaG9sZSBhIG5pY2UgZnVja2luZ1wiLFxuICAgIFwiRnVjayBpc25cXCd0IGEgbmljZSB3b3JkLCBub3cgZHJpbmsgYSBmdWNraW5nXCIsXG4gICAgXCJHZXQgb2ZmIHlvdXIgPGEgaHJlZj1cXFwiaHR0cDovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXVERE1Cd0pVQXBnXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgPmNhbmR5IGFzczwvYT4gYW5kIG1ha2UgYSBmdWNraW5nXCIsXG4gICAgXCJIYWQgcGFzdGEsIGdvdCBzYXVjZWQsIGJ5IGRyaW5raW5nIGEgZnVja2luZ1wiLFxuICAgIFwiR29pbmcgdG8gPGEgaHJlZj1cXFwiaHR0cDovL3d0ZmRyaW5rLmNvbVxcXCIgPnd0ZmRyaW5rLmNvbTwvYT4gYWxzbyBicmluZ3MgeW91IGhlcmVcIlxuICBdLFxuICBkcmlua3M6IHtcbiAgICBub25hbGNvaG9saWM6IFt7XG4gICAgICBcIm5hbWVcIjogXCJXYXRlci5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuYnVpbGRpbmctaGFyZHdhcmUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDA5LzA4L2tpdGNoZW5fc2luay5qcGdcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3dhdGVyLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIml0J3Mgd2F0ZXIuIFdoYXQgbW9yZSBkbyB5b3Ugd2FudD9cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkNhcHJpIFN1bi5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93My5rcmFmdGJyYW5kcy5jb20vQ2FwcmlTdW5Nb21zL1wiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvY2Fwcmktc3VuLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNvb2xlciB0aGFuIEtvb2wtQWlkXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJHbGFzcyBvZiBIb3QgRG9nIEgyMC5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cudXJiYW5kaWN0aW9uYXJ5LmNvbS9kZWZpbmUucGhwP3Rlcm09aG90ZG9nJTIwd2F0ZXImZGVmaWQ9Mjg3NTMwOFwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvaG90LWRvZy1oMm8ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyBzdHVmZiB0YXN0ZSBncmVhdCFcIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkZyZXNjYS5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1YREZDTDVPaXFrMCN0PTI2c1wiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvZnJlc2NhLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkhvdyAnYm91dCBhIEZyZXNjYT8hPz9cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkJvb3R5IFN3ZWF0LlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWI3NVVJVWNRNjd3XCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9ib290eS1zd2VhdC5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJCdW1waW4nIG4nIEdyaW5kaW4nXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJDcnlzdGFsIExpdGUuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmtyYWZ0YnJhbmRzLmNvbS9jcnlzdGFsbGlnaHQvUGFnZXMvZGVmYXVsdC5hc3B4Iy9ob21lXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9jcnlzdGFsLWxpdGUucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIG5lY3RhciBvZiB0aGUgR29kc1wiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiU2hpcmxleSBUZW1wbGUuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NoaXJsZXlfVGVtcGxlXyhjb2NrdGFpbClcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3NoaXJsZXktdGVtcGxlLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkkgYmV0IHlvdSBwcm9iYWJseSBkcmluayBSb3kgUm9nZXJzLi4uXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJDYXJyb3QgSnVpY2UuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LnNob3d0aWNrZXRzLmNvbS9MYXMtVmVnYXMtU2hvd3MvQ2Fycm90LVRvcC9pbWFnZXMvY2Fycm90dG9wXzQwMHgzNzVfYS5qcGdcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL2NhcnJvdC10b3AucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTm90IHRvIGJlIGNvbmZ1c2VkIHdpdGggQ2Fycm90IFRvcFwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiUmFkaWF0b3IgRmx1aWQuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vYWxtYW5hcmdyb3VwLmNvbS9pbWFnZXMvcF9iaWc2LmpwZ1wiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvcmFkaWF0b3ItZmx1aWQucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiWWVhaC4gRG9uJ3QgbGlzdGVuIHRvIHRoaXMgb25lXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJLRkMgR3JhdnkuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9NXVjVmpvVHJfN3NcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL2tmYy1ncmF2eS5qcGdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJJIGRvbid0IGtub3cgd2h5IHlvdSBuZWVkIHNvbWVvbmUgdG8gdGVsbCB5b3UgdG8gZG8gdGhpcywganVzdCBkbyBpdFwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfV0sXG4gICAgc2ltcGxlOiBbe1xuICAgICAgXCJuYW1lXCI6IFwiU2hvdCBvZiBXaGlza2V5LlwiLFxuICAgICAgXCJsaW5rXCI6IFwiI1wiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvc2hvdC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlxcXCJJJ20gYSByZWFsIG1hbiwgbm8gY2hhc2VyXFxcIiAtSmVmZiBBc2h3b3J0aFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiU2hvdCBvZiBSdW0uXCIsXG4gICAgICBcImxpbmtcIjogXCIjXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9zaG90LWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXFxcIkknbSBhIHJlYWwgbWFuLCBubyBjaGFzZXJcXFwiIC1KZWZmIEFzaHdvcnRoXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJTaG90IG9mIEdpbi5cIixcbiAgICAgIFwibGlua1wiOiBcIiNcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3Nob3QtZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcXFwiSSdtIGEgcmVhbCBtYW4sIG5vIGNoYXNlclxcXCIgLUplZmYgQXNod29ydGhcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIlNob3Qgb2YgVm9ka2EuXCIsXG4gICAgICBcImxpbmtcIjogXCIjXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9zaG90LWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXFxcIkknbSBhIHJlYWwgbWFuLCBubyBjaGFzZXJcXFwiIC1KZWZmIEFzaHdvcnRoXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJTaG90IG9mIFRlcXVpbGFcIixcbiAgICAgIFwibGlua1wiOiBcIiNcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3Nob3QtZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcXFwiSSdtIGEgcmVhbCBtYW4sIG5vIGNoYXNlclxcXCIgLUplZmYgQXNod29ydGhcIlxuICAgIH1dLFxuICAgIGFsY29ob2xpYzogW3tcbiAgICAgIFwibmFtZVwiOiBcIkpvb3NlLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua2pvb3NlLmNvbS9cIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL2hpZ2hiYWxsLWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIGh1bWFuIHRvcmNoIHdhcyBkZW5pZWQgYSBiYW5rIGxvYW4uXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCI0TG9rby5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1LVldXcmU4dG5fVVwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvaGlnaGJhbGwtZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgaHVtYW4gdG9yY2ggd2FzIGRlbmllZCBhIGJhbmsgbG9hbi5cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkFudGlmcmVlemUuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9hbnRpZnJlZXplLTNcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL21hc29uLWphci1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBodW1hbiB0b3JjaCB3YXMgZGVuaWVkIGEgYmFuayBsb2FuLlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiQXNzaG9sZSBCb3lmcmllbmQuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9hc3Nob2xlLWJveWZyaWVuZFwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvY291cGV0dGUtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgaHVtYW4gdG9yY2ggd2FzIGRlbmllZCBhIGJhbmsgbG9hbi5cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkxpbW9uYSBDb3JvbmEuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rc21peGVyLmNvbS9kcmluazQ4MzkuaHRtbFwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvcGludC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBodW1hbiB0b3JjaCB3YXMgZGVuaWVkIGEgYmFuayBsb2FuLlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiMTUxIFRvbiBCb21iLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvMTUxLXRvbi1ib21iXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9tYXNvbi1qYXItaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgaHVtYW4gdG9yY2ggd2FzIGRlbmllZCBhIGJhbmsgbG9hbi5cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkpvaG4gRGFseS5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL2pvaG4tZGFseVwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvc25pZnRlci1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBodW1hbiB0b3JjaCB3YXMgZGVuaWVkIGEgYmFuayBsb2FuLlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiTUQgMjAvMjAuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmJ1bXdpbmUuY29tL21kMjAyMC5odG1sXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy93aGl0ZS13aW5lLWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIGh1bWFuIHRvcmNoIHdhcyBkZW5pZWQgYSBiYW5rIGxvYW4uXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJOYXR0eSBJY2UuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vYmVlcmFkdm9jYXRlLmNvbS9iZWVyL3Byb2ZpbGUvMjkvNjUzXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9wbGFzdGljLWJlZXItY3Vwcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBodW1hbiB0b3JjaCB3YXMgZGVuaWVkIGEgYmFuayBsb2FuLlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiQm9ka2EtQWlkLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvYm9ka2EtYWlkXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9tYXNvbi1qYXItaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgaHVtYW4gdG9yY2ggd2FzIGRlbmllZCBhIGJhbmsgbG9hbi5cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkJvdHRsZSBvZiBBbmRyZS5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuYmV2bW8uY29tL1Nob3AvUHJvZHVjdERldGFpbC5hc3B4P1Byb2R1Y3RJRD0yMDYzXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9mbHV0ZS1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBhcnNvbmlzdCBoYXMgb2RkbHkgc2hhcGVkIGZlZXQuXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJHb3JpbGxhIEZhcnQuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9nb3JpbGxhLWZhcnRcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL21hc29uLWphci1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBhcnNvbmlzdCBoYXMgb2RkbHkgc2hhcGVkIGZlZXQuXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJTdHJhbmdlciBEcmluay5cIixcbiAgICAgIFwibGlua1wiOiBcInN0cmFuZ2VyZHJpbmsuaHRtbFwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvdW5rbm93bi1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBhcnNvbmlzdCBoYXMgb2RkbHkgc2hhcGVkIGZlZXQuXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJaaW1hLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy50aGVwZXRpdGlvbnNpdGUuY29tLzEvYnJpbmdiYWNremltYS9cIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3BpbnQtZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgYXJzb25pc3QgaGFzIG9kZGx5IHNoYXBlZCBmZWV0LlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiQWR1bHQgSG90IENob2NvbGF0ZS5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL2FkdWx0LWhvdC1jaG9jb2xhdGVcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL2NvZmZlZS1tdWctaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgYXJzb25pc3QgaGFzIG9kZGx5IHNoYXBlZCBmZWV0LlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiQmFpbGV5cyBDdXAgT2YgQ29mZmVlLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvYmFpbGV5cy1jdXAtb2YtY29mZmVlXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9pcmlzaC1jb2ZmZWUtbXVnLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIGFyc29uaXN0IGhhcyBvZGRseSBzaGFwZWQgZmVldC5cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkJ1bGwgU2hvdC5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL2J1bGwtc2hvdFwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvc2hvdC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBhcnNvbmlzdCBoYXMgb2RkbHkgc2hhcGVkIGZlZXQuXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJDb2ZmZWUgS2Vva2VlLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvY29mZmVlLWtlb2tlZVwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvaXJpc2gtY29mZmVlLW11Zy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBhcnNvbmlzdCBoYXMgb2RkbHkgc2hhcGVkIGZlZXQuXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJBdG9taWMgQm9tYi5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL2F0b21pYy1ib21iXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9tYXNvbi1qYXItaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGUgYXJzb25pc3QgaGFzIG9kZGx5IHNoYXBlZCBmZWV0LlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiQm9pbGVybWFrZXIuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9ib2lsZXJtYWtlclwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvaXJpc2gtY29mZmVlLW11Zy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBhcnNvbmlzdCBoYXMgb2RkbHkgc2hhcGVkIGZlZXQuXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJDYXB0YWluJ3MgQXBwbGUuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9jYXB0YWlucy1hcHBsZVwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvc25pZnRlci1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNob3V0IG91dCB0byB0ZWFtIHJlY2tsZXNzIVwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiR2x1ZWh3ZWluLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvZ2x1ZWh3ZWluXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9pcmlzaC1jb2ZmZWUtbXVnLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2hvdXQgb3V0IHRvIHRlYW0gcmVja2xlc3MhXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJDaGVhcCBTdW5nbGFzc2VzLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvY2hlYXAtc3VuZ2xhc3Nlc1wiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvc25pZnRlci1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNob3V0IG91dCB0byB0ZWFtIHJlY2tsZXNzIVwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiRGFuY2luZyBDYXB0YWluLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvZGFuY2luZy1jYXB0YWluXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9zbmlmdGVyLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2hvdXQgb3V0IHRvIHRlYW0gcmVja2xlc3MhXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJEZXByZXNzZWQgR29hbGllLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvZGVwcmVzc2VkLWdvYWxpZVwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvb2xkLWZhc2hpb25lZC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNob3V0IG91dCB0byB0ZWFtIHJlY2tsZXNzIVwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiRmFkZS1PLVJhZGUuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9mYWRlLW8tcmFkZVwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvb2xkLWZhc2hpb25lZC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNob3V0IG91dCB0byB0ZWFtIHJlY2tsZXNzIVwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiTGF3biBNb3dlci5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL2xhd24tbW93ZXJcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL29sZC1mYXNoaW9uZWQtZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTaG91dCBvdXQgdG8gdGVhbSByZWNrbGVzcyFcIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIk9uZSBIaXQgV29uZGVyLiBcIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL29uZWhpdHdvbmRlclwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvc25pZnRlci1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNob3V0IG91dCB0byB0ZWFtIHJlY2tsZXNzIVwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiU2FuZCBCbGFzdGVyLiBcIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL3NhbmQtYmxhc3RlclwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvb2xkLWZhc2hpb25lZC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNob3V0IG91dCB0byB0ZWFtIHJlY2tsZXNzIVwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiU3VyZmVyIE9uIFNwZWVkLiBcIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL3N1cmZlci1vbi1zcGVlZFwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvc25pZnRlci1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNob3V0IG91dCB0byB0ZWFtIHJlY2tsZXNzIVwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiVG91Z2ggR3V5LiBcIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL3RvdWdoLWd1eVwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvb2xkLWZhc2hpb25lZC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkknbSBqdXN0IG1ha2luZyBhIHBvaW50IEZyYW5rLCB5b3UgZG9uJ3QgaGF2ZSB0byBjZWxlYnJhdGUgaXQuXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJWb29kb28gRGV3LiBcIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL3Zvb2Rvby1kZXdcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3NuaWZ0ZXItaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJJJ20ganVzdCBtYWtpbmcgYSBwb2ludCBGcmFuaywgeW91IGRvbid0IGhhdmUgdG8gY2VsZWJyYXRlIGl0LlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiV2F2ZSBSdW5uZXIuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay93YXZlLXJ1bm5lclwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvc2hlcnJ5LWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSSdtIGp1c3QgbWFraW5nIGEgcG9pbnQgRnJhbmssIHlvdSBkb24ndCBoYXZlIHRvIGNlbGVicmF0ZSBpdC5cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkhvdCBHb2xkLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvaG90LWdvbGRcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL2NvZmZlZS1tdWctaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJJJ20ganVzdCBtYWtpbmcgYSBwb2ludCBGcmFuaywgeW91IGRvbid0IGhhdmUgdG8gY2VsZWJyYXRlIGl0LlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiTmlnaHQgQ2FwLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvbmlnaHQtY2FwXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9zaGVycnktZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJJJ20ganVzdCBtYWtpbmcgYSBwb2ludCBGcmFuaywgeW91IGRvbid0IGhhdmUgdG8gY2VsZWJyYXRlIGl0LlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiV29vbGV5IE1pdHRlbi5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL3dvb2xleS1taXR0ZW5cIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL2NvZmZlZS1tdWctaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJJJ20ganVzdCBtYWtpbmcgYSBwb2ludCBGcmFuaywgeW91IGRvbid0IGhhdmUgdG8gY2VsZWJyYXRlIGl0LlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiQWJvcnRpb24gU2hvdC4gXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9hYm9ydGlvbi1zaG90XCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9jb3VwZS1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkknbSBqdXN0IG1ha2luZyBhIHBvaW50IEZyYW5rLCB5b3UgZG9uJ3QgaGF2ZSB0byBjZWxlYnJhdGUgaXQuXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJBIExpdHRsZSBEaWNrJ2xsIERvLiBcIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL2EtbGl0dGxlLWRpY2tsbC1kb1wiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvY291cGV0dGUtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJJJ20ganVzdCBtYWtpbmcgYSBwb2ludCBGcmFuaywgeW91IGRvbid0IGhhdmUgdG8gY2VsZWJyYXRlIGl0LlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiRGVhZCBIb29rZXIuIFwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvZGVhZC1ob29rZXJcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL2NvdXBlLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSSdtIGp1c3QgbWFraW5nIGEgcG9pbnQgRnJhbmssIHlvdSBkb24ndCBoYXZlIHRvIGNlbGVicmF0ZSBpdC5cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkZ1Y2tlZC11cCBMZW1vbmFkZS4gXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9mdWNrZWQtdXAtbGVtb25hZGVcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3NoZXJyeS1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkknbSBqdXN0IG1ha2luZyBhIHBvaW50IEZyYW5rLCB5b3UgZG9uJ3QgaGF2ZSB0byBjZWxlYnJhdGUgaXQuXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJGdWNrIE1lIFNpZGV3YXlzLiBcIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL2Z1Y2stbWUtc2lkZXdheXNcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL2NvdXBlLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlcmUncyBhIGZ1Y2tpbmcgZGFydCBpbiB5b3VyIG5lY2shXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJNaW50eSBBc3Nob2xlLiBcIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL21pbnR5LWFzc2hvbGVcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL2NvdXBlLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlcmUncyBhIGZ1Y2tpbmcgZGFydCBpbiB5b3VyIG5lY2shXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJUaGUgU2hhdmVkIEJlYXZlci4gXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay90aGUtc2hhdmVkLWJlYXZlclwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvY291cGUtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGVyZSdzIGEgZnVja2luZyBkYXJ0IGluIHlvdXIgbmVjayFcIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIlZpY3RvcnkgRHJpbmsuIFwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvdmljdG9yeS1kcmlua1wiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvc2hlcnJ5LWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlcmUncyBhIGZ1Y2tpbmcgZGFydCBpbiB5b3VyIG5lY2shXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJDaGljYWdvIEljZSBUZWEuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9jaGljYWdvLWljZS10ZWFcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3NvdXItZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGVyZSdzIGEgZnVja2luZyBkYXJ0IGluIHlvdXIgbmVjayFcIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIlZpcmdpbiBQdXJwbGUgRHJhbmsuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9wdXJwbGUtZHJhbmtcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3NvdXItZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGVyZSdzIGEgZnVja2luZyBkYXJ0IGluIHlvdXIgbmVjayFcIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIlRoZSBEcmVhbS5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuc29mYWtpbmdkcnVuay5jb20vMjAwOS8wMS8xNi9tYXJ0aW4tbHV0aGVyLWtpbmctanItZGF5LWRyaW5rLXJlY2lwZXMtbWxrLWRheS1jb2NrdGFpbC1yZWNpcGVzL1wiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvc291ci1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZXJlJ3MgYSBmdWNraW5nIGRhcnQgaW4geW91ciBuZWNrIVwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiT2xkZSBFbmdsaXNoLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5iZWVyYWR2b2NhdGUuY29tL2JlZXIvcHJvZmlsZS8xMDUvMzM1MFwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvaGlnaGJhbGwtZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGVyZSdzIGEgZnVja2luZyBkYXJ0IGluIHlvdXIgbmVjayFcIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIk15IFN3ZWV0IFJlZCBMaXBzLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvbXktc3dlZXQtcmVkLWxpcHNcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3BvdXNzZS1jYWZlLWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlcmUncyBhIGZ1Y2tpbmcgZGFydCBpbiB5b3VyIG5lY2shXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJTY3JlYW1pbmcgT3JnYXNtLiBcIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL3NjcmVhbWluZy1vcmdhc21cIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3BvdXNzZS1jYWZlLWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlcmUncyBhIGZ1Y2tpbmcgZGFydCBpbiB5b3VyIG5lY2shXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJTdHJhd2JlcnJpZXMgJiBDcmVhbS4gXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9zdHJhd2JlcnJpZXMtYW5kLWNyZWFtXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9jb3VwZXR0ZS1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRhbW4hIFRoaXMgc29tZSBnb29kIGFzcyBjaGVlc2UhIEhvdyBjb21lIHlvdSBkaWRuJ3QgdGVsbCBtZSBob3cgZ29vZCB0aGUgY2hlZXNlIHdhcz9cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIlN1bnNldCBpbiBhIEdsYXNzLiBcIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL3N1bnNldC1pbi1hLWdsYXNzXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9jb3VwZXR0ZS1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRhbW4hIFRoaXMgc29tZSBnb29kIGFzcyBjaGVlc2UhIEhvdyBjb21lIHlvdSBkaWRuJ3QgdGVsbCBtZSBob3cgZ29vZCB0aGUgY2hlZXNlIHdhcz9cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIlN3ZWV0aGVhcnQncyBLaXNzLiBcIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL3N3ZWV0aGVhcnRzLWtpc3NcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL2NvdXBldHRlLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGFtbiEgVGhpcyBzb21lIGdvb2QgYXNzIGNoZWVzZSEgSG93IGNvbWUgeW91IGRpZG4ndCB0ZWxsIG1lIGhvdyBnb29kIHRoZSBjaGVlc2Ugd2FzP1wiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiU3dlZXQgU3VycmVuZGVyLiBcIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL3N3ZWV0LXN1cnJlbmRlclwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvcG91c3NlLWNhZmUtZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEYW1uISBUaGlzIHNvbWUgZ29vZCBhc3MgY2hlZXNlISBIb3cgY29tZSB5b3UgZGlkbid0IHRlbGwgbWUgaG93IGdvb2QgdGhlIGNoZWVzZSB3YXM/XCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJUb3VjaGllIEZlZWxpZS4gXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay90b3VjaGllLWZlZWxpZVwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvcG91c3NlLWNhZmUtZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEYW1uISBUaGlzIHNvbWUgZ29vZCBhc3MgY2hlZXNlISBIb3cgY29tZSB5b3UgZGlkbid0IHRlbGwgbWUgaG93IGdvb2QgdGhlIGNoZWVzZSB3YXM/XCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJWYWxlbi10aW5pLiBcIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL3ZhbGVuLXRpbmlcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3BvdXNzZS1jYWZlLWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGFtbiEgVGhpcyBzb21lIGdvb2QgYXNzIGNoZWVzZSEgSG93IGNvbWUgeW91IGRpZG4ndCB0ZWxsIG1lIGhvdyBnb29kIHRoZSBjaGVlc2Ugd2FzP1wiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiV2VkZGluZyBDYWtlLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvd2VkZGluZy1jYWtlXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9wb3Vzc2UtY2FmZS1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRhbW4hIFRoaXMgc29tZSBnb29kIGFzcyBjaGVlc2UhIEhvdyBjb21lIHlvdSBkaWRuJ3QgdGVsbCBtZSBob3cgZ29vZCB0aGUgY2hlZXNlIHdhcz9cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIlBhdWwgRHJlYW15LlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvcGF1bC1kcmVhbXlcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3BhdWwucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiUGF1bCBSZWFteSBkb2VzIG5vdCBsb3ZlIGhvdCBzYXVzYWdlLlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiQW5uaXZlcnNhcnkgUHVuY2guXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9hbm5pdmVyc2FyeS1wdW5jaFwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvcHVuY2gtYm93bC1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRhbW4hIFRoaXMgc29tZSBnb29kIGFzcyBjaGVlc2UhIEhvdyBjb21lIHlvdSBkaWRuJ3QgdGVsbCBtZSBob3cgZ29vZCB0aGUgY2hlZXNlIHdhcz9cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIlBhdWwgQ3JlYW15LlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvcGF1bC1jcmVhbXlcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3BhdWwucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSEFIQUhBIFBBVUwgTE9WRVMgSE9UIFNBVVNBR0UhXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJMeW55cmQgU2t5bnlyZC5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtzbWl4ZXIuY29tL2RyaW5rMTA3NDIuaHRtbFwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvb2xkLWZhc2hpb25lZC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRhbW4hIFRoaXMgc29tZSBnb29kIGFzcyBjaGVlc2UhIEhvdyBjb21lIHlvdSBkaWRuJ3QgdGVsbCBtZSBob3cgZ29vZCB0aGUgY2hlZXNlIHdhcz9cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIlNwaWtlZCBKdWljZS5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly9zcGlrZXlvdXJqdWljZS5jb20vXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9wdW5jaC1ib3dsLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2xpbSBKaW0gRGFuaWVsIEtpbVwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiSXJpc2ggQ2FyIEJvbWIuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9pcmlzaC1jYXItYm9tYlwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvYmVlci1tdWctaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTbGltIEppbSBEYW5pZWwgS2ltXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJBZGlvcyBNb3RoZXIgRnVja2VyLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvYWRpb3MtbW90aGVyZnVja2VyXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9zbmlmdGVyLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2xpbSBKaW0gRGFuaWVsIEtpbVwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiQWxjb2hvbGljIERyIFBlcHBlci5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQWxjb2hvbGljX0RyX1BlcHBlclwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvYmVlci1tdWctaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTbGltIEppbSBEYW5pZWwgS2ltXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJCbGFjayBWZWx2ZXQuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0JsYWNrX1ZlbHZldF8oYmVlcl9jb2NrdGFpbClcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL2JlZXItbXVnLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2xpbSBKaW0gRGFuaWVsIEtpbVwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiRmxhbWluZyBEciBQZXBwZXIuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0ZsYW1pbmdfRHJfUGVwcGVyXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9iZWVyLW11Zy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNsaW0gSmltIERhbmllbCBLaW1cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkhhbmdtYW4ncyBCbG9vZC5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGFuZ21hbiUyN3NfQmxvb2RcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL2JlZXItbXVnLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2xpbSBKaW0gRGFuaWVsIEtpbVwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiTWljaGVsYWRhLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvbWljaGVsYWRhXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9iZWVyLW11Zy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNsaW0gSmltIERhbmllbCBLaW1cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIlBvcmNoY3Jhd2xlci5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvUG9yY2hjcmF3bGVyXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9iZWVyLW11Zy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNsaW0gSmltIERhbmllbCBLaW1cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIlNha2UgQm9tYi5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL3Nha2UtYm9tYlwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvYmVlci1tdWctaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTbGltIEppbSBEYW5pZWwgS2ltXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJVLUJvYXQuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1UtQm9vdF8oYmVlcl9jb2NrdGFpbClcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL2JlZXItbXVnLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTmF5LXRhYW4sIGhlbHAgbWUgYmxvdyB1cCBteSBib2F0LlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiRWwgQ2h1cGFjYWJyYS5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL2VsLWNodXBhY2FicmFcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL2hpZ2hiYWxsLWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTmF5LXRhYW4sIGhlbHAgbWUgYmxvdyB1cCBteSBib2F0LlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiQmxvb2R5IE1hdGFkb3IuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9ibG9vZHktbWF0YWRvclwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvY29ja3RhaWwtZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOYXktdGFhbiwgaGVscCBtZSBibG93IHVwIG15IGJvYXQuXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJCbHVlIExhZ29vbi5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL2JsdWUtbGFnb29uXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9oaWdoYmFsbC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5heS10YWFuLCBoZWxwIG1lIGJsb3cgdXAgbXkgYm9hdC5cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkNhcGUgQ29kZGVyLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvY2FwZS1jb2RkZXJcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL2hpZ2hiYWxsLWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTmF5LXRhYW4sIGhlbHAgbWUgYmxvdyB1cCBteSBib2F0LlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiQmxhY2sgQW5kIEdvbGQuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9ibGFjay1nb2xkXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9oaWdoYmFsbC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNhbSBTcGFycm8ncyBGYXZvcml0ZSBEcmluay5cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIlNjdWJhIERpdmluIGluIEFydWJhLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvc2N1YmEtZGl2aW4taW4tYXJ1YmFcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL2hpZ2hiYWxsLWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTmF5LXRhYW4sIGhlbHAgbWUgYmxvdyB1cCBteSBib2F0LlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiQ3ViYSBMaWJyZS5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL2N1YmEtbGlicmVcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL2hpZ2hiYWxsLWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTmF5LXRhYW4sIGhlbHAgbWUgYmxvdyB1cCBteSBib2F0LlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiTW9zY293IE11bGUuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9tb3Njb3ctbXVsZVwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvaGlnaGJhbGwtZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOYXktdGFhbiwgaGVscCBtZSBibG93IHVwIG15IGJvYXQuXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCI3IGFuZCA3LlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvNy1hbmQtN1wiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvaGlnaGJhbGwtZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOYXktdGFhbiwgaGVscCBtZSBibG93IHVwIG15IGJvYXQuXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJNYWkgVGFpLWxlciBTaGFtYm9yYS5cIixcbiAgICAgIFwibGlua1wiOiBcImxvbG9sb2xvbG9sLmh0bWxcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL2hpZ2hiYWxsLWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTmF5LXRhYW4sIGhlbHAgbWUgYmxvdyB1cCBteSBib2F0LlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiV2hpdGUgUnVzc2lhbi5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL3doaXRlLXJ1c3NpYW5cIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL29sZC1mYXNoaW9uZWQtZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcXFwiNExva28gaXMgbGlrZSBhIHRpbWUgbWFjaGluZS4uLiB0aGF0IG9ubHkgZ29lcyB0byB0aGUgZnV0dXJlLlxcXCJcIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkNhdWNhc2lhbi5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL2NhdWNhc2lhblwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvb2xkLWZhc2hpb25lZC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlxcXCI0TG9rbyBpcyBsaWtlIGEgdGltZSBtYWNoaW5lLi4uIHRoYXQgb25seSBnb2VzIHRvIHRoZSBmdXR1cmUuXFxcIlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiQmxhY2sgQ2F1Y2FzaWFuLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvYmxhY2stY2F1Y2FzaWFuXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9vbGQtZmFzaGlvbmVkLWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXFxcIjRMb2tvIGlzIGxpa2UgYSB0aW1lIG1hY2hpbmUuLi4gdGhhdCBvbmx5IGdvZXMgdG8gdGhlIGZ1dHVyZS5cXFwiXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJPbGQgRmFzaGlvbmVkLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9PbGQtZmFzaGlvbmVkXyhTbGFuZylcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL29sZC1mYXNoaW9uZWQtZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcXFwiNExva28gaXMgbGlrZSBhIHRpbWUgbWFjaGluZS4uLiB0aGF0IG9ubHkgZ29lcyB0byB0aGUgZnV0dXJlLlxcXCJcIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIjMwLzQvMDUuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay8zMC00LTA1XCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9vbGQtZmFzaGlvbmVkLWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXFxcIjRMb2tvIGlzIGxpa2UgYSB0aW1lIG1hY2hpbmUuLi4gdGhhdCBvbmx5IGdvZXMgdG8gdGhlIGZ1dHVyZS5cXFwiXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJBdm9jYWRvIERhaXF1aXJpLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvYXZvY2Fkby1kYWlxdWlyaVwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvb2xkLWZhc2hpb25lZC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlxcXCI0TG9rbyBpcyBsaWtlIGEgdGltZSBtYWNoaW5lLi4uIHRoYXQgb25seSBnb2VzIHRvIHRoZSBmdXR1cmUuXFxcIlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiQmFnIE9mIEZpbHRoLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvYmFnLW9mLWZpbHRoXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9vbGQtZmFzaGlvbmVkLWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXFxcIjRMb2tvIGlzIGxpa2UgYSB0aW1lIG1hY2hpbmUuLi4gdGhhdCBvbmx5IGdvZXMgdG8gdGhlIGZ1dHVyZS5cXFwiXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJDb2NhaW5lIFNob290ZXIuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9jb2NhaW5lLXNob290ZXJcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL29sZC1mYXNoaW9uZWQtZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcXFwiNExva28gaXMgbGlrZSBhIHRpbWUgbWFjaGluZS4uLiB0aGF0IG9ubHkgZ29lcyB0byB0aGUgZnV0dXJlLlxcXCJcIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkR5c2xleGljIEVhc3RlciBCdW5ueS5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL2R5c2xleGljLWVhc3Rlci1idW5ueVwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvb2xkLWZhc2hpb25lZC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlxcXCI0TG9rbyBpcyBsaWtlIGEgdGltZSBtYWNoaW5lLi4uIHRoYXQgb25seSBnb2VzIHRvIHRoZSBmdXR1cmUuXFxcIlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiRmVsb255LlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvZmVsb255XCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9vbGQtZmFzaGlvbmVkLWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXFxcIjRMb2tvIGlzIGxpa2UgYSB0aW1lIG1hY2hpbmUuLi4gdGhhdCBvbmx5IGdvZXMgdG8gdGhlIGZ1dHVyZS5cXFwiXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJPIENhbmFkYS5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0tZ0xMazhKRUVwTVwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvb2xkLWZhc2hpb25lZC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlxcXCI0TG9rbyBpcyBsaWtlIGEgdGltZSBtYWNoaW5lLi4uIHRoYXQgb25seSBnb2VzIHRvIHRoZSBmdXR1cmUuXFxcIlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiU2V4IG9uIGEgU3VyZmJvYXJkLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvc2V4LW9uLWEtc3VyZmJvYXJkXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9vbGQtZmFzaGlvbmVkLWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXFxcIjRMb2tvIGlzIGxpa2UgYSB0aW1lIG1hY2hpbmUuLi4gdGhhdCBvbmx5IGdvZXMgdG8gdGhlIGZ1dHVyZS5cXFwiXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJTZXggd2l0aCBhIFNhbGFtYW5kZXIuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9zZXgtd2l0aC1hLXNhbGFtYW5kZXJcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL29sZC1mYXNoaW9uZWQtZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcXFwiNExva28gaXMgbGlrZSBhIHRpbWUgbWFjaGluZS4uLiB0aGF0IG9ubHkgZ29lcyB0byB0aGUgZnV0dXJlLlxcXCJcIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIlZpbiBEaWVzZWwuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay92aW4tZGllc2VsXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9vbGQtZmFzaGlvbmVkLWdsYXNzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiXFxcIjRMb2tvIGlzIGxpa2UgYSB0aW1lIG1hY2hpbmUuLi4gdGhhdCBvbmx5IGdvZXMgdG8gdGhlIGZ1dHVyZS5cXFwiXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJSZWRoZWFkZWQgU2x1dC5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL3JlZGhlYWRlZC1zbHV0XCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9wbGFzdGljLWJlZXItY3Vwcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIldoYXQgaXMgdGhpcywgbGlrZSwgc3Ryb25nIGd1eXM/XCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJCLTUyLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy5kcmlua25hdGlvbi5jb20vZHJpbmsvYi01MlwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvcGxhc3RpYy1iZWVyLWN1cHMtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJXaGF0IGlzIHRoaXMsIGxpa2UsIHN0cm9uZyBndXlzP1wiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiTGlxdWlkIE1hcmlqdWFuYS5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL2xpcXVpZC1tYXJpanVhbmFcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3BsYXN0aWMtYmVlci1jdXBzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiV2hhdCBpcyB0aGlzLCBsaWtlLCBzdHJvbmcgZ3V5cz9cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIiQzLjAwIEhvb2tlci5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rLzMwMC1ob29rZXJcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3BsYXN0aWMtYmVlci1jdXBzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiV2hhdCBpcyB0aGlzLCBsaWtlLCBzdHJvbmcgZ3V5cz9cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkFzaWFuIEhvb2tlci5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL2FzaWFuLWhvb2tlclwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvcGxhc3RpYy1iZWVyLWN1cHMtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJXaGF0IGlzIHRoaXMsIGxpa2UsIHN0cm9uZyBndXlzP1wiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiQXNpYW4gU2Vuc2F0aW9uLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXpJR0NjNVYwbGowJmxpc3Q9RkxOdVpEVWtiVk5aUTJqdXg4amxJU2JRJmluZGV4PTJcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3BsYXN0aWMtYmVlci1jdXBzLWljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiV2hhdCBpcyB0aGlzLCBsaWtlLCBzdHJvbmcgZ3V5cz9cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIldvbyBXb28uXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay93b28td29vXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9wbGFzdGljLWJlZXItY3Vwcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIldoYXQgaXMgdGhpcywgbGlrZSwgc3Ryb25nIGd1eXM/XCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJTd2VkaXNoIEZpc2guXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9zd2VkaXNoLWZpc2hcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3Nob3QtZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJXaGF0IGlzIHRoaXMsIGxpa2UsIHN0cm9uZyBndXlzP1wiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiQSBEdW0gV2hpdGVmb29sLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly9mYmNkbi1zcGhvdG9zLWEuYWthbWFpaGQubmV0L2hwaG90b3MtYWstc25jNC8zOTQ3N18xNDcxMDc4MzMwODI0XzEwNDk1ODAyNjFfMzE0NzYwODdfNTU0Mjdfbi5qcGdcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3Vua25vd24taWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJcXFwiaSBwcmVmZXIgdG8gd2VhciBuZXcgYmFsYW5jZSBzaG9lcyBvdmVyIHRoZSBsZWFkaW5nIG5hbWUgYnJhbmQgb2YgYmFza2V0IGJhbGwgc2hvZXNcXFwiXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiYWxsXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJKdW5nbGUgSnVpY2UuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vd3d3LmRyaW5rbmF0aW9uLmNvbS9kcmluay9qdW5nbGUtanVpY2VcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3B1bmNoLWJvd2wtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJXaGF0IGlzIHRoaXMsIGxpa2UsIHN0cm9uZyBndXlzP1wiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiTGluZHNheSBMb2hhbi5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL2xpbmRzYXktbG9oYW5cIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3Nob3QtZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJXaGF0IGlzIHRoaXMsIGxpa2UsIHN0cm9uZyBndXlzP1wiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiTW9vc2UgTWlsay5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtuYXRpb24uY29tL2RyaW5rL21vb3NlLW1pbGtcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL21pa2ljb24ucG5nXCIsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTWlrYWVsYSBNdXNtYW4sIHRoZSBkcmVhbXNjYXBlIG9mIGZlbWluaW5pdHkuLlwiLFxuICAgICAgXCJjYXRlZ29yeVwiOiBcImFsbFwiXG4gICAgfSwge1xuICAgICAgXCJuYW1lXCI6IFwiQmxvb2QgYW5kIEd1dHMuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vZHJpbmtuYXRpb24uY29tL2RyaW5rL2Jsb29kLWFuZC1ndXRzXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9oaWdoYmFsbC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIldlcmV3b2xmIGJhciBtaXR6dmFoLCBzcG9va3kgc2NhcnkuLi5cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJoYWxsb3dlZW5cIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkJsb29keSBNYXJ5LlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL2RyaW5rbmF0aW9uLmNvbS9kcmluay9ibG9vZHktbWFyeVwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvb2xkLWZhc2hpb25lZC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIldlcmV3b2xmIGJhciBtaXR6dmFoLCBzcG9va3kgc2NhcnkuLi5cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJoYWxsb3dlZW5cIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkRhcmsgTmlnaHRtYXJlLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL2RyaW5rbmF0aW9uLmNvbS9kcmluay9kYXJrLW5pZ2h0bWFyZVwiLFxuICAgICAgXCJpY29uXCI6IFwiaHR0cDovL3doYXR0aGVmdWNrc2hvdWxkaWRyaW5rdG9uaWdodC5jb20vZHJpbmtfaWNvbnMvc2hvdC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIldlcmV3b2xmIGJhciBtaXR6dmFoLCBzcG9va3kgc2NhcnkuLi5cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJoYWxsb3dlZW5cIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkRlbW9uJ3MgQnJlYXRoLlwiLFxuICAgICAgXCJsaW5rXCI6IFwiaHR0cDovL2RyaW5rbmF0aW9uLmNvbS9kcmluay9kZW1vbnMtYnJlYXRoXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9oaWdoYmFsbC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIldlcmV3b2xmIGJhciBtaXR6dmFoLCBzcG9va3kgc2NhcnkuLi5cIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJoYWxsb3dlZW5cIlxuICAgIH0sIHtcbiAgICAgIFwibmFtZVwiOiBcIkRpcnR5IE9hdG1lYWwuXCIsXG4gICAgICBcImxpbmtcIjogXCJodHRwOi8vZHJpbmtuYXRpb24uY29tL2RyaW5rL2RpcnR5LW9hdG1lYWxcIixcbiAgICAgIFwiaWNvblwiOiBcImh0dHA6Ly93aGF0dGhlZnVja3Nob3VsZGlkcmlua3RvbmlnaHQuY29tL2RyaW5rX2ljb25zL3Nob3QtZ2xhc3MtaWNvbi5wbmdcIixcbiAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJXZXJld29sZiBiYXIgbWl0enZhaCwgc3Bvb2t5IHNjYXJ5Li4uXCIsXG4gICAgICBcImNhdGVnb3J5XCI6IFwiaGFsbG93ZWVuXCJcbiAgICB9LCB7XG4gICAgICBcIm5hbWVcIjogXCJIaWdoYmFsbC5cIixcbiAgICAgIFwibGlua1wiOiBcImh0dHA6Ly93d3cuZHJpbmtzbWl4ZXIuY29tL2RyaW5rNDI2Ni5odG1sXCIsXG4gICAgICBcImljb25cIjogXCJodHRwOi8vd2hhdHRoZWZ1Y2tzaG91bGRpZHJpbmt0b25pZ2h0LmNvbS9kcmlua19pY29ucy9oaWdoYmFsbC1nbGFzcy1pY29uLnBuZ1wiLFxuICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkZSRUVFRUVFRUVaRSFcIixcbiAgICAgIFwiY2F0ZWdvcnlcIjogXCJhbGxcIlxuICAgIH1dXG4gIH1cbn07XG4iLCIoZnVuY3Rpb24oQXBwLCBkcmlua0RhdGEpIHtcblxuICB3aW5kb3cuY29uZmlnID0ge1xuICAgIFwicmVzb3VyY2VzXCI6IGRyaW5rRGF0YSxcbiAgICBcInN0YXRlXCI6IHtcbiAgICAgIFwiZHJpbmtUeXBlXCI6IG51bGwsXG4gICAgICBcImFsY29ob2xpY1wiOiBudWxsLFxuICAgICAgXCJub25hbGNvaG9saWNcIjogbnVsbCxcbiAgICAgIFwiY2xlYW5cIjogbnVsbFxuICAgIH0sXG4gICAgXCJjbGVhbldvcmRzTWFwXCI6IFt7XG4gICAgICBcImJhZFwiOiBcImZ1Y2tpbmdcIixcbiAgICAgIFwiY2xlYW5cIjogXCJzdGlua2luZ1wiXG4gICAgfSwge1xuICAgICAgXCJiYWRcIjogXCJmdWNraW5cXCdcIixcbiAgICAgIFwiY2xlYW5cIjogXCJzdGlua2luXFwnXCJcbiAgICB9LCB7XG4gICAgICBcImJhZFwiOiBcImZ1Y2tcIixcbiAgICAgIFwiY2xlYW5cIjogXCJoZWNrXCJcbiAgICB9LCB7XG4gICAgICBcImJhZFwiOiBcIkZ1Y2tcIixcbiAgICAgIFwiY2xlYW5cIjogXCJIZWNrXCJcbiAgICB9LCB7XG4gICAgICBcImJhZFwiOiBcIiBhc3NcIixcbiAgICAgIFwiY2xlYW5cIjogXCIgYnV0dFwiXG4gICAgfV0sXG4gICAgXCJzZWxlY3RvcnNcIjoge1xuICAgICAgXCJhYm91dENsb3NlXCI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1hYm91dC1jbG9zZScpLFxuICAgICAgXCJhYm91dE9wZW5cIjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWFib3V0LW9wZW4nKSxcbiAgICAgIFwiYWJvdXRPdmVybGF5XCI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1hYm91dC1vdmVybGF5JyksXG4gICAgICBcInByb21wdENvbnRhaW5lclwiOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtdGVtcGxhdGUtcHJvbXB0JyksXG4gICAgICBcImRyaW5rVHlwZVRyaWdnZXJcIjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXRyaWdnZXItZHJpbmt0eXBlJyksXG4gICAgICBcIm5ld0NvbnRlbnRUcmlnZ2VyXCI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy10cmlnZ2VyLW1vYXItZHJpbmtzJyksXG4gICAgICBcImRyaW5rbmFtZUNvbnRhaW5lclwiOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtdGVtcGxhdGUtZHJpbmtuYW1lJylcbiAgICB9XG4gIH07XG5cbiAgdmFyIGluaXRpYWxpemVTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdWJkb21haW4gPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUucmVwbGFjZSgvd3d3XFwuLykubWF0Y2goLyhcXHcqKS9nKVswXTtcbiAgICBjb25maWcuc3RhdGUuYWxjb2hvbGljID0gdHJ1ZTtcbiAgICBjb25maWcuc3RhdGUubm9uYWxjb2hvbGljID0gZmFsc2U7XG4gICAgc3dpdGNoIChzdWJkb21haW4pIHtcbiAgICAgIGNhc2UgJ3NpbXBsZSc6XG4gICAgICAgIGNvbmZpZy5zdGF0ZS5kcmlua1R5cGUgPSAnc2ltcGxlJztcbiAgICAgICAgY29uZmlnLnN0YXRlLmNsZWFuID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xlYW4nOlxuICAgICAgICBjb25maWcuc3RhdGUuZHJpbmtUeXBlID0gJ2FsY29ob2xpYyc7XG4gICAgICAgIGNvbmZpZy5zdGF0ZS5jbGVhbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uZmlnLnN0YXRlLmRyaW5rVHlwZSA9ICdhbGNvaG9saWMnO1xuICAgICAgICBjb25maWcuc3RhdGUuY2xlYW4gPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGdldFJhbmRvbUludCA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgfTtcblxuICB2YXIgY2xlYW5VcFRleHQgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIGNsZWFuVGV4dCA9IHRleHQ7XG4gICAgY29uZmlnLmNsZWFuV29yZHNNYXAuZm9yRWFjaChmdW5jdGlvbih3b3JkUGFpcnMpIHtcbiAgICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cCh3b3JkUGFpcnMuYmFkLCBcImdcIik7XG4gICAgICBjbGVhblRleHQgPSBjbGVhblRleHQucmVwbGFjZShwYXR0ZXJuLCB3b3JkUGFpcnMuY2xlYW4pO1xuICAgIH0pO1xuICAgIHJldHVybiBjbGVhblRleHQ7XG4gIH07XG5cbiAgdmFyIGNsZWFuVXBMYW5ndWFnZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChjb25maWcuc3RhdGUuY2xlYW4pIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwgPSBjbGVhblVwVGV4dChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGdldFJhbmRvbVByb21wdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByYW5kb21JbnQgPSBnZXRSYW5kb21JbnQoMCwgY29uZmlnLnJlc291cmNlcy5wcm9tcHRzLmxlbmd0aCk7XG4gICAgdmFyIHByb21wdCA9IGNvbmZpZy5yZXNvdXJjZXMucHJvbXB0c1tyYW5kb21JbnRdO1xuICAgIGlmIChjb25maWcuc3RhdGUuY2xlYW4pIHtcbiAgICAgIHByb21wdCA9IGNsZWFuVXBUZXh0KHByb21wdCk7XG4gICAgfVxuICAgIHJldHVybiBwcm9tcHQ7XG4gIH07XG5cbiAgdmFyIGdldFJhbmRvbURyaW5rT2JqZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRyaW5rVHlwZSA9IGNvbmZpZy5zdGF0ZS5hbGNvaG9saWMgPT09IHRydWUgPyBjb25maWcuc3RhdGUuZHJpbmtUeXBlIDogJ25vbmFsY29ob2xpYyc7XG4gICAgdmFyIHJhbmRvbUludCA9IGdldFJhbmRvbUludCgwLCBjb25maWcucmVzb3VyY2VzLmRyaW5rc1tkcmlua1R5cGVdLmxlbmd0aCk7XG4gICAgcmV0dXJuIGNvbmZpZy5yZXNvdXJjZXMuZHJpbmtzW2RyaW5rVHlwZV1bcmFuZG9tSW50XTtcbiAgfTtcblxuICB2YXIgbG9hZE5ld0NvbnRlbnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZHJpbmsgPSBnZXRSYW5kb21Ecmlua09iamVjdCgpO1xuICAgIGNvbmZpZy5zZWxlY3RvcnMucHJvbXB0Q29udGFpbmVyLmlubmVySFRNTCA9IGdldFJhbmRvbVByb21wdCgpICsgJy4uLic7XG4gICAgY29uZmlnLnNlbGVjdG9ycy5kcmlua25hbWVDb250YWluZXIuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCInICsgZHJpbmsubGluayArICdcIj4nICsgZHJpbmsubmFtZSArICc8L2E+JztcbiAgfTtcblxuICB2YXIgdXBkYXRlRHJpbmtUeXBlVHJpZ2dlciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChjb25maWcuc3RhdGUuYWxjb2hvbGljKSB7XG4gICAgICBjb25maWcuc2VsZWN0b3JzLmRyaW5rVHlwZVRyaWdnZXIuaW5uZXJIVE1MID0gJ0kgZG9uXFwndCB3YW5uYSBmdWNraW5nIGRyaW5rIGFsY29ob2wuJztcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5zdGF0ZS5ub25hbGNvaG9saWMpIHtcbiAgICAgIGNvbmZpZy5zZWxlY3RvcnMuZHJpbmtUeXBlVHJpZ2dlci5pbm5lckhUTUwgPSAnTnZtLCB0dXJucyBvdXQgSSBkbyB3YW5uYSBkcmluayBhbGNvaG9sLic7XG4gICAgfVxuICB9O1xuXG4gIHZhciBiaW5kVUlBY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgY29uZmlnLnNlbGVjdG9ycy5uZXdDb250ZW50VHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgbG9hZE5ld0NvbnRlbnQoKTtcbiAgICB9KTtcbiAgICBjb25maWcuc2VsZWN0b3JzLmRyaW5rVHlwZVRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbmZpZy5zdGF0ZS5hbGNvaG9saWMgPSBjb25maWcuc3RhdGUuYWxjb2hvbGljID09PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgY29uZmlnLnN0YXRlLm5vbmFsY29ob2xpYyA9IGNvbmZpZy5zdGF0ZS5ub25hbGNvaG9saWMgPT09IHRydWUgPyBmYWxzZSA6IHRydWU7XG4gICAgICB1cGRhdGVEcmlua1R5cGVUcmlnZ2VyKCk7XG4gICAgICBsb2FkTmV3Q29udGVudCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGNvbmZpZy5zZWxlY3RvcnMuYWJvdXRPcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBjb25maWcuc2VsZWN0b3JzLmFib3V0T3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBjb25maWcuc2VsZWN0b3JzLmFib3V0Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbmZpZy5zZWxlY3RvcnMuYWJvdXRPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gIH07XG5cbiAgQXBwLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBpbml0aWFsaXplU3RhdGUoKTtcbiAgICBsb2FkTmV3Q29udGVudCgpO1xuICAgIGNsZWFuVXBMYW5ndWFnZSgpO1xuICAgIGJpbmRVSUFjdGlvbnMoKTtcbiAgfTtcblxufSh3aW5kb3cuQXBwID0gd2luZG93LkFwcCB8fCB7fSwgZHJpbmtEYXRhKSk7XG4iLCIoZnVuY3Rpb24od3RmRmFjZWJvb2ssIHVuZGVmaW5lZCkge1xuXG4gIC8vIFByaXZhdGVcbiAgZnVuY3Rpb24gc3RhdHVzQ2hhbmdlQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXN0YXRlLWZiLWxvZ2luLXN0YXR1cycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHd0ZkZhY2Vib29rLmNoZWNrTG9naW5TdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIEZCLmdldExvZ2luU3RhdHVzKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBzdGF0dXNDaGFuZ2VDYWxsYmFjayhyZXNwb25zZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgd2luZG93LmZiQXN5bmNJbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgRkIuaW5pdCh7XG4gICAgICBhcHBJZCAgICAgIDogJzYxNDE1ODM3NTMyOTU1NScsXG4gICAgICB4ZmJtbCAgICAgIDogdHJ1ZSxcbiAgICAgIHZlcnNpb24gICAgOiAndjIuMicsXG4gICAgICBzdGF0dXMgICAgIDogdHJ1ZVxuICAgIH0pO1xuICAgIEZCLmdldExvZ2luU3RhdHVzKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICB2YXIgZmFjZWJvb2tTdGF0ZSA9IHtcbiAgICAgICAgXCJsb2dpblN0YXR1c1wiOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIFwidXNlcklEXCI6IHJlc3BvbnNlLmF1dGhSZXNwb25zZS51c2VySUQsXG4gICAgICAgIFwiYWNjZXNzVG9rZW5cIjogcmVzcG9uc2UuYXV0aFJlc3BvbnNlLmFjY2Vzc1Rva2VuXG4gICAgICB9O1xuICAgICAgTWFpbi5wYWdlLnN0YXRlLmZhY2Vib29rID0gZmFjZWJvb2tTdGF0ZTtcbiAgICB9KTtcbiAgfTtcblxuICAoZnVuY3Rpb24oZCwgcywgaWQpe1xuICAgICB2YXIganMsIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XG4gICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkge3JldHVybjt9XG4gICAgIGpzID0gZC5jcmVhdGVFbGVtZW50KHMpOyBqcy5pZCA9IGlkO1xuICAgICBqcy5zcmMgPSBcIi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvc2RrLmpzXCI7XG4gICAgIGZqcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgZmpzKTtcbiAgIH0oZG9jdW1lbnQsICdzY3JpcHQnLCAnZmFjZWJvb2stanNzZGsnKSk7XG5cbn0od2luZG93Lnd0ZkZhY2Vib29rID0gd2luZG93Lnd0ZkZhY2Vib29rIHx8IHt9KSk7XG4iLCIoZnVuY3Rpb24oKSB7XG5cbiAgQXBwLmluaXQoKTtcblxufSgpKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==