export default function Card({ icon, name, desc, price, accent }) {
  return (
    <div style={{ border: `1px solid ${accent}`, borderRadius: 16, padding: "1.5rem", color: "#fff" }}>
      <div style={{ fontSize: "2rem", marginBottom: 8 }}>{icon}</div>
      <h3 style={{ marginBottom: 6 }}>{name}</h3>
      <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>{desc}</p>
      {price && <p style={{ color: accent, fontWeight: 600 }}>{price}</p>}
    </div>
  );
}