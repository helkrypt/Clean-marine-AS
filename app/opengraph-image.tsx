import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Clean Marine AS — Kjemisk Rørehabilitering Offshore & Maritim";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ABYSS = "#0A1628";
const HULL = "#2E4057";
const PARCHMENT = "#F2EDE4";
const MIST = "#8A99A8";
const RUST = "#C4511A";

export default async function OpengraphImage() {
  const barlow = await fetch(
    "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=IBM+Plex+Sans:wght@400;500&display=swap",
  ).then((r) => r.text());

  const barlowBoldUrl = barlow.match(
    /src: url\((https:\/\/[^)]+)\) format\('woff2'\);[^}]+font-weight: 700/,
  )?.[1];
  const barlowSemiUrl = barlow.match(
    /src: url\((https:\/\/[^)]+)\) format\('woff2'\);[^}]+font-weight: 600/,
  )?.[1];
  const ibmRegularUrl = barlow.match(
    /src: url\((https:\/\/[^)]+)\) format\('woff2'\);[^}]+font-weight: 400/,
  )?.[1];

  const [barlowBold, barlowSemi, ibmRegular] = await Promise.all([
    barlowBoldUrl ? fetch(barlowBoldUrl).then((r) => r.arrayBuffer()) : null,
    barlowSemiUrl ? fetch(barlowSemiUrl).then((r) => r.arrayBuffer()) : null,
    ibmRegularUrl ? fetch(ibmRegularUrl).then((r) => r.arrayBuffer()) : null,
  ]);

  const fonts = [
    barlowBold && {
      name: "Barlow Condensed",
      data: barlowBold,
      weight: 700 as const,
      style: "normal" as const,
    },
    barlowSemi && {
      name: "Barlow Condensed",
      data: barlowSemi,
      weight: 600 as const,
      style: "normal" as const,
    },
    ibmRegular && {
      name: "IBM Plex Sans",
      data: ibmRegular,
      weight: 400 as const,
      style: "normal" as const,
    },
  ].filter(Boolean) as {
    name: string;
    data: ArrayBuffer;
    weight: 400 | 600 | 700;
    style: "normal";
  }[];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: `linear-gradient(135deg, ${ABYSS} 0%, ${HULL} 100%)`,
          color: PARCHMENT,
          fontFamily: "IBM Plex Sans, sans-serif",
          position: "relative",
        }}
      >
        {/* Rust accent strip — left edge */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 96,
            bottom: 96,
            width: 6,
            background: RUST,
          }}
        />

        {/* Subtle radial highlight */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 78% 28%, rgba(196,81,26,0.18) 0%, transparent 55%)",
          }}
        />

        {/* Top — brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontFamily: "Barlow Condensed",
            fontWeight: 600,
            letterSpacing: "0.18em",
            fontSize: 28,
            color: PARCHMENT,
          }}
        >
          <span>CLEAN MARINE AS</span>
          <span style={{ color: MIST, fontSize: 20 }}>—</span>
          <span style={{ color: MIST, fontSize: 20, letterSpacing: "0.2em" }}>
            EST. NORGE
          </span>
        </div>

        {/* Center — main */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div
            style={{
              fontFamily: "Barlow Condensed",
              fontWeight: 700,
              fontSize: 124,
              lineHeight: 0.95,
              textTransform: "uppercase",
              letterSpacing: "0.01em",
              color: PARCHMENT,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Kjemisk</span>
            <span>Rørehabilitering</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              marginTop: 16,
            }}
          >
            <div style={{ width: 56, height: 2, background: RUST }} />
            <span
              style={{
                fontFamily: "IBM Plex Sans",
                fontWeight: 400,
                fontSize: 26,
                color: MIST,
                letterSpacing: "0.02em",
              }}
            >
              Offshore & maritim sektor
            </span>
          </div>
        </div>

        {/* Bottom — meta row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "IBM Plex Sans",
            fontWeight: 400,
            fontSize: 22,
            color: MIST,
          }}
        >
          <span>20+ års erfaring · Nordsjøen · Internasjonalt</span>
          <span style={{ color: PARCHMENT, letterSpacing: "0.04em" }}>
            cleanmarin.no
          </span>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
