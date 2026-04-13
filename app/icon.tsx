import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const logoData = await readFile(join(process.cwd(), "public/favicon-512.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2px",
        }}
      >
        <img
          src={logoSrc}
          width={32}
          height={32}
          alt="W"
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </div>
    ),
    { ...size }
  );
}
