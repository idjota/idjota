import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Jonatan Waibsnaider — Building high-scale, revenue-critical systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/favicon-512.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0a0a0a",
          }}
        >
          <img
            src={logoSrc}
            width={400}
            height={400}
            alt="W"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 60px",
            gap: 16,
          }}
        >
          <span
            style={{
              color: "#ffffff",
              fontSize: 48,
              fontWeight: 700,
              letterSpacing: "-1.5px",
              lineHeight: 1.1,
            }}
          >
            Jonatan Waibsnaider
          </span>
          <span
            style={{
              color: "#888888",
              fontSize: 24,
              letterSpacing: "-0.3px",
            }}
          >
            Building high-scale, revenue-critical systems 
          </span>
          <span
            style={{
              color: "#444444",
              fontSize: 18,
              marginTop: 8,
            }}
          >
            idjota.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
