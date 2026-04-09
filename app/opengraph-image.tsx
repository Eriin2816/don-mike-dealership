import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Don Mike Auto Dealership — Multi-Brand Vehicles in Gainesville, FL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  // Fetch logo from public folder — works in both edge and Node runtimes
  const logoRes = await fetch(
    new URL("/og-logo.png", "https://don-mike-dealership.vercel.app")
  );
  const logoBuffer = await logoRes.arrayBuffer();
  const logoBase64 = `data:image/png;base64,${Buffer.from(logoBuffer).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1E3A5F 0%, #0F172A 60%, #1A56DB 100%)",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(26,86,219,0.25)",
            filter: "blur(80px)",
          }}
        />
        {/* Glow top-left */}
        <div
          style={{
            position: "absolute",
            top: -60,
            left: -60,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(74,125,181,0.15)",
            filter: "blur(60px)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 10,
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          {/* Logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoBase64}
            alt="Don Mike Logo"
            width={120}
            height={120}
            style={{ objectFit: "contain", marginBottom: 28 }}
          />

          {/* Name */}
          <div
            style={{
              fontSize: 52,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Don Mike Auto Dealership
          </div>

          {/* Brands */}
          <div
            style={{
              fontSize: 26,
              fontWeight: 400,
              color: "rgba(255,255,255,0.75)",
              marginBottom: 32,
            }}
          >
            Honda · Toyota · Mazda · GMC · Mercedes-Benz
          </div>

          {/* Location pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(26,86,219,0.35)",
              border: "1px solid rgba(74,125,181,0.5)",
              borderRadius: 40,
              padding: "10px 28px",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#4A7DB5",
              }}
            />
            <span
              style={{
                fontSize: 20,
                color: "rgba(255,255,255,0.85)",
                fontWeight: 600,
                letterSpacing: "0.08em",
              }}
            >
              GAINESVILLE, FL
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
