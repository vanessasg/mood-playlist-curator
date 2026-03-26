const TAGS = [
  "⚡ Energico",
  "🌧️ Malinconico",
  "🌸 Romantico",
  "🎯 Focus",
  "☀️ Felice",
  "🌙 Notturno",
];

export default function MoodSelector({
  selectedTags,
  setSelectedTags,
  customText,
  setCustomText,
  onGenerate,
  loading,
}) {
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const canGenerate = selectedTags.length > 0 || customText.trim().length > 0;

  return (
    <div className="w-full max-w-xl flex flex-col gap-6">
      <div>
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
          How are you feeling?
        </p>
        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer
                ${
                  selectedTags.includes(tag)
                    ? "bg-violet-600 border-violet-600 text-white"
                    : "bg-transparent border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
          Anything else? <span className="normal-case">(optional)</span>
        </p>
        <textarea
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          placeholder="e.g. driving at night, missing someone, need to study for an exam..."
          rows={3}
          className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 resize-none focus:outline-none focus:border-violet-500 transition-colors"
        />
      </div>

      <button
        onClick={onGenerate}
        disabled={!canGenerate || loading}
        className="w-full py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 cursor-pointer
          bg-violet-600 hover:bg-violet-500 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-white"
      >
        {loading ? "Curating your playlist..." : "Generate Playlist ✨"}
      </button>
    </div>
  );
}
