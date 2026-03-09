
import { useState, useEffect, useRef } from "react";

const products = [
  { id: 1, name: "iPhone 16 Pro", tagline: "Titanio. Tan pro. Tan iPhone.", description: "El chip A18 Pro. Cámara de 48 MP con zoom óptico 5x.", price: "Desde $5.999.000", bg: "#1d1d1f", accent: "#f5f5f7", image: "📱" },
  { id: 2, name: "MacBook Air M3", tagline: "Alas de aire. Potencia de M3.", description: "El chip M3 lleva el rendimiento a nuevas alturas.", price: "Desde $4.499.000", bg: "#f5f5f7", accent: "#1d1d1f", image: "💻" },
  { id: 3, name: "Apple Watch Ultra 2", tagline: "El reloj más capaz de Apple.", description: "Carcasa de titanio de 49 mm. GPS de doble frecuencia.", price: "Desde $3.999.000", bg: "#000000", accent: "#ff6b00", image: "⌚" },
  { id: 4, name: "iPad Pro M4", tagline: "Absolutamente increíblemente delgado.", description: "El iPad más delgado jamás creado. Chip M4.", price: "Desde $3.299.000", bg: "#e8e8ed", accent: "#1d1d1f", image: "🖥️" },
];

const footerCols = [
  { title: "Tienda", links: ["Encuentra una tienda", "Genius Bar", "Today at Apple", "Apple Camp"] },
  { title: "Apple Wallet", links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"] },
  { title: "Cuenta", links: ["Gestiona tu Apple ID", "Apple Store", "iCloud", "Apple Media"] },
  { title: "Apple Store", links: ["Encontrar tienda", "Especialistas", "Apple Trade In", "Financiación"] },
  { title: "Para empresas", links: ["Apple y negocios", "Compra para negocios", "Apple Business Manager", "Empresas"] },
];

// ↓ recibe onNavigate desde App.jsx para poder navegar al hacer click
export default function HomePage({ onNavigate }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", background: "#000", color: "#f5f5f7" }}>

      {/* ── HERO ── */}
      <section ref={heroRef} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "120px 20px 80px", textAlign: "center" }}>
        <p style={{ color: "#2997ff", fontWeight: 600, marginBottom: 12 }}>Novedades de Apple</p>
        <h1 style={{ fontSize: "clamp(38px, 10vw, 96px)", fontWeight: 700, margin: "0 0 20px" }}>iPhone 16 Pro</h1>
        <p style={{ fontSize: "clamp(16px, 3vw, 26px)", color: "rgba(245,245,247,0.7)", marginBottom: 36 }}>Titanio. Tan pro. Tan iPhone.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>

          {/* ↓ onNavigate("iPhone") lleva al usuario a IPhonePage */}
          <button onClick={() => onNavigate("iPhone")} style={{ background: "#2997ff", color: "#fff", border: "none", borderRadius: 980, padding: "14px 30px", fontSize: 17, cursor: "pointer" }}>
            Comprar
          </button>
          <button onClick={() => onNavigate("iPhone")} style={{ background: "transparent", color: "#2997ff", border: "none", fontSize: 17, cursor: "pointer" }}>
            Más información →
          </button>

        </div>
        <div style={{ marginTop: 48, fontSize: "clamp(72px, 18vw, 180px)" }}>📱</div>
      </section>

      {/* ── PRODUCTS ── */}
      <section style={{ padding: isMobile ? "56px 16px" : "80px 24px" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 5vw, 52px)", fontWeight: 700, marginBottom: 48 }}>La línea completa.</h2>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 16, maxWidth: 1200, margin: "0 auto" }}>
          {products.map((product) => (
            <div key={product.id} style={{ background: product.bg, borderRadius: 20, padding: "48px 36px", cursor: "pointer" }}>
              <h3 style={{ color: product.accent, fontSize: 28, fontWeight: 700 }}>{product.name}</h3>
              <p style={{ color: product.accent === "#1d1d1f" ? "#6e6e73" : "rgba(245,245,247,0.6)", marginBottom: 20 }}>{product.tagline}</p>
              <div style={{ fontSize: 64, marginBottom: 16 }}>{product.image}</div>
              <p style={{ fontSize: 14, fontWeight: 600, color: product.accent, marginBottom: 20 }}>{product.price}</p>
              <button
                onClick={() => onNavigate(product.name.includes("iPhone") ? "iPhone" : product.name.includes("Mac") ? "Mac" : product.name.includes("Watch") ? "Watch" : "iPad")}
                style={{ background: "#2997ff", color: "#fff", border: "none", borderRadius: 980, padding: "9px 20px", cursor: "pointer" }}
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "48px 24px 64px", borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 40 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(5, 1fr)", gap: 32, marginBottom: 32 }}>
            {footerCols.map((col) => (
              <div key={col.title}>
                <p style={{ fontSize: 12, fontWeight: 600, color: "#f5f5f7", marginBottom: 10 }}>{col.title}</p>
                {col.links.map((link) => (
                  <p key={link} style={{ fontSize: 12, color: "#6e6e73", marginBottom: 7, cursor: "pointer" }}>{link}</p>
                ))}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "#6e6e73" }}>Copyright © 2026 Apple Inc. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
}