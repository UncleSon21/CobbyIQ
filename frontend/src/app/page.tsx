"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main style={{ background: "#08112A", color: "#F0EDE4", fontFamily: "'Sora', sans-serif", overflowX: "hidden" }}>

      {/* ── Nav ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 2rem",
        height: "64px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(8,17,42,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
        transition: "all 0.3s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <HexLogo />
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: "1.25rem", color: "#F0EDE4", letterSpacing: "0.02em" }}>
            Cobby<span style={{ color: "#C9A84C" }}>IQ</span>
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link href="/login" style={{ color: "#A8A49C", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#F0EDE4")}
            onMouseLeave={e => (e.currentTarget.style.color = "#A8A49C")}>
            Sign in
          </Link>
          <Link href="/register" style={{
            background: "#C9A84C", color: "#08112A", fontSize: "0.875rem", fontWeight: 600,
            padding: "0.5rem 1.25rem", borderRadius: "6px", textDecoration: "none",
            transition: "background 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#E5C678")}
            onMouseLeave={e => (e.currentTarget.style.background = "#C9A84C")}>
            Get started
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section ref={heroRef} style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "8rem 2rem 4rem",
        position: "relative", textAlign: "center",
      }}>
        {/* Background hex grid */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: 0.06, pointerEvents: "none" }}>
          <HexGrid />
        </div>

        {/* Glow */}
        <div style={{
          position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)",
          width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", maxWidth: "800px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: "100px", padding: "0.35rem 1rem", marginBottom: "2rem",
            fontSize: "0.8rem", color: "#C9A84C", letterSpacing: "0.08em", textTransform: "uppercase",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A84C", display: "inline-block" }} />
            Intelligent Onboarding
          </div>

          <h1 style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 400, lineHeight: 1.1,
            margin: "0 0 1.5rem",
            color: "#F0EDE4",
          }}>
            Onboard smarter.<br />
            <span style={{ color: "#C9A84C" }}>Answer faster.</span>
          </h1>

          <p style={{
            fontSize: "1.125rem", color: "#A8A49C", lineHeight: 1.7,
            maxWidth: "560px", margin: "0 auto 2.5rem",
          }}>
            CobbyIQ turns your company documents into an AI-powered knowledge base — so new hires get answers instantly, not days later.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/register" style={{
              background: "#C9A84C", color: "#08112A", fontWeight: 700,
              padding: "0.875rem 2rem", borderRadius: "8px", textDecoration: "none",
              fontSize: "0.95rem", transition: "all 0.2s",
              boxShadow: "0 0 24px rgba(201,168,76,0.25)",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#E5C678"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Start for free
            </Link>
            <Link href="/login" style={{
              background: "transparent", color: "#F0EDE4",
              border: "1px solid rgba(240,237,228,0.2)",
              padding: "0.875rem 2rem", borderRadius: "8px", textDecoration: "none",
              fontSize: "0.95rem", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(240,237,228,0.5)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(240,237,228,0.2)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Sign in →
            </Link>
          </div>

          <p style={{ fontSize: "0.8rem", color: "#5C5A54", marginTop: "1.5rem" }}>
            No credit card required · Setup in minutes
          </p>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          color: "#5C5A54", fontSize: "0.75rem", letterSpacing: "0.1em",
          animation: "bounce 2s infinite",
        }}>
          <span>SCROLL</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #5C5A54, transparent)" }} />
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <SectionLabel>How it works</SectionLabel>
        <h2 style={{
          fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 400, margin: "1rem 0 4rem", color: "#F0EDE4",
        }}>
          Three steps to smarter onboarding
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {[
            { step: "01", title: "Upload your docs", desc: "Import PDFs, policies, handbooks, and SOPs. CobbyIQ ingests and indexes everything automatically." },
            { step: "02", title: "AI builds the brain", desc: "Our RAG pipeline processes your documents into a searchable, context-aware knowledge base." },
            { step: "03", title: "New hires ask away", desc: "Employees get instant, accurate answers from your actual company knowledge — 24/7, no manager needed." },
          ].map((item) => (
            <div key={item.step} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "12px", padding: "2rem",
              transition: "border-color 0.3s, transform 0.3s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.3)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}>
              <div style={{
                fontFamily: "'Instrument Serif', serif", fontSize: "3rem",
                color: "rgba(201,168,76,0.2)", lineHeight: 1, marginBottom: "1rem",
              }}>{item.step}</div>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 600, margin: "0 0 0.75rem", color: "#F0EDE4" }}>{item.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "#A8A49C", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: "6rem 2rem", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionLabel>Features</SectionLabel>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400, margin: "1rem 0 4rem", color: "#F0EDE4",
          }}>
            Everything your team needs
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {[
              { icon: "◈", title: "RAG-powered answers", desc: "Responses grounded in your actual documents, not hallucinations." },
              { icon: "◎", title: "Role-based access", desc: "Admins manage knowledge. Employees access what they need." },
              { icon: "◉", title: "Multi-format upload", desc: "PDFs, Word docs, policies — all supported out of the box." },
              { icon: "◆", title: "Analytics dashboard", desc: "See what your team is asking and identify knowledge gaps." },
              { icon: "◇", title: "Instant setup", desc: "Go from zero to deployed in under 10 minutes." },
              { icon: "○", title: "Built for small teams", desc: "Designed for companies with 20–150 employees." },
            ].map((f) => (
              <div key={f.title} style={{ padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", color: "#C9A84C", marginBottom: "0.75rem" }}>{f.icon}</div>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 600, margin: "0 0 0.5rem", color: "#F0EDE4" }}>{f.title}</h4>
                <p style={{ fontSize: "0.85rem", color: "#A8A49C", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "8rem 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400, margin: "0 0 1.5rem", color: "#F0EDE4", lineHeight: 1.15,
          }}>
            Ready to transform your onboarding?
          </h2>
          <p style={{ color: "#A8A49C", fontSize: "1rem", marginBottom: "2.5rem", lineHeight: 1.7 }}>
            Join forward-thinking companies using CobbyIQ to onboard smarter and retain knowledge better.
          </p>
          <Link href="/register" style={{
            background: "#C9A84C", color: "#08112A", fontWeight: 700,
            padding: "1rem 2.5rem", borderRadius: "8px", textDecoration: "none",
            fontSize: "1rem", transition: "all 0.2s", display: "inline-block",
            boxShadow: "0 0 32px rgba(201,168,76,0.3)",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#E5C678"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.transform = "translateY(0)"; }}>
            Get started for free
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "2rem", textAlign: "center",
        color: "#5C5A54", fontSize: "0.8rem",
        display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem",
      }}>
        <HexLogo size={16} />
        <span>© 2026 CobbyIQ. Intelligent Onboarding.</span>
      </footer>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase",
      color: "#C9A84C", fontWeight: 600,
    }}>
      {children}
    </div>
  );
}

function HexLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <polygon points="14,2 25,8 25,20 14,26 3,20 3,8" fill="#C9A84C" opacity="0.9" />
      <polygon points="14,6 22,10.5 22,19.5 14,24 6,19.5 6,10.5" fill="#08112A" />
      <polygon points="14,10 18,12.5 18,17.5 14,20 10,17.5 10,12.5" fill="#C9A84C" opacity="0.6" />
    </svg>
  );
}

function HexGrid() {
  const hexes = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 12; col++) {
      const x = col * 80 + (row % 2 === 0 ? 0 : 40);
      const y = row * 70;
      hexes.push(<polygon key={`${row}-${col}`} points={`${x+30},${y} ${x+60},${y+17} ${x+60},${y+51} ${x+30},${y+68} ${x},${y+51} ${x},${y+17}`} fill="none" stroke="#C9A84C" strokeWidth="1" />);
    }
  }
  return <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>{hexes}</svg>;
}