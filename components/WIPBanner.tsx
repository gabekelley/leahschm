"use client";

const LABEL = "WORK IN PROGRESS";
const COUNT = 30;

const labelStyle: React.CSSProperties = {
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  fontWeight: 500,
  fontSize: "20px",
  color: "#202F1D",
  letterSpacing: "-0.04em",
  marginRight: "24px",
  flexShrink: 0,
};

function Labels() {
  return (
    <>
      {Array.from({ length: COUNT }, (_, i) => (
        <span key={i} style={labelStyle}>{LABEL}</span>
      ))}
    </>
  );
}

export default function WIPBanner() {
  return (
    <div className="fixed inset-0 z-[40] pointer-events-none overflow-hidden">
      <div
        className="absolute flex items-center"
        style={{
          top: "50%",
          left: "-100%",
          width: "400%",
          transform: "translateY(-50%) rotate(-35deg)",
          backgroundColor: "#FFCA27",
          padding: "10px 0",
        }}
      >
        {/* Two identical sets so the loop is seamless */}
        <span
          className="whitespace-nowrap"
          style={{
            display: "flex",
            animation: "wip-marquee 80s linear infinite",
          }}
        >
          <Labels />
          <Labels />
        </span>
      </div>
    </div>
  );
}
