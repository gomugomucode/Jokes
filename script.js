let currentJokeText = "";
let useNepali = false;

const nepaliJokes = [
  "किन कुखुराले बाटो काट्यो? अर्को पट्टि जान!",
  "मास्टर: किन ढिला आयौ? विद्यार्थी: सपनामा स्कूल आउँदै थिएँ!",
  "तिमी यति स्मार्ट किन? किनभने म मोबाइल चलाउँछु 😄"
];

// 🔁 Toggle language
function toggleLanguage() {
  useNepali = !useNepali;
  fetchJoke();
}

// 🎉 Show popup
function showPopup() {
  const popup = document.getElementById("popup");

  popup.style.display = "block";

  setTimeout(() => {
    popup.classList.add("show");
  }, 10);

  fetchJoke();
  changePopupColor();
}

// ❌ Hide popup
function hidePopup() {
  const popup = document.getElementById("popup");

  popup.classList.remove("show");

  setTimeout(() => {
    popup.style.display = "none";
  }, 300);
}

// 🌐 Fetch joke
async function fetchJoke() {
  const jokeElement = document.getElementById("joke");
  jokeElement.textContent = "Loading joke... 😄";

  // 🇳🇵 Nepali mode
  if (useNepali) {
    const randomIndex = Math.floor(Math.random() * nepaliJokes.length);
    currentJokeText = nepaliJokes[randomIndex];

    typeText(jokeElement, currentJokeText);
    return;
  }

  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();

    currentJokeText = data.setup + " " + data.punchline;

    typeText(jokeElement, currentJokeText);

  } catch (error) {
    console.error("API failed, using local jokes.");
    insertRandomJoke();
  }
}

// 🎯 Local jokes fallback
function insertRandomJoke() {
  constjokes = [
    "Why do programmers prefer dark mode? Because the light attracts bugs.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call a pile of cats? A meowtain!", 
        "I'll never forget my granddad's last words to me just before he died: \"Are you still holding the ladder?\"",
    "\"I work with animals,\" a guy says to his date. \"That's so sweet,\" she replies. \"I love a man who cares about animals. Where do you work?\" \"I'm a butcher,\" he replies.",
    " How does a penguin build its house? Igloos it together!",
    " Why don't eggs tell jokes? Because they might crack up!",
    "How do you make a tissue dance? You put a little boogie in it!",
    " What did the zero say to the eight? Nice belt!",
    " Why don't zombies eat clowns? They taste funny!",
    " How do you catch a squirrel? Climb a tree and act like a nut!",
    " What do you call fake spaghetti? An impasta!",
    " How do you organize a space party? You planet!",
    " Why did the bicycle fall over? Because it was two-tired!",
    " What did one wall say to the other wall? I'll meet you at the corner!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",

    " How does a cucumber become a pickle? It goes through a jarring experience!", "Never break someone’s heart, they only have one. Break their bones instead, they have 206 of them.",


  ];

  const randomIndex = Math.floor(Math.random() * jokes.length);
  currentJokeText = jokes[randomIndex];

  const jokeElement = document.getElementById("joke");
  typeText(jokeElement, currentJokeText);
}

// 🎙️ Speak joke (mobile safe)
function speakJoke() {
  if (!currentJokeText) return;

  // stop previous speech (important for mobile)
  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(currentJokeText);
  speech.lang = useNepali ? "ne-NP" : "en-US";

  window.speechSynthesis.speak(speech);
}

// ✍️ Typing animation (mobile friendly)
function typeText(element, text) {
  element.textContent = "";
  let index = 0;

  const speed = 25; // typing speed

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      element.textContent += " " + getRandomLaughingEmoji();
    }
  }

  type();
}

// 😂 Emoji generator
function getRandomLaughingEmoji() {
  const emojis = ["😸", "😂", "🤣", "😁", "😆"];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

// 🎨 Random popup color (soft colors for mobile)
function changePopupColor() {
  const colors = [
    "#ffadad", "#ffd6a5", "#fdffb6",
    "#caffbf", "#9bf6ff", "#a0c4ff",
    "#bdb2ff", "#ffc6ff"
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("popup").style.backgroundColor = randomColor;
}

// 📱 Close popup when tapping outside (mobile UX)
window.addEventListener("click", function (e) {
  const popup = document.getElementById("popup");

  if (e.target === popup) {
    hidePopup();
  }
});





