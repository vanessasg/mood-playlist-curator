import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

function AudioPlayer({ src, isActive, onPlay }) {
  const audioRef = useRef(null);
  const barRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(0);
  const [dragging, setDragging] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isActive) {
      onPlay(null); // stop
    } else {
      onPlay(true); // play questo
    }
  };

  // sincronizza audio con isActive
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isActive) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isActive]);

  // progress update
  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      if (!audio || dragging) return;
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
      setTime(audio.currentTime);
    };

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, [dragging]);

  // handle click/drag sulla barra
  const seek = (e) => {
    const audio = audioRef.current;
    const bar = barRef.current;
    if (!audio || !bar) return;

    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * audio.duration;
    audio.currentTime = newTime;
    setProgress((newTime / audio.duration) * 100);
    setTime(newTime);
  };

  const handleMouseDown = () => setDragging(true);
  const handleMouseMove = (e) => dragging && seek(e);
  const handleMouseUp = (e) => {
    if (dragging) {
      seek(e);
      setDragging(false);
    }
  };

  return (
    <div
      className="w-full sm:w-60 ml-auto flex items-center gap-3 backdrop-blur"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <button
        onClick={togglePlay}
        className="w-5 h-5 flex items-center justify-center rounded-full text-zinc-400 hover:text-zinc-200 cursor-pointer transition"
      >
        {isActive ? <FaPause size={12} /> : <FaPlay size={12} />}
      </button>

      <div
        ref={barRef}
        className="flex-1 h-1.5 bg-zinc-700 rounded-full overflow-hidden cursor-pointer"
        onClick={seek}
        onMouseDown={handleMouseDown}
      >
        <div
          className="h-full bg-violet-400 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <span className="text-xs text-zinc-400 w-10">
        {Math.floor(time / 60)
          .toString()
          .padStart(2, "0")}
        :
        {Math.floor(time % 60)
          .toString()
          .padStart(2, "0")}
      </span>

      <audio ref={audioRef} src={src} />
    </div>
  );
}

export default AudioPlayer;
