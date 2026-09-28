import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "linear-gradient(135deg, #22d3ee 0%, #818cf8 55%, #f472b6 100%)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path d="M8 5.14v13.72c0 .9 1 1.44 1.75.94l10.5-6.86a1.1 1.1 0 0 0 0-1.88L9.75 4.2C9 3.7 8 4.24 8 5.14Z" fill="white" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
