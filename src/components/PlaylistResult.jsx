export default function PlaylistResult({ playlist, onReset }) {
  return (
    <div className="w-full max-w-xl flex flex-col gap-6">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
        <p className="text-xs uppercase tracking-widest text-violet-400 mb-1">
          Your Playlist
        </p>
        <h2 className="text-2xl font-bold text-white mb-3">{playlist.name}</h2>
        <p className="text-zinc-400 text-sm italic">{playlist.vibe}</p>
      </div>

      <div className="flex flex-col gap-2">
        {playlist.tracks.map((track, i) => (
          <div
            key={i}
            className="flex items-start gap-4 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 hover:border-zinc-600 transition-colors"
          >
            <span className="text-zinc-600 text-sm font-mono mt-0.5 w-5 shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col">
              <span className="text-white text-sm font-semibold">
                {track.title}
              </span>
              <span className="text-zinc-500 text-xs">{track.artist}</span>
              <span className="text-zinc-600 text-xs mt-1 italic">
                {track.note}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onReset}
        className="w-full py-3 rounded-xl font-semibold text-sm tracking-wide border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white transition-all duration-200 cursor-pointer"
      >
        ← Try another mood
      </button>
    </div>
  );
}
