import { FaSpotify, FaYoutube } from "react-icons/fa";

export default function PlaylistResult({ playlist, onReset }) {
  const getSpotifyLink = (track) =>
    `https://open.spotify.com/search/${encodeURIComponent(track.query)}`;

  const getYouTubeLink = (track) =>
    `https://www.youtube.com/results?search_query=${encodeURIComponent(track.query)}`;

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
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 hover:border-zinc-600 transition-colors">
            <div key={i} className="flex items-start gap-4 ">
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
            <div className="flex gap-4 ps-9 mt-3">
              <a
                href={getSpotifyLink(track)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition"
              >
                <FaSpotify size={18} />
                <span className="text-sm">Spotify</span>
              </a>

              <a
                href={getYouTubeLink(track)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-red-400 hover:text-red-300 transition"
              >
                <FaYoutube size={18} />
                <span className="text-sm">YouTube</span>
              </a>
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
