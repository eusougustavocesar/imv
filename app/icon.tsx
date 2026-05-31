import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 32,
        height: 32,
        background: "#B5894A",
        borderRadius: 7,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Georgia, serif",
        fontSize: 17,
        fontWeight: 700,
        color: "white",
        letterSpacing: "-0.5px",
      }}
    >
      M
    </div>,
    { ...size }
  )
}
