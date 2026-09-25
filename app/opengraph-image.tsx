import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";
import { OgMark } from "@/lib/og-mark";

export const alt = "Justin Pennington — Founder of Infraxio, Ponte Vedra";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const bg = await readFile(join(process.cwd(), "public/images/hero-atlantic.jpg"), "base64");
const bgSrc = `data:image/jpeg;base64,${bg}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative" }}>
        <img src={bgSrc} alt="" width={1200} height={630} style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 630, objectFit: "cover" }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            background: "linear-gradient(120deg, rgba(15,36,64,0.95) 0%, rgba(15,36,64,0.86) 55%, rgba(15,36,64,0.62) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            color: "#fff",
          }}
        >
          <OgMark size={132} />
          <div style={{ fontSize: 76, fontWeight: 700, marginTop: 36, letterSpacing: -2 }}>
            Justin Pennington
          </div>
          <div style={{ fontSize: 32, marginTop: 14, color: "rgba(255,255,255,0.82)" }}>
            Founder of Infraxio · Ponte Vedra, Florida
          </div>
          <div style={{ width: 90, height: 5, background: "#EA6726", borderRadius: 999, marginTop: 34 }} />
        </div>
      </div>
    ),
    size,
  );
}
