import { Tulip } from "./Tulip";

export function TulipCorners() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="absolute -top-4 -left-4 animate-sway">
        <Tulip size={70} color="#f8a5c2" />
      </div>
      <div className="absolute -top-2 -right-6 animate-sway" style={{ animationDelay: "1s" }}>
        <Tulip size={64} color="#e0aaff" stemColor="#8db580" />
      </div>
      <div className="absolute -bottom-6 -left-2 animate-sway" style={{ animationDelay: "0.5s" }}>
        <Tulip size={80} color="#ffb3c6" />
      </div>
      <div className="absolute -bottom-4 -right-4 animate-sway" style={{ animationDelay: "1.5s" }}>
        <Tulip size={74} color="#c8b6ff" stemColor="#8db580" />
      </div>
    </div>
  );
}
