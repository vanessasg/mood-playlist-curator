const playlists = {
  energico: {
    name: "Full Power Mode",
    vibe: "High-octane energy to fuel your momentum. Turn it up and own the moment.",
    tracks: [
      {
        title: "MIROH",
        artist: "Stray Kids",
        note: "Pure adrenaline from start to finish",
      },
      {
        title: "Can't Hold Us",
        artist: "Macklemore & Ryan Lewis",
        note: "Unstoppable anthem",
      },
      {
        title: "Power",
        artist: "Kanye West",
        note: "Grandiose and relentless",
      },
      {
        title: "Thunder",
        artist: "Imagine Dragons",
        note: "Electric buildup and release",
      },
      { title: "Not Afraid", artist: "Eminem", note: "Raw determination" },
      { title: "JUMP", artist: "Kris Kross", note: "Infectious hype energy" },
      {
        title: "Stronger",
        artist: "Kanye West",
        note: "Iconic momentum builder",
      },
      { title: "God's Plan", artist: "Drake", note: "Confident and smooth" },
    ],
  },
  malinconico: {
    name: "Rainy Window",
    vibe: "For the quiet ache of something unnamed. Let the music sit with you.",
    tracks: [
      {
        title: "Someone Like You",
        artist: "Adele",
        note: "The classic heartache",
      },
      { title: "8FADE", artist: "IU", note: "Delicate and bittersweet" },
      { title: "Skinny Love", artist: "Bon Iver", note: "Raw and fragile" },
      {
        title: "The Night Will Always Win",
        artist: "Manchester Orchestra",
        note: "Heavy and honest",
      },
      {
        title: "Death With Dignity",
        artist: "Sufjan Stevens",
        note: "Quietly devastating",
      },
      { title: "Liability", artist: "Lorde", note: "Painfully self-aware" },
      {
        title: "Motion Sickness",
        artist: "Phoebe Bridgers",
        note: "Wry and wounded",
      },
      { title: "Blue", artist: "Billie Eilish", note: "Soft and hollow" },
    ],
  },
  romantico: {
    name: "Golden Hour",
    vibe: "Warm light, slow time, and someone worth staying for.",
    tracks: [
      {
        title: "Make You Feel My Love",
        artist: "Adele",
        note: "Timeless tenderness",
      },
      { title: "Perfect", artist: "Ed Sheeran", note: "Effortlessly romantic" },
      {
        title: "Spring Day",
        artist: "BTS",
        note: "Longing and love intertwined",
      },
      { title: "At Last", artist: "Etta James", note: "Classic warmth" },
      { title: "Lover", artist: "Taylor Swift", note: "Breezy and sincere" },
      {
        title: "Can't Help Falling in Love",
        artist: "Elvis Presley",
        note: "Eternal and gentle",
      },
      {
        title: "Lucky",
        artist: "Jason Mraz & Colbie Caillat",
        note: "Light and sweet",
      },
      {
        title: "LOVE SCENARIO",
        artist: "iKON",
        note: "K-pop romance at its finest",
      },
    ],
  },
  focus: {
    name: "Deep Work",
    vibe: "Zero distractions. Just you and the task ahead.",
    tracks: [
      {
        title: "Experience",
        artist: "Ludovico Einaudi",
        note: "Meditative and expansive",
      },
      {
        title: "Comptine d'un autre été",
        artist: "Yann Tiersen",
        note: "Quiet focus",
      },
      { title: "Strobe", artist: "deadmau5", note: "Hypnotic flow state" },
      { title: "Intro", artist: "The xx", note: "Minimal and immersive" },
      {
        title: "Breathe",
        artist: "Télépopmusik",
        note: "Smooth and grounding",
      },
      {
        title: "Divenire",
        artist: "Ludovico Einaudi",
        note: "Building concentration",
      },
      { title: "Re: Stacks", artist: "Bon Iver", note: "Calm and textured" },
      {
        title: "On + On",
        artist: "Cartoon ft. Daniel Levi",
        note: "Steady and motivating",
      },
    ],
  },
  felice: {
    name: "Sunshine Playlist",
    vibe: "Good vibes only. Let the day be exactly this.",
    tracks: [
      {
        title: "Happy",
        artist: "Pharrell Williams",
        note: "Impossible not to smile",
      },
      { title: "DYNAMITE", artist: "BTS", note: "Pure joy in a song" },
      {
        title: "Can't Stop the Feeling!",
        artist: "Justin Timberlake",
        note: "Instant mood lift",
      },
      {
        title: "Walking on Sunshine",
        artist: "Katrina & The Waves",
        note: "80s bliss",
      },
      { title: "Good as Hell", artist: "Lizzo", note: "Empowering and fun" },
      {
        title: "Shake It Off",
        artist: "Taylor Swift",
        note: "Carefree and catchy",
      },
      { title: "Permission to Dance", artist: "BTS", note: "Light and free" },
      {
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        note: "Groovy and irresistible",
      },
    ],
  },
  notturno: {
    name: "3AM Thoughts",
    vibe: "The city is asleep. Your mind isn't. This is for that hour.",
    tracks: [
      {
        title: "Night Owl",
        artist: "Galimatias",
        note: "Dreamy and late-night smooth",
      },
      { title: "Solo", artist: "Frank Ocean", note: "Introspective and quiet" },
      {
        title: "Nights",
        artist: "Frank Ocean",
        note: "Drifting and cinematic",
      },
      { title: "R&B Slow Jam", artist: "SZA", note: "Soft and hazy" },
      { title: "Ivy", artist: "Frank Ocean", note: "Nostalgic 3AM feeling" },
      {
        title: "Neon Moon",
        artist: "Brooks & Dunn",
        note: "Lonely bar at midnight",
      },
      {
        title: "Sleepover",
        artist: "Hayley Williams",
        note: "Tender and vulnerable",
      },
      {
        title: "moonchild",
        artist: "RM",
        note: "Reflective late-night poetry",
      },
    ],
  },
};

const tagToKey = {
  "⚡ Energico": "energico",
  "🌧️ Malinconico": "malinconico",
  "🌸 Romantico": "romantico",
  "🎯 Focus": "focus",
  "☀️ Felice": "felice",
  "🌙 Notturno": "notturno",
};

// eslint-disable-next-line no-unused-vars
export function generatePlaylist(tags, customText) {
  const key = tagToKey[tags[0]] || "felice";
  return playlists[key];
}
