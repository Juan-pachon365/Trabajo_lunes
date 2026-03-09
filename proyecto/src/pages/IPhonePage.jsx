
import { pages } from "../data/pages";
import Card from "../components/Card";

export default function IPhonePage() {
  const data = pages["iPhone"];  // ← trae solo el objeto iPhone

  return (
    <div style={{ background: data.bg, minHeight: "100vh" }}>

      <p style={{ color: data.accent }}>{data.eyebrow}</p>
      <h1>{data.title}</h1>
      <p>{data.subtitle}</p>

      {/* Cards */}
      <div className="grid">
        {data.cards.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            name={card.name}
            desc={card.desc}
            price={card.price}
            accent={data.accent}
          />
        ))}
      </div>

      {/* Features */}
      <ul>
        {data.features.map((f) => (
          <li key={f.label}>
            <strong>{f.label}:</strong> {f.value}
          </li>
        ))}
      </ul>

    </div>
  );
}