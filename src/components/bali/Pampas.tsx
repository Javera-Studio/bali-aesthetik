const grasLeft = "/images/gras_left.png";
const grasRight = "/images/gras_right.png";

type Side = "left" | "right";

type Props = {
  side: Side;
  className?: string;
  opacity?: number;
  blur?: number;
  rotate?: number;
};

export function Pampas({
  side,
  className = "",
  opacity = 0.18,
  blur = 0,
  rotate = 0,
}: Props) {
  const src = side === "left" ? grasLeft : grasRight;
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      loading="lazy"
      className={`pointer-events-none absolute select-none hidden md:block ${className}`}
      style={{
        opacity,
        filter: blur ? `blur(${blur}px)` : undefined,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        zIndex: 0,
      }}
    />
  );
}
