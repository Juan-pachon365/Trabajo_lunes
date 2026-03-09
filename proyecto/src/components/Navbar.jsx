const navLinks = ["Mac", "iPad", "iPhone", "Watch", "AirPods", "TV y Hogar", "Soporte"];

export default function Navbar({ active, onSelect }) {
  return (
    <nav>
      {navLinks.map((link) => (
        <button
          key={link}
          onClick={() => onSelect(link)}  // ← avisa a App.jsx cuál se clickeó
          style={{
            color: active === link ? "#fff" : "rgba(255,255,255,0.6)",
            borderBottom: active === link ? "2px solid #2997ff" : "none",
          }}
        >
          {link}
        </button>
      ))}
    </nav>
  );
}