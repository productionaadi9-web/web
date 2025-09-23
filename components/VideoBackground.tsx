export default function VideoBackground({ children }: { children: React.ReactNode }) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/assets/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }