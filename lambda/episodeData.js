const episodes = [
  // Happy episodes
  {
    season: 4,
    episode: 8,
    title: "8 Simple Rules for Buying My Teenage Daughter",
    description: "Peter becomes overprotective when Meg starts dating. Classic Peter shenanigans with plenty of laughs.",
    mood: ["happy", "excited"],
    rating: 8.5,
    memorable_quote: "You know what really grinds my gears?",
    reason: "Light-hearted family comedy with hilarious Peter moments that'll lift your spirits!"
  },
  {
    season: 3,
    episode: 22,
    title: "When You Wish Upon a Weinstein",
    description: "Peter searches for a Jewish accountant to help with his finances, leading to hilarious cultural misunderstandings.",
    mood: ["happy", "bored"],
    rating: 8.7,
    memorable_quote: "I need a Jew!",
    reason: "Silly and fun with great musical numbers that'll make you smile!"
  },
  
  // Sad/Emotional episodes
  {
    season: 6,
    episode: 12,
    title: "Long John Peter",
    description: "Peter discovers he has black ancestors and embraces his heritage.",
    mood: ["sad", "nostalgic"],
    rating: 8.2,
    memorable_quote: "I'm black? That's the best thing that's ever happened to me!",
    reason: "Heartwarming moments mixed with humor, perfect when you need an emotional pick-me-up."
  },
  {
    season: 5,
    episode: 7,
    title: "Chick Cancer",
    description: "Stewie and Brian see a play that moves Stewie to tears, revealing his sensitive side.",
    mood: ["sad", "nostalgic"],
    rating: 8.4,
    memorable_quote: "What the deuce is wrong with me?",
    reason: "A surprisingly touching episode that explores emotions while keeping you entertained."
  },

  // Stressed episodes (relaxing/escapist)
  {
    season: 4,
    episode: 1,
    title: "North by North Quahog",
    description: "Peter and Lois go on a vacation to rekindle their romance, leading to a Mel Brooks parody adventure.",
    mood: ["stressed", "bored"],
    rating: 8.8,
    memorable_quote: "A boat's a boat, but a mystery box could be anything!",
    reason: "Pure escapism with romantic adventure - perfect for unwinding after a stressful day!"
  },
  {
    season: 5,
    episode: 8,
    title: "Barely Legal",
    description: "Meg develops a crush on Brian after he takes her to prom, while Stewie becomes a Broadway star.",
    mood: ["stressed"],
    rating: 8.3,
    memorable_quote: "Whose leg do you have to hump to get a dry martini around here?",
    reason: "Absurd storylines that'll take your mind off stress completely!"
  },

  // Bored episodes (entertaining/exciting)
  {
    season: 6,
    episode: 1,
    title: "Blue Harvest",
    description: "The entire Star Wars Episode IV retold with Family Guy characters during a power outage.",
    mood: ["bored", "excited", "nostalgic"],
    rating: 9.2,
    memorable_quote: "Okay, so there's this Death Star...",
    reason: "Epic Star Wars parody that's incredibly entertaining - you won't be bored for a second!"
  },
  {
    season: 3,
    episode: 1,
    title: "The Thin White Line",
    description: "Brian becomes a drug-sniffing dog and gets addicted to cocaine, while the Griffins go on a mission to save him.",
    mood: ["bored", "excited"],
    rating: 8.6,
    memorable_quote: "I'm doing lines off Melissa Joan Hart's back!",
    reason: "Wild and unpredictable storyline that'll keep you completely engaged!"
  },

  // Angry episodes (cathartic/relatable)
  {
    season: 5,
    episode: 13,
    title: "Bill & Peter's Bogus Journey",
    description: "Peter and Bill Clinton go on wild adventures together after Peter saves his life.",
    mood: ["angry", "stressed"],
    rating: 8.4,
    memorable_quote: "Road trip!",
    reason: "Chaotic energy and rebellious humor - great for channeling frustration into laughs!"
  },
  {
    season: 4,
    episode: 27,
    title: "The Griffin Family History",
    description: "Peter tells his family about their ancestors while waiting out a hurricane.",
    mood: ["angry", "bored"],
    rating: 8.1,
    memorable_quote: "And that's how we Griffins came to America!",
    reason: "Satisfying chaos and outrageous historical parodies that match an angry mood!"
  },

  // Excited episodes
  {
    season: 8,
    episode: 20,
    title: "Something, Something, Something, Dark Side",
    description: "The Family Guy retelling of Star Wars: The Empire Strikes Back.",
    mood: ["excited", "happy", "nostalgic"],
    rating: 9.0,
    memorable_quote: "Who's that? He looks like a cool guy!",
    reason: "High-energy Star Wars parody with non-stop action and comedy!"
  },
  {
    season: 3,
    episode: 21,
    title: "Family Guy Viewer Mail #1",
    description: "Three separate stories based on viewer mail: super powers, opposite world, and a Disney musical.",
    mood: ["excited", "happy"],
    rating: 8.9,
    memorable_quote: "It's time for a wonderful song!",
    reason: "Three stories in one with amazing variety and excitement throughout!"
  },

  // Nostalgic episodes
  {
    season: 4,
    episode: 23,
    title: "Deep Throats",
    description: "Meg and Chris get jobs at a local restaurant, while Lois and Peter reminisce about their past.",
    mood: ["nostalgic", "happy"],
    rating: 8.0,
    memorable_quote: "Remember when we used to...",
    reason: "Full of throwback moments and reminiscing about the good old days!"
  },
  {
    season: 2,
    episode: 16,
    title: "There's Something About Paulie",
    description: "Peter gets involved with the mob after Paulie Soprano saves his life.",
    mood: ["nostalgic", "excited"],
    rating: 8.3,
    memorable_quote: "Fuggedaboutit!",
    reason: "Classic early Family Guy with references to golden age cinema!"
  },

  // Random/Surprise episodes (best overall episodes)
  {
    season: 5,
    episode: 1,
    title: "Stewie Loves Lois",
    description: "Stewie becomes obsessed with Lois, while Peter creates his own TV station.",
    mood: ["random", "happy", "bored"],
    rating: 8.8,
    memorable_quote: "Mom! Mom! Mom! Mommy! Mommy! Mommy!",
    reason: "A fan-favorite with iconic moments - perfect for any mood!"
  },
  {
    season: 4,
    episode: 12,
    title: "Perfect Castaway",
    description: "Peter is lost at sea and returns months later to find his family has moved on.",
    mood: ["random", "excited", "nostalgic"],
    rating: 8.7,
    memorable_quote: "I'm a survivor!",
    reason: "Unpredictable and hilarious - you never know what's coming next!"
  },
  {
    season: 3,
    episode: 7,
    title: "Lethal Weapons",
    description: "Lois becomes a martial arts expert and Peter creates a group called 'The Hunks.'",
    mood: ["random", "happy", "excited"],
    rating: 8.5,
    memorable_quote: "Lois, that's not very lady-like!",
    reason: "Action-packed and funny - a perfect blend of everything great about Family Guy!"
  },
  {
    season: 5,
    episode: 18,
    title: "Meet the Quagmires",
    description: "Death takes Peter back to 1984 where he pursues his lost love, potentially altering his future.",
    mood: ["random", "nostalgic", "excited"],
    rating: 9.1,
    memorable_quote: "Back to the 80s!",
    reason: "Time travel shenanigans with 80s nostalgia - totally unpredictable and awesome!"
  }
];

module.exports = episodes;
