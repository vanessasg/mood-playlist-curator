# MoodTune 🎵
### AI-Powered Playlist Generator

MoodTune è un'app web **AI-powered** che crea playlist musicali personalizzate in base al tuo umore e input testuali.
Seleziona i tuoi stati d'animo, scrivi una descrizione opzionale e lascia che l'Intelligenza Artificiale curi una playlist per te — con anteprima audio reale e link diretti a Spotify e YouTube.

🔗 **[Live Demo](https://vanessasg.github.io/mood-playlist-curator/)**

---

## 🚀 Features

- 🤖 **AI-Powered (Groq)** — playlist generate da un LLM reale tramite Groq API, basate su mood e testo libero
- 🎵 **Audio Preview via Deezer** — ogni traccia include un'anteprima audio di 30s recuperata dalle API Deezer
- ▶️ **Player audio integrato** — play/pause, progress bar cliccabile, gestione esclusiva tra più player
- 🌈 **Mood Selector interattivo** — tag colorati con icone animate che riflettono il mood selezionato
- 🔗 **Link diretti** — apri ogni traccia su Spotify o cercala su YouTube
- 🔐 **API key protette** — chiamate AI gestite server-side tramite Vercel Serverless Functions
- 💻 **Responsive Design** — ottimizzato per desktop e mobile

---

## 🛠️ Stack tecnico

| Utilizzo | Tecnologia |
|---|---|
| Frontend | React + Vite |
| Styling | TailwindCSS |
| AI / LLM | [Groq API](https://groq.com) |
| Audio Preview | [Deezer API](https://developers.deezer.com) |
| Backend (serverless) | Vercel Functions (`/api`) |
| Deploy | [Github](https://github.com/) |

---

## 🔐 Architettura API

Le chiamate all'AI non avvengono direttamente dal browser: passano attraverso una **Vercel Serverless Function** (`/api/generate.js`) che:

1. Riceve mood e testo dall'utente
2. Chiama Groq API con la chiave protetta lato server
3. Arricchisce ogni traccia con una preview audio da Deezer
4. Restituisce la playlist completa al client

---

## 📂 Struttura del progetto
```
mood-playlist-curator/
├─ src/
│  ├─ components/     
│  │  └── AudioPlayer.jsx
│  │  └── MoodSelector.jsx
│  │  └── PlaylistResult.jsx
│  ├─ App.jsx              # componente principale
│  ├─ index.css            # stili Tailwind personalizzati
│  └─ main.jsx             # entry point
```

---

## 💻 Installazione locale

1. Clona il repository:
```bash
git clone https://github.com/vanessasg/mood-playlist-curator.git
cd mood-playlist-curator
```

2. Installa le dipendenze:
```bash
npm install
```

3. Crea il file `.env.local` nella root:
```env
GROQ_API_KEY=your_groq_api_key_here
```

4. Avvia il progetto :
```bash
npm run dev
```

> ⚠️ `npm run dev` avvia solo il frontend React.

---

## Author

**vanessasg** — [vanessasg.com](https://www.vanessasg.com) · [GitHub](https://github.com/vanessasg)