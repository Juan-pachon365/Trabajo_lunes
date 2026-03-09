// src/App.jsx
import { useState } from "react";
import HomePage from "./pages/HomePage";
import IPhonePage     from "./pages/IPhonePage";
// ── Descomenta cuando crees cada página ──
// import MacPage        from "./pages/MacPage";
// import IPadPage       from "./pages/IPadPage";

// import WatchPage      from "./pages/WatchPage";
// import AirPodsPage    from "./pages/AirPodsPage";
// import TVHogarPage    from "./pages/TVHogarPage";
// import SoportePage    from "./pages/SoportePage";

const navLinks = ["Mac", "iPad", "iPhone", "Watch", "AirPods", "TV y Hogar", "Soporte"];

const pageMap = {
  // Mac:          MacPage,
  // iPad:         IPadPage,
   iPhone:       IPhonePage,
  // Watch:        WatchPage,
  // AirPods:      AirPodsPage,
  // "TV y Hogar": TVHogarPage,
  // Soporte:      SoportePage,

};

function PlaceholderPage({ name }) {
  return (
    <div style={{ paddingTop: 80, textAlign: "center", color: "#fff" }}>
      <h1>{name}</h1>
      <p>Página en construcción</p>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState(null); // null = homepage

  const renderPage = () => {
    if (active === null) return <HomePage onNavigate={setActive} />;
    const Page = pageMap[active];
    return Page ? <Page /> : <PlaceholderPage name={active} />;
  };

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>  {/* ← solo esta línea cambia */}
      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: "rgba(0,0,0,0.85)", display: "flex", gap: 24, justifyContent: "center", alignItems: "center", height: 52 }}>
        <span onClick={() => setActive(null)} style={{ cursor: "pointer", color: "#fff" }}></span>
        {navLinks.map((link) => (
          <span
            key={link}
            onClick={() => setActive(link)}
            style={{ color: active === link ? "#fff" : "rgba(255,255,255,0.6)", cursor: "pointer", fontSize: 13, borderBottom: active === link ? "2px solid #2997ff" : "2px solid transparent" }}
          >
            {link}
          </span>
        ))}
      </nav>

      {/* PÁGINA ACTIVA */}
      <main key={active ?? "home"}>
        {renderPage()}
      </main>
    </div>
    
  );
}