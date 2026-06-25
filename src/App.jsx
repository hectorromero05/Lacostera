import "./App.css";

const phoneDisplay = "33 3309 4663";
const phoneHref = "tel:+523333094663";
const whatsapp = "https://wa.me/523333094663";
const mapsUrl = "https://maps.app.goo.gl/L8PDLd82kwyk8jEu9";

const imageFallbacks = {
  hero: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?q=80&w=1800&auto=format&fit=crop",
  ceviche: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?q=80&w=1200&auto=format&fit=crop",
  aguachile: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=1200&auto=format&fit=crop",
  camarones: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=1200&auto=format&fit=crop",
  coctel: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1200&auto=format&fit=crop",
  pulpo: "https://images.unsplash.com/photo-1604909052743-94e838986d24?q=80&w=1200&auto=format&fit=crop",
  zarandeado: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?q=80&w=1200&auto=format&fit=crop",
  local: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
};

const specialties = [
  ["Ceviches", "/ceviche.jpg", "Cortes frescos, cítricos y el toque de la casa."],
  ["Aguachiles", "/aguachile.jpg", "Verde, negro, chiltepín y especialidades sinaloenses."],
  ["Tostadas", "/ceviche.jpg", "Crujientes, frescas y servidas al momento."],
  ["Cocteles", "/coctel.jpg", "Camarón, pulpo, caracol y campechano."],
  ["Zarandeados", "/zarandeado.jpg", "Brasas, mariscos y sazón norteño."],
  ["Platillos de camarón", "/camarones.jpg", "Diabla, mojo de ajo, chipotle y más."],
  ["Platillos de lonja", "/zarandeado.jpg", "Filetes jugosos con guarniciones de la casa."],
  ["Conchas", "/pulpo.jpg", "Ostiones y almejas por temporada."],
  ["Entradas", "/local.jpg", "Botanas para compartir con toda la mesa."],
];

const menu = [
  ["Entradas", ["Camarón pa’ picar", "Pulpo pa’ picar", "Camarones roca", "Toritos de camarón", "Balazo La Costera", "Camarón pa’ pelar"]],
  ["Preparados al momento", ["Paté de camarón", "Callo de hacha", "Plato especial", "Chicharrón de camarón", "Chicharrón de atún", "Toritos de pulpo"]],
  ["Ceviches", ["Ceviche de sierra", "Ceviche de atún", "Ceviche de lonja", "Ceviche de pulpo", "Ceviche La Costera", "Ceviche de camarón cocido"]],
  ["Conchas", ["Ostiones naturales", "Ostiones zarandeados", "Pata de mula", "Ostión La Costera", "Almeja reyna natural", "Almeja reyna zarandeada"]],
  ["Aguachiles", ["Aguachile verde", "Aguachile chiltepín", "Aguachile negro", "Aguachile tatemado", "Aguachile mixto", "Aguachile mango"]],
  ["Tostadas", ["Tostada de atún", "Tostada de pulpo", "Tostada La Costera", "Tostada de aguachile", "Tostada de paté", "Tostada de camarón curtido"]],
  ["Cocteles", ["Coctel de camarón", "Coctel de pulpo", "Coctel de caracol", "Coctel campechano", "Sopa de mariscos", "Orden grande de coctel"]],
  ["Platillos de Camarón", ["Camarón empanizado", "Camarón a la diabla", "Camarón mojo de ajo", "Camarón mantequilla", "Camarón chipotle", "Camarón cucaracha"]],
  ["Platillos de Lonja", ["Lonja empanizada", "Lonja a la diabla", "Lonja mojo de ajo", "Lonja mantequilla", "Lonja poblano", "Lonja La Costera"]],
  ["Zarandeados", ["Camarón zarandeado", "Lonja zarandeada", "Pulpo zarandeado", "Salmón zarandeado", "Pescado zarandeado", "Pescado frito"]],
  ["Tacos", ["Atún zarandeado", "Pulpo zarandeado", "Marlín zarandeado", "Gobernador camarón", "Capeado camarón", "Vampiro pulpo"]],
];

const favorites = [
  ["Aguachile Negro", "/aguachile.jpg", "Intenso, fresco y con carácter sinaloense."],
  ["Ceviche La Costera", "/ceviche.jpg", "La receta de casa con mariscos preparados al momento."],
  ["Pulpo Zarandeado", "/pulpo.jpg", "Pulpo a las brasas con aroma ahumado."],
  ["Molcajete Marquillos", "/camarones.jpg", "Una especialidad abundante para compartir."],
  ["Torre Arliz", "/coctel.jpg", "Capas frescas de mariscos, salsas y texturas."],
  ["Pescado Don Loreto", "/zarandeado.jpg", "Pescado protagonista con sazón de la costa."],
];

function imgFallback(event, key) {
  event.currentTarget.src = imageFallbacks[key] || imageFallbacks.hero;
}

