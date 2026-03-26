import {
  FiZap,
  FiCloudRain,
  FiHeart,
  FiTarget,
  FiSun,
  FiMoon,
  FiMusic,
  FiSmile,
} from "react-icons/fi";

const TAGS = [
  {
    label: "Energico",
    icon: <FiZap />,
    hoverClass: "group-hover:text-yellow-400",
    bgColor: "bg-yellow-400/20",
    borderColor: "border-yellow-400/20",
  },
  {
    label: "Malinconico",
    icon: <FiCloudRain />,
    hoverClass: "group-hover:text-blue-300",
    bgColor: "bg-blue-300/20",
    borderColor: "border-blue-300/20",
  },
  {
    label: "Romantico",
    icon: <FiHeart />,
    hoverClass: "group-hover:text-pink-500",
    bgColor: "bg-pink-500/20",
    borderColor: "border-pink-500/20",
  },
  {
    label: "Focus",
    icon: <FiTarget />,
    hoverClass: "group-hover:text-violet-400",
    bgColor: "bg-violet-400/20",
    borderColor: "border-violet-400/20",
  },
  {
    label: "Felice",
    icon: <FiSun />,
    hoverClass: "group-hover:text-yellow-300",
    bgColor: "bg-yellow-300/20",
    borderColor: "border-yellow-300/20",
  },
  {
    label: "Notturno",
    icon: <FiMoon />,
    hoverClass: "group-hover:text-sky-400",
    bgColor: "bg-sky-400/20",
    borderColor: "border-sky-400/20",
  },
  {
    label: "Relax",
    icon: <FiMusic />,
    hoverClass: "group-hover:text-green-400",
    bgColor: "bg-green-400/20",
    borderColor: "border-green-400/20",
  },
  {
    label: "Allegria",
    icon: <FiSmile />,
    hoverClass: "group-hover:text-orange-400",
    bgColor: "bg-orange-400/20",
    borderColor: "border-orange-400/20",
  },
];

export default function MoodSelector({
  selectedTags,
  setSelectedTags,
  customText,
  setCustomText,
  onGenerate,
  loading,
}) {
  const toggleTag = (tagLabel) => {
    setSelectedTags((prev) =>
      prev.includes(tagLabel)
        ? prev.filter((t) => t !== tagLabel)
        : [...prev, tagLabel],
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
          {TAGS.map(({ label, icon, hoverClass, bgColor, borderColor }) => (
            <button
              key={label}
              onClick={() => toggleTag(label)}
              className={`group px-4 py-2 rounded-full text-sm font-medium border flex items-center gap-2 transition-all duration-200 cursor-pointer
                ${
                  selectedTags.includes(label)
                    ? ` ${bgColor} ${borderColor} text-white`
                    : "bg-transparent border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white"
                }`}
            >
              <span
                className={`transition-colors duration-200 
                ${selectedTags.includes(label) ? "text-white" : hoverClass}
              `}
              >
                {icon}
              </span>
              <span>{label}</span>
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
          bg-violet-600 hover:bg-violet-500 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-white flex items-center justify-center gap-2"
      >
        {loading ? (
          "Curating your playlist..."
        ) : (
          <>
            <FiMusic size={18} />
            Generate Playlist
          </>
        )}
      </button>
    </div>
  );
}
