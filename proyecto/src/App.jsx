import React, { useState } from "react";
import AirPodsPage from "./pages/AirPodsPage";
import IPadPage from "./pages/IPadPage";
import IPhonePage from "./pages/IPhonePage";
import MacPage from "./pages/MacPage";
import SoportePage from "./pages/SoportePage";
import TVHogarPage from "./pages/TVHogarPage";
import WatchPage from "./pages/WatchPage";
import NavBar from "./components/NavBar";
import "./styles/App.css";

const PAGES = [
  { id: "iphone",  label: "iPhone"    },
  { id: "mac",     label: "Mac"       },
  { id: "ipad",    label: "iPad"      },
  { id: "watch",   label: "Watch"     },
  { id: "airpods", label: "AirPods"   },
  { id: "tv",      label: "TV y Hogar"},
  { id: "soporte", label: "Soporte"   },
];

function App() {
  const [activePage, setActivePage] = useState("iphone");

  const renderPage = () => {
    switch (activePage) {
      case "iphone":  return <IPhonePage />;
      case "mac":     return <MacPage />;
      case "ipad":    return <IPadPage />;
      case "watch":   return <WatchPage />;
      case "airpods": return <AirPodsPage />;
      case "tv":      return <TVHogarPage />;
      case "soporte": return <SoportePage />;
      default:        return <IPhonePage />;
    }
  };

  return (
    <div className="app">
      <NavBar pages={PAGES} activePage={activePage} onNavigate={setActivePage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="apple-footer">
        <p>Copyright © 2024 Apple Inc. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;