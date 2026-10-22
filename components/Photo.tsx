import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
};

export function Photo({ src, alt, priority = false, sizes = "(max-width: 980px) 100vw, 50vw" }: PhotoProps) {
  return (
    <div className="photo">
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} />
    </div>
  );
}

export function SkylineMark() {
  return (
    <div className="mark" aria-hidden="true">
      <span style={{ height: 30, background: "#A8D7F0" }} />
      <span style={{ height: 44, background: "#2F6DB5" }} />
      <span style={{ height: 22, background: "#A8D7F0" }} />
    </div>
  );
}