export default function App() {
  return (
    <div className="app">
      <nav className="navbar" aria-label="Navegación principal">
        <a className="brand" href="#inicio"><img src="/logo.png" onError={(e) => { e.currentTarget.style.display = "none"; }} alt="" /><span>La Costera</span></a>
        <div className="nav-links"><a href="#especialidades">Especialidades</a><a href="#menu">Menú</a><a href="#ubicacion">Ubicación</a><a href={phoneHref}>Llamar</a></div>
      </nav>

      <header className="hero" id="inicio">
        <img className="hero-img" src="/hero.jpg" onError={(e) => imgFallback(e, "hero")} alt="Mariscos frescos de La Costera" />
        <div className="hero-overlay" />
        <div className="hero-content reveal"><span className="eyebrow">Mariscos estilo Sinaloa · Zapopan</span><h1>La Costera<br />Mariscos y Brasas</h1><p>Mariscos frescos preparados al momento con auténtico sabor sinaloense.</p><div className="hero-buttons"><a href="#menu">Ver menú</a><a className="secondary" href={phoneHref}>Llamar</a><a className="ghost" href={mapsUrl} target="_blank" rel="noreferrer">Cómo llegar</a></div></div>
      </header>

      <section className="trust-strip"><div><strong>Fresco</strong><span>Preparado al momento</span></div><div><strong>Brasas</strong><span>Zarandeados y parrilla</span></div><div><strong>Familiar</strong><span>Ambiente cómodo</span></div></section>

      <Section id="especialidades" label="Especialidades" title="Sabores de mar, playa y brasas">
        <div className="specialty-grid">{specialties.map(([name, img, desc]) => <article className="specialty-card" key={name}><img src={img} onError={(e) => imgFallback(e, name.toLowerCase().includes("aguachile") ? "aguachile" : name.toLowerCase().includes("camar") ? "camarones" : "ceviche")} alt={name} /><div><h3>{name}</h3><p>{desc}</p></div></article>)}</div>
      </Section>

      <Section id="menu" label="Menú destacado" title="Carta visual para antojar y elegir fácil">
        <div className="menu-grid">{menu.map(([category, items]) => <article className="menu-card" key={category}><h3>{category}</h3><ul>{items.slice(0, 6).map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div><a className="center-button" href={whatsapp} target="_blank" rel="noreferrer">Ver menú completo</a>
      </Section>

      <Section label="Favoritos" title="Platillos favoritos de la casa">
        <div className="favorite-grid">{favorites.map(([name, img, desc]) => <article className="favorite-card" key={name}><img src={img} onError={(e) => imgFallback(e, name.includes("Aguachile") ? "aguachile" : name.includes("Pulpo") ? "pulpo" : "zarandeado")} alt={name} /><div><span>Favorito</span><h3>{name}</h3><p>{desc}</p></div></article>)}</div>
      </Section>

      <Section id="galeria" label="Galería" title="Una experiencia fresca y premium">
        <div className="gallery-grid">{Array.from({ length: 8 }, (_, index) => <img key={index} src={`/galeria${index + 1}.jpg`} onError={(e) => imgFallback(e, ["ceviche", "aguachile", "camarones", "coctel", "pulpo", "zarandeado", "local", "hero"][index])} alt={`Galería La Costera ${index + 1}`} />)}</div>
      </Section>

      <section className="experience"><div className="section-heading"><span className="eyebrow">Experiencia</span><h2>Confianza para venir, celebrar y volver</h2></div><div className="experience-grid">{["Mariscos frescos", "Preparados al momento", "Sabor sinaloense", "Ambiente familiar"].map((item) => <div key={item}><span>✦</span><h3>{item}</h3><p>Detalles cuidados, producto fresco y servicio cercano en cada visita.</p></div>)}</div></section>

      <section className="location" id="ubicacion"><div><span className="eyebrow">Ubicación</span><h2>Estamos en Jardines Universidad</h2><p>Av. Patria 520<br />Jardines Universidad<br />Zapopan, Jalisco.</p><a href={mapsUrl} target="_blank" rel="noreferrer">Abrir Google Maps</a></div><iframe title="Mapa de La Costera Mariscos y Brasas GDL" src="https://www.google.com/maps?q=Av.%20Patria%20520%2C%20Jardines%20Universidad%2C%20Zapopan%2C%20Jalisco&output=embed" loading="lazy"></iframe></section>

      <section className="contact"><span className="eyebrow">Contacto</span><h2>Reserva, pregunta o ven por tu antojo de mariscos</h2><p>Teléfono: <strong>{phoneDisplay}</strong></p><div><a className="whatsapp-big" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a className="call-big" href={phoneHref}>Llamar</a></div></section>

      <footer><div><h3>LA COSTERA MARISCOS Y BRASAS GDL</h3><p>Mariscos estilo Sinaloa preparados al momento.</p></div><div><strong>Horario</strong><p>Lunes a domingo · 12:00 PM - 10:00 PM</p></div><div><strong>Dirección</strong><p>Av. Patria 520, Jardines Universidad, Zapopan.</p></div><div><strong>Teléfono</strong><p>{phoneDisplay}</p><a href={mapsUrl} target="_blank" rel="noreferrer">Mapa</a></div></footer>
      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Enviar WhatsApp">💬</a>
    </div>
  );
}

function Section({ id, label, title, children }) {
  return <section className="section" id={id}><div className="section-heading"><span className="eyebrow">{label}</span><h2>{title}</h2></div>{children}</section>;
}
