import Image from "next/image";
import { site } from "@/lib/site";

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <Image
      src={site.headshot}
      alt="Justin Pennington"
      width={40}
      height={40}
      className={`rounded-full object-cover ${className}`}
    />
  );
}
