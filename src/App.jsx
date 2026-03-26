import { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import PlaylistResult from "./components/PlaylistResult";
import { generatePlaylist } from "./data/mockAI";

export default function App() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [customText, setCustomText] = useState("");
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (selectedTags.length === 0 && !customText.trim()) return;
    setLoading(true);
    setPlaylist(null);
    await new Promise((r) => setTimeout(r, 1800));
    const result = generatePlaylist(selectedTags, customText);
    setPlaylist(result);
    setLoading(false);
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
