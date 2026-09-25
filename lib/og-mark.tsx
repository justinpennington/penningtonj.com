export function OgMark({ size }: { size: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.22,
        background: "#0F2440",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: `${Math.max(1, size * 0.02)}px solid rgba(255,255,255,0.18)`,
      }}
    >
      <div
        style={{
          color: "#fff",
          fontSize: size * 0.47,
          fontWeight: 700,
          fontFamily: "serif",
          letterSpacing: -2,
          lineHeight: 1,
        }}
      >
        JP
      </div>
      <div
        style={{
          width: size * 0.44,
          height: size * 0.05,
          borderRadius: 999,
          background: "#EA6726",
          marginTop: size * 0.07,
        }}
      />
    </div>
  );
}
