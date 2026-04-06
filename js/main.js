function openPicture(pictureName) {
  var i;
  var x = document.getElementsByClassName("picture");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(pictureName).style.display = "block";  
}

function openVideo(videoName) {
  var i;
  var x = document.getElementsByClassName("video");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(videoName).style.display = "block";  
}

function openSecrets(secretName) {
  var i;
  var x = document.getElementsByClassName("secret");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(secretName).style.display = "block";  
}

  document.getElementById("year").innerHTML = new Date().getFullYear();
  
  
  const msg = [
    "Even the stars will fly out, should the world can be doomed?",
    "Heavens are always upon us!",
    "Only 60% of people are aware of the autists' habits of running around in circles.",
    "This website is powered by a <a href='https://www.walmart.com/'>Walmart store</a>! Just kidding.",
    "I only wrote a story about a brony who plays Super Mario Maker.",
    "Internet is full of surprises. Sometimes it isn't.",
    "One psychic power is enough to make anything happen. Plain and simple!",
    "Peppers? Um, they don't do my spicy pizza, right?.",
    "I once checked someone's body inflation picture with the kids in any website.",
    "Like my status quo?",
    "<b>WHOAH! Slow down, kiddo!</b>",
    "Does this remind you of some kid stuff so much?",
    "Patrick, the mayonnaise here is not an instrument!",
    "What did you mean it's not for kids?",
    "Now put that thing back where it came from or so help me!",
    "I'll eat a hot dog.<br>Actually, I put wax on your hot dog.<br>WHAT!?",
    "No files were harmed in the making of this website.",
    "Scratch = TurboWarp = PenguinMod = GaiaMod. Triple the mod fun!",
    "Did you know? Try searching for \"your mom\" in the PenguinMod search bar to see what you get!",
    "Good things always happened!",
    "I'd rather watch Wenda dance underwater...",
    "Humanuh humanuh humanuh humanuh...<br>Website for humanuh?",
    "I've gotta act fast!",
    "OOOOOOOOOOOOOOOOOH NOOOOOOOOOOOOOOOOOOOOO!!!",
    "Holy shrimp, Batman! We're trapped!",
    "<a style='color: lightblue;' href='https://www.youtube.com/channel/UC2XpeSO5OwSx42LAX1tS9Eg'>Gaia Windwave was here.</a>",
    "I went to the homepage and got a popup, asking me if I like waffles or not.",
    "Did you know? Gaia is used to be an older brand from the 2010's called \"Super Jump Punch\".",
    "Oren is reading this message 💀",
    "Thumbs up if you see an animated logo in this page moving downwards.",
    "PARMESAN CHEEEEEEEEEEEEEEEEEEEEESE!!!! With cheddar.",
    "Rumours say some guy once visited the Beanbean Kingdom and receive a message that the villainess wanted his profile info.",
    "Great Hammer Barrage, everyone! I got shocked by the one of the shock images!",
    "NOTE: If you see this message, please copy it into your signature in any Weasyl profile pages. Thank you!",
    "Some say mushrooms don't grow on trees.",
    "Join the Gaia revolution and have fun like never before!",
    "This site is built by a 36-year old who is always immature and innocent. Please avoid this.",
    "Oh yeah? Try and figure your way out of this!",
    "Evil scissors scare people away.",
    "Don't ask me where I got this message from!",
    "Who lives in a chocolate pudding at 4:00 AM?<br>Stuart Pickles!",
    "PASTAAAAAAAAAAAAAAA!!!!! Just kidding!",
    "This website is garbage.<br>No it doesn't!",
    "I'm going to send a thank-you gift to Squidward... TORTELLINI!?",
    "Why on Earth are you making an orange Jell-O at 3 in the morning!?<br>Because I cannot control of my life!",
    "Who says I'm starting this meme!?",
    "Down the hatch, sir!",
    "It's Waka-Laka time!",
    "SEGA is what Nintendon't!",
    "Don't ever stop to play Friday Night Funkin' for nothing!",
    "I am a strong girl, I have taken my vitamins, I have eaten all the spinach!"
    "The dragon is off, but he's STILL singing!"
    "Anything related to furries will be EVERYWHERE in this world!"
    "Remember, kids! It's a surpreme law of physics written by a furry member. I prefer not to give a shout-out.<br>FINISH THEM!"
    "🎵Boom boom boom boom<br>He's driving in my room<br>Driving cars forever and running now and ever<br>Boom boom boom boom<br>He wants to double boom<br>Bumping cars forever, and he's driving in my room🎵"
]

	window.onload = function () {
		document.getElementById("random").innerHTML = msg[Math.round(Math.random() * msg.length)];
	}