import { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import PlaylistResult from "./components/PlaylistResult";

export default function App() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [customText, setCustomText] = useState("");
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (selectedTags.length === 0 && !customText.trim()) return;
    setLoading(true);
    setPlaylist(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/generate`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ tags: selectedTags, customText }),
        },
      );
      const data = await response.json();
      setPlaylist(data);
      console.log("Generated playlist:", data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setPlaylist(null);
    setSelectedTags([]);
    setCustomText("");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col items-center px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          🎵 MoodTune
        </h1>
        <p className="text-zinc-400 mt-2 text-sm">
          Tell us how you feel. We'll find your soundtrack.
        </p>
      </header>

      {!playlist ? (
        <MoodSelector
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          customText={customText}
          setCustomText={setCustomText}
          onGenerate={handleGenerate}
          loading={loading}
        />
      ) : (
        <PlaylistResult playlist={playlist} onReset={handleReset} />
      )}
    </div>
  );
}
