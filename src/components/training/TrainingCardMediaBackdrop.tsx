/** Eğitim kartı görsel alanı — hafif abstract arka plan */
export function TrainingCardMediaBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="training-card-media-gradient absolute inset-0" />
      <div className="training-card-media-grid absolute inset-0 opacity-50" />
      <div className="training-card-media-orb-a absolute -left-[15%] top-[5%] h-[70%] w-[55%] rounded-full bg-brand-300/40 blur-2xl" />
      <div className="training-card-media-orb-b absolute -right-[10%] bottom-[0%] h-[65%] w-[50%] rounded-full bg-brand-400/25 blur-2xl" />
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 400 240"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          d="M0 120 Q100 60 200 120 T400 120"
          stroke="#0066cc"
          strokeWidth="1"
          strokeOpacity="0.2"
        />
        <path
          d="M40 180 Q200 100 360 60"
          stroke="#0066cc"
          strokeWidth="0.75"
          strokeOpacity="0.15"
          strokeDasharray="6 8"
        />
        <circle cx="320" cy="48" r="2" fill="#0066cc" fillOpacity="0.25" />
        <circle cx="72" cy="200" r="1.5" fill="#0066cc" fillOpacity="0.3" />
      </svg>
      <div className="training-card-media-shimmer absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-100/30 via-transparent to-white/20" />
    </div>
  );
}
