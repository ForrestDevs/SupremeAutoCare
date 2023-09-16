import videoBG from "@/assets/videos/home.mp4";

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
        <source src={videoBG} />
      </video>
      <div className="z-1" style={{ gridArea: "1 / 1" }}>{children}</div>
    </div>
  );
}
