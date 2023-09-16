interface VideoBGProps {
  children?: React.ReactNode;
}

export default function VideoBG({ children }: VideoBGProps) {
  return (
    <div className="grid place-items-center">
      <video
        style={{
          gridArea: "1 / 1",
          width: "100%",
          zIndex: -1,
        }}
        controls={false}
        autoPlay
        muted
        loop
      >
        <source src="https://video.wixstatic.com/video/a0b3fa_7a17f2afe1254fd69869d2f84e8c3415/1080p/mp4/file.mp4" />
      </video>
      <div className="z-1" style={{ gridArea: "1 / 1" }}>
        {children}
      </div>
    </div>
  );
}
