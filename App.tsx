import { useState } from 'react'

const HERO_IMG = 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1800&h=1000&fit=crop&auto=format'
const BROMO_IMG = 'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?w=900&h=600&fit=crop&auto=format'
const BOROBUDUR_IMG = 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=900&h=600&fit=crop&auto=format'
const RAJA_IMG = 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=900&h=600&fit=crop&auto=format'
const KOMODO_IMG = 'https://images.unsplash.com/photo-1657788405193-c2039edaad6b?w=900&h=600&fit=crop&auto=format'
const BALI_CULTURE_IMG = 'https://images.unsplash.com/photo-1542897644-e04428948020?w=900&h=600&fit=crop&auto=format'
const SUMATRA_IMG = 'https://images.unsplash.com/photo-1723153247780-02e191e1dd0c?w=900&h=600&fit=crop&auto=format'
const RICE_IMG = 'https://images.unsplash.com/photo-1558005530-a7958896ec60?w=900&h=600&fit=crop&auto=format'
const AERIAL_BALI = 'https://images.unsplash.com/photo-1559628233-100c798642d4?w=900&h=600&fit=crop&auto=format'

const destinations = [
  { name: 'Bali', subtitle: 'Culture, spirituality & extraordinary landscapes', places: 'Ubud · Sidemen · Lovina · Nusa Penida', img: BALI_CULTURE_IMG, emoji: '🌴' },
  { name: 'Java', subtitle: 'Heritage, volcanoes and living history', places: 'Yogyakarta · Borobudur · Bromo · Ijen', img: BOROBUDUR_IMG, emoji: '🌋' },
  { name: 'Komodo & Flores', subtitle: 'Adventure beyond imagination', places: 'Komodo National Park · Padar · Sailing', img: KOMODO_IMG, emoji: '🐉' },
  { name: 'Lombok & Gili', subtitle: 'Island life and tropical escape', places: 'Beaches · Snorkeling · Mount Rinjani', img: RAJA_IMG, emoji: '🏝️' },
  { name: 'Sumatra', subtitle: 'Wild nature and powerful cultures', places: 'Lake Toba · Bukit Lawang · Orangutans', img: SUMATRA_IMG, emoji: '🌿' },
  { name: 'Raja Ampat', subtitle: "One of the world's greatest marine destinations", places: 'Diving · Snorkeling · Island exploration', img: 'https://images.unsplash.com/photo-1745917784557-a93bf209232c?w=900&h=600&fit=crop&auto=format', emoji: '🐠' },
]

const tours = [
  { tag: 'FEATURED', name: 'Indonesia Luxury Discovery', duration: '22 Days', route: 'Java · Bali · Gili Islands', desc: 'A private journey combining history, culture, volcanoes, nature, island experiences and relaxation.', img: BROMO_IMG },
  { tag: 'BALI', name: 'Bali Highlights', duration: '7 Days', route: 'Culture · Nature · Relaxation', desc: 'An immersive week across Bali\'s most extraordinary cultural, natural and spiritual landscapes.', img: BALI_CULTURE_IMG },
  { tag: 'JAVA', name: 'Essential Java', duration: '10 Days', route: 'Jakarta · Bandung · Yogyakarta · Bromo', desc: 'Explore the depth of Java — from royal heritage to volcanic wonder.', img: BOROBUDUR_IMG },
  { tag: 'ADVENTURE', name: 'Bali & Komodo', duration: '10 Days', route: 'Bali · Labuan Bajo · Komodo', desc: 'Combine Bali\'s culture with the raw adventure of sailing through Komodo.', img: KOMODO_IMG },
]

const travelStyles = [
  { title: 'Private Journeys', desc: 'Travel at your own pace with a fully personalised itinerary designed around you.', icon: '◈' },
  { title: 'Family Travel', desc: 'Comfortable and meaningful experiences designed thoughtfully for different generations.', icon: '◉' },
  { title: 'Small Group Tours', desc: 'Discover Indonesia with friends, communities or like-minded travellers.', icon: '◎' },
  { title: 'Special Interest', desc: 'Culture · Food · Nature · Photography · Wellness · Sustainability', icon: '◇' },
  { title: 'Tailor-Made', desc: 'Tell us your dream journey. We will design every detail around it.', icon: '◆' },
]

const whyUs = [
  { label: 'Based in Bali', detail: 'Our office and home base are at Soil&Soul, Punggul, Bali.' },
  { label: 'Indonesia-Wide Expertise', detail: 'Travel packages and journeys throughout every corner of the archipelago.' },
  { label: 'Tailor-Made Travel', detail: 'Journeys designed around your interests, schedule and travel style.' },
  { label: 'Local Connections', detail: 'Experiences created with local guides, communities and partners.' },
  { label: 'Travel with Purpose', detail: 'Part of Soil&Soul Group — sustainability is central to how we operate.' },
  { label: 'One Trusted Partner', detail: 'From accommodation to guides and activities, professionally coordinated.' },
]

const navLinks = ['Destinations', 'Tours & Packages', 'Tailor-Made', 'Sustainable Travel', 'About Us', 'Journal']

const journalPosts = [
  { title: '22 Days Across Indonesia', sub: 'A Journey from Jakarta to Bali', img: BROMO_IMG },
  { title: 'Beyond Bali', sub: '10 Places You Need to Visit', img: AERIAL_BALI },
  { title: 'The Road to Borobudur', sub: 'Why Java Should Be on Your Itinerary', img: BOROBUDUR_IMG },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({
    name: '', email: '', nationality: '', travellers: '',
    dates: '', duration: '', destinations: [] as string[], interests: [] as string[], budget: '', message: ''
  })
  const [formSent, setFormSent] = useState(false)

  const toggleDestination = (d: string) => {
    setFormData(prev => ({
      ...prev,
      destinations: prev.destinations.includes(d)
        ? prev.destinations.filter(x => x !== d)
        : [...prev.destinations, d]
    }))
  }

  const toggleInterest = (i: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(i)
        ? prev.interests.filter(x => x !== i)
        : [...prev.interests, i]
    }))
  }

  const sections = ['home', 'destinations', 'tours', 'travel-style', 'why', 'soil-soul', 'sustainable', 'plan', 'journal']

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: '#f5f0e8', color: '#2d2926' }}>

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 2.5rem', height: '72px',
        background: 'rgba(26,51,40,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(212,196,160,0.15)'
      }}>
        <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.35rem', fontWeight: 600, color: '#f5f0e8', letterSpacing: '0.04em' }}>
          DE'NIRA
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(/[^a-z]/g, '-')}`} style={{
              color: 'rgba(245,240,232,0.75)', fontSize: '0.75rem', fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none',
              transition: 'color 0.2s'
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#d9784a')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.75)')}
            >{link}</a>
          ))}
        </div>
        <button style={{
          background: '#c4622d', color: '#f5f0e8', border: 'none',
          padding: '0.55rem 1.4rem', fontSize: '0.7rem', fontWeight: 600,
          letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
          transition: 'background 0.2s'
        }}
          onMouseEnter={e => (e.currentTarget.style.background = '#d9784a')}
          onMouseLeave={e => (e.currentTarget.style.background = '#c4622d')}
          onClick={() => document.getElementById('plan')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Plan Your Journey
        </button>
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{ position: 'relative', height: '100vh', minHeight: '640px', overflow: 'hidden' }}>
        <img src={HERO_IMG} alt="Bali rice terraces" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,51,40,0.35) 0%, rgba(26,51,40,0.65) 60%, rgba(26,51,40,0.85) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0 5rem', paddingTop: '72px', maxWidth: '900px' }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#d4c4a0', marginBottom: '1.5rem', fontWeight: 500 }}>
            Based in Bali · Explore All of Indonesia
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 400, color: '#f5f0e8', lineHeight: 1.08, margin: '0 0 1.5rem', letterSpacing: '-0.01em' }}>
            Discover Indonesia.<br /><em>Your Way.</em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(245,240,232,0.82)', maxWidth: '520px', lineHeight: 1.7, margin: '0 0 2.5rem', fontWeight: 300 }}>
            From our home in Bali, De'Nira creates unforgettable journeys across the Indonesian archipelago — from iconic destinations to hidden cultural and natural treasures.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: '#c4622d', color: '#f5f0e8', border: 'none', padding: '0.85rem 2rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#d9784a')}
              onMouseLeave={e => (e.currentTarget.style.background = '#c4622d')}
            >Explore Tours</button>
            <button
              onClick={() => document.getElementById('plan')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: 'transparent', color: '#f5f0e8', border: '1px solid rgba(245,240,232,0.5)', padding: '0.85rem 2rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,240,232,0.1)'; e.currentTarget.style.borderColor = 'rgba(245,240,232,0.8)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(245,240,232,0.5)' }}
            >Create Your Journey</button>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', color: 'rgba(245,240,232,0.5)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Scroll to explore
        </div>
      </section>

      {/* ── INTRO ── */}
      <section style={{ background: '#f5f0e8', padding: '7rem 5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1.2rem', fontWeight: 600 }}>One Archipelago. Endless Stories.</div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, lineHeight: 1.15, color: '#1a3328', margin: '0 0 1.8rem' }}>
              Indonesia Is More Than One Destination
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#4a4540', margin: '0 0 1.2rem' }}>
              Indonesia is a world of thousands of islands, cultures, landscapes and stories. De'Nira is a Bali-based travel agency offering a wide range of travel packages and tailor-made journeys throughout Indonesia.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#4a4540', margin: '0 0 2rem' }}>
              Whether you want to explore the temples of Java, experience Bali's culture, sail through Komodo, discover Sumatra's wildlife or relax in Raja Ampat — we help you create the journey that is right for you.
            </p>
            <div style={{ width: '3rem', height: '2px', background: '#c4622d' }} />
          </div>
          <div style={{ position: 'relative' }}>
            <img src={RICE_IMG} alt="Walking through Bali rice terraces" style={{ width: '100%', height: '480px', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '-1.5rem', right: '-1.5rem', background: '#1a3328', padding: '2rem', maxWidth: '220px' }}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.4rem', fontWeight: 400, color: '#f5f0e8', fontStyle: 'italic', lineHeight: 1.3 }}>
                "One Indonesia. Endless Journeys."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section id="destinations" style={{ background: '#1a3328', padding: '7rem 5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#d4c4a0', marginBottom: '1rem', fontWeight: 600 }}>Where Will You Go?</div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: '#f5f0e8', margin: 0, lineHeight: 1.15 }}>
              Explore Indonesia
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5px', background: 'rgba(212,196,160,0.1)' }}>
            {destinations.map((dest, i) => (
              <div key={dest.name} style={{ position: 'relative', height: i === 0 ? '420px' : '300px', overflow: 'hidden', cursor: 'pointer', gridColumn: i === 0 ? 'span 2' : undefined }}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement
                  if (img) img.style.transform = 'scale(1.06)'
                  const overlay = e.currentTarget.querySelector('.dest-overlay') as HTMLElement
                  if (overlay) overlay.style.background = 'linear-gradient(to top, rgba(26,51,40,0.92) 0%, rgba(26,51,40,0.3) 100%)'
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement
                  if (img) img.style.transform = 'scale(1)'
                  const overlay = e.currentTarget.querySelector('.dest-overlay') as HTMLElement
                  if (overlay) overlay.style.background = 'linear-gradient(to top, rgba(26,51,40,0.82) 0%, rgba(26,51,40,0.1) 100%)'
                }}
              >
                <img src={dest.img} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} />
                <div className="dest-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,51,40,0.82) 0%, rgba(26,51,40,0.1) 100%)', transition: 'background 0.3s' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem' }}>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#d4c4a0', marginBottom: '0.4rem' }}>{dest.emoji} {dest.subtitle}</div>
                  <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: i === 0 ? '2.2rem' : '1.5rem', fontWeight: 500, color: '#f5f0e8', lineHeight: 1.1, marginBottom: '0.5rem' }}>{dest.name}</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(212,196,160,0.8)', letterSpacing: '0.05em' }}>{dest.places}</div>
                  <div style={{ marginTop: '1rem', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c4622d', fontWeight: 600 }}>
                    Explore →
                  </div>
                </div>
              </div>
            ))}
            {/* Sulawesi placeholder */}
            <div style={{ position: 'relative', height: '300px', overflow: 'hidden', cursor: 'pointer', background: '#254d3c', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(196,98,45,0.15) 0%, transparent 60%)' }} />
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#d4c4a0', marginBottom: '0.4rem' }}>🏔️ Living traditions</div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.5rem', fontWeight: 500, color: '#f5f0e8', marginBottom: '0.4rem' }}>Sulawesi</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(212,196,160,0.7)' }}>Tana Toraja · Manado · Wakatobi</div>
              <div style={{ marginTop: '1rem', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c4622d', fontWeight: 600 }}>Explore →</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED TOURS ── */}
      <section id="tours" style={{ background: '#f5f0e8', padding: '7rem 5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem', fontWeight: 600 }}>Curated Experiences</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: '#1a3328', margin: 0, lineHeight: 1.15 }}>
                Journeys Designed for<br /><em>Different Ways of Travelling</em>
              </h2>
            </div>
            <button
              onClick={() => document.getElementById('plan')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: 'transparent', color: '#1a3328', border: '1px solid #1a3328', padding: '0.75rem 1.8rem', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1a3328'; e.currentTarget.style.color = '#f5f0e8' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1a3328' }}
            >View All Tours</button>
          </div>

          {/* Featured large tour */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5px', marginBottom: '1.5px', background: '#d4c4a0' }}>
            <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
              <img src={tours[0].img} alt={tours[0].name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,51,40,0.7) 0%, transparent 70%)' }} />
              <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
                <span style={{ background: '#c4622d', color: '#f5f0e8', padding: '0.3rem 0.8rem', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>Featured Journey</span>
              </div>
            </div>
            <div style={{ background: '#1a3328', padding: '3.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#d4c4a0', marginBottom: '1rem', fontWeight: 500 }}>{tours[0].duration} · {tours[0].route}</div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2.2rem', fontWeight: 400, color: '#f5f0e8', margin: '0 0 1.2rem', lineHeight: 1.2 }}>
                Indonesia Luxury<br /><em>Discovery Journey</em>
              </h3>
              <p style={{ color: 'rgba(212,196,160,0.85)', fontSize: '0.95rem', lineHeight: 1.75, margin: '0 0 1.5rem' }}>{tours[0].desc}</p>
              <div style={{ fontSize: '0.75rem', color: '#d4c4a0', lineHeight: 1.8, margin: '0 0 2rem' }}>
                Jakarta → Bandung → Yogyakarta → Borobudur → Bromo → North Bali → Ubud → Gili Islands → Seminyak
              </div>
              <button style={{ alignSelf: 'flex-start', background: '#c4622d', color: '#f5f0e8', border: 'none', padding: '0.8rem 1.8rem', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d9784a')}
                onMouseLeave={e => (e.currentTarget.style.background = '#c4622d')}
              >View This Journey →</button>
            </div>
          </div>

          {/* 3 smaller tours */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5px', background: '#d4c4a0' }}>
            {tours.slice(1).map(tour => (
              <div key={tour.name} style={{ background: '#f5f0e8', cursor: 'pointer', transition: 'transform 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img src={tour.img} alt={tour.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                    <span style={{ background: '#1a3328', color: '#d4c4a0', padding: '0.25rem 0.7rem', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>{tour.tag}</span>
                  </div>
                </div>
                <div style={{ padding: '1.8rem' }}>
                  <div style={{ fontSize: '0.65rem', color: '#c4622d', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.5rem' }}>{tour.duration} · {tour.route}</div>
                  <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem', fontWeight: 500, color: '#1a3328', margin: '0 0 0.8rem', lineHeight: 1.25 }}>{tour.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#4a4540', lineHeight: 1.65, margin: '0 0 1.2rem' }}>{tour.desc}</p>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1a3328', fontWeight: 600 }}>View Journey →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAVEL YOUR WAY ── */}
      <section id="travel-style" style={{ background: '#2d2926', padding: '7rem 5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#d4c4a0', marginBottom: '1rem', fontWeight: 600 }}>Travel Your Way</div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: '#f5f0e8', margin: 0, lineHeight: 1.15 }}>
              How Would You Like to Travel?
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1px', background: 'rgba(212,196,160,0.15)', marginBottom: '3rem' }}>
            {travelStyles.map((style, i) => (
              <div key={style.title} style={{ background: i % 2 === 0 ? '#2d2926' : '#352f2a', padding: '2.5rem 2rem', cursor: 'pointer', transition: 'background 0.25s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#1a3328')}
                onMouseLeave={e => (e.currentTarget.style.background = i % 2 === 0 ? '#2d2926' : '#352f2a')}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '1.2rem', color: '#c4622d' }}>{style.icon}</div>
                <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', fontWeight: 500, color: '#f5f0e8', margin: '0 0 0.8rem', lineHeight: 1.3 }}>{style.title}</h4>
                <p style={{ fontSize: '0.82rem', color: 'rgba(212,196,160,0.75)', lineHeight: 1.65, margin: 0 }}>{style.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => document.getElementById('plan')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: '#c4622d', color: '#f5f0e8', border: 'none', padding: '1rem 2.5rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#d9784a')}
              onMouseLeave={e => (e.currentTarget.style.background = '#c4622d')}
            >Start Planning</button>
          </div>
        </div>
      </section>

      {/* ── WHY DE'NIRA ── */}
      <section id="why" style={{ background: '#f5f0e8', padding: '7rem 5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem', fontWeight: 600 }}>Our Promise</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 400, color: '#1a3328', margin: '0 0 1.5rem', lineHeight: 1.15 }}>
                Indonesia,<br /><em>Made Personal.</em>
              </h2>
              <div style={{ width: '3rem', height: '2px', background: '#c4622d', marginBottom: '1.5rem' }} />
              <p style={{ fontSize: '0.9rem', color: '#4a4540', lineHeight: 1.75 }}>
                We are not a booking platform. We are a team of people who love Indonesia deeply and design every journey with genuine care.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
              {whyUs.map((item, i) => (
                <div key={item.label} style={{
                  padding: '2rem 2rem 2rem 0',
                  borderBottom: i < whyUs.length - 2 ? '1px solid rgba(26,51,40,0.1)' : undefined,
                  borderRight: i % 2 === 0 ? '1px solid rgba(26,51,40,0.1)' : undefined,
                  paddingLeft: i % 2 === 1 ? '2rem' : 0
                }}>
                  <div style={{ width: '2rem', height: '2px', background: '#c4622d', marginBottom: '1rem' }} />
                  <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.05rem', fontWeight: 600, color: '#1a3328', margin: '0 0 0.6rem' }}>{item.label}</h4>
                  <p style={{ fontSize: '0.82rem', color: '#4a4540', lineHeight: 1.65, margin: 0 }}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SOIL & SOUL ── */}
      <section id="soil-soul" style={{ position: 'relative', overflow: 'hidden', minHeight: '600px' }}>
        <img src={AERIAL_BALI} alt="Aerial view of Bali rice fields" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,51,40,0.82)' }} />
        <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '600px' }}>
          <div style={{ padding: '7rem 5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#d4c4a0', marginBottom: '1rem', fontWeight: 600 }}>Our Home in Bali</div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: '#f5f0e8', margin: '0 0 1.5rem', lineHeight: 1.15 }}>
              Travel Beyond the Destination
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(212,196,160,0.85)', lineHeight: 1.75, margin: '0 0 1.2rem' }}>
              De'Nira is based at Soil&Soul in Punggul, Bali — a social enterprise ecosystem connecting sustainable agriculture, local food, community engagement, and environmental responsibility.
            </p>
            <p style={{ fontSize: '1rem', color: 'rgba(212,196,160,0.85)', lineHeight: 1.75, margin: '0 0 2rem' }}>
              This connection allows De'Nira to create experiences that go far beyond conventional tourism.
            </p>
            <button style={{ alignSelf: 'flex-start', background: 'transparent', color: '#d4c4a0', border: '1px solid rgba(212,196,160,0.5)', padding: '0.85rem 1.8rem', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,196,160,0.1)'; e.currentTarget.style.borderColor = '#d4c4a0' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(212,196,160,0.5)' }}
            >Discover Soil&Soul →</button>
          </div>
          <div style={{ padding: '7rem 5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '1px solid rgba(212,196,160,0.15)' }}>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '0.9rem', color: 'rgba(212,196,160,0.6)', fontStyle: 'italic', marginBottom: '2rem' }}>Guests can discover</div>
            {['Organic farming & farm-to-table experiences', 'Balinese food and traditional cooking', 'Rice field experiences', 'Local culture & community activities', 'Nature, wellness & sustainable living'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid rgba(212,196,160,0.12)' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c4622d', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: 'rgba(212,196,160,0.8)', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUSTAINABLE TRAVEL ── */}
      <section id="sustainable" style={{ background: '#1a3328', padding: '7rem 5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#d4c4a0', marginBottom: '1rem', fontWeight: 600 }}>Sustainable Travel</div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: '#f5f0e8', margin: '0 0 1.2rem', lineHeight: 1.15 }}>
              Travel Better. Travel Deeper.
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(212,196,160,0.75)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75 }}>
              At De'Nira, we believe tourism should create positive value for destinations, communities and environments.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1px', background: 'rgba(212,196,160,0.1)' }}>
            {[
              { title: 'Local', desc: 'Supporting local guides, businesses, farmers, artisans and communities.' },
              { title: 'Cultural', desc: "Respecting Indonesia's traditions, heritage and local ways of life." },
              { title: 'Nature', desc: "Encouraging responsible experiences and appreciation of Indonesia's natural environments." },
              { title: 'Community', desc: 'Creating opportunities for local participation in tourism.' },
              { title: 'Sustainability', desc: 'Working towards more responsible tourism through the Soil&Soul Group ecosystem.' },
            ].map((item, i) => (
              <div key={item.title} style={{ padding: '3rem 1.8rem', background: '#1a3328', transition: 'background 0.25s', cursor: 'default' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#254d3c')}
                onMouseLeave={e => (e.currentTarget.style.background = '#1a3328')}
              >
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem', fontWeight: 400, color: 'rgba(196,98,45,0.4)', marginBottom: '1rem' }}>0{i + 1}</div>
                <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.2rem', fontWeight: 500, color: '#f5f0e8', margin: '0 0 1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.title}</h4>
                <p style={{ fontSize: '0.82rem', color: 'rgba(212,196,160,0.7)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLAN YOUR JOURNEY ── */}
      <section id="plan" style={{ background: '#f5f0e8', padding: '7rem 5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c4622d', marginBottom: '1rem', fontWeight: 600 }}>Plan Your Journey</div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: '#1a3328', margin: 0, lineHeight: 1.15 }}>
              Where Do You Want to Go?
            </h2>
          </div>

          {formSent ? (
            <div style={{ textAlign: 'center', padding: '5rem', background: '#1a3328' }}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem', fontWeight: 400, color: '#f5f0e8', marginBottom: '1rem' }}>Thank You</div>
              <p style={{ color: 'rgba(212,196,160,0.85)', fontSize: '1rem' }}>We have received your journey request and will be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setFormSent(true) }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                {[
                  { label: 'Your Name', key: 'name', type: 'text' },
                  { label: 'Email Address', key: 'email', type: 'email' },
                  { label: 'Nationality', key: 'nationality', type: 'text' },
                  { label: 'Number of Travellers', key: 'travellers', type: 'number' },
                  { label: 'Preferred Travel Dates', key: 'dates', type: 'text' },
                ].map(field => (
                  <div key={field.key}>
                    <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, color: '#4a4540', marginBottom: '0.5rem' }}>{field.label}</label>
                    <input
                      type={field.type}
                      value={(formData as any)[field.key]}
                      onChange={e => setFormData(prev => ({ ...prev, [field.key]: e.target.value }))}
                      style={{ width: '100%', background: 'white', border: '1px solid rgba(26,51,40,0.2)', padding: '0.75rem 1rem', fontSize: '0.9rem', color: '#2d2926', outline: 'none', transition: 'border-color 0.2s', fontFamily: 'inherit' }}
                      onFocus={e => (e.currentTarget.style.borderColor = '#c4622d')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(26,51,40,0.2)')}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, color: '#4a4540', marginBottom: '0.5rem' }}>How Long Will You Travel?</label>
                  <select
                    value={formData.duration}
                    onChange={e => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                    style={{ width: '100%', background: 'white', border: '1px solid rgba(26,51,40,0.2)', padding: '0.75rem 1rem', fontSize: '0.9rem', color: '#2d2926', outline: 'none', fontFamily: 'inherit', appearance: 'none', cursor: 'pointer' }}
                  >
                    <option value="">Select duration</option>
                    {['5–7 Days', '7–10 Days', '10–14 Days', '14–21 Days', 'More than 21 Days'].map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, color: '#4a4540', marginBottom: '1rem' }}>Destinations</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {['Bali', 'Java', 'Lombok', 'Komodo', 'Flores', 'Sumatra', 'Sulawesi', 'Raja Ampat', 'Multiple Destinations', "I Need Your Recommendation"].map(dest => (
                    <button
                      key={dest} type="button"
                      onClick={() => toggleDestination(dest)}
                      style={{
                        padding: '0.5rem 1rem', fontSize: '0.75rem', fontWeight: 500,
                        letterSpacing: '0.05em', border: '1px solid',
                        cursor: 'pointer', transition: 'all 0.15s',
                        background: formData.destinations.includes(dest) ? '#1a3328' : 'transparent',
                        color: formData.destinations.includes(dest) ? '#f5f0e8' : '#4a4540',
                        borderColor: formData.destinations.includes(dest) ? '#1a3328' : 'rgba(26,51,40,0.25)',
                      }}
                    >{dest}</button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, color: '#4a4540', marginBottom: '1rem' }}>Travel Interests</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {['Culture', 'Nature', 'Adventure', 'Luxury', 'Family', 'Food', 'Wellness', 'Sustainable Travel', 'Beach & Relaxation'].map(interest => (
                    <button
                      key={interest} type="button"
                      onClick={() => toggleInterest(interest)}
                      style={{
                        padding: '0.5rem 1rem', fontSize: '0.75rem', fontWeight: 500,
                        letterSpacing: '0.05em', border: '1px solid',
                        cursor: 'pointer', transition: 'all 0.15s',
                        background: formData.interests.includes(interest) ? '#c4622d' : 'transparent',
                        color: formData.interests.includes(interest) ? '#f5f0e8' : '#4a4540',
                        borderColor: formData.interests.includes(interest) ? '#c4622d' : 'rgba(26,51,40,0.25)',
                      }}
                    >{interest}</button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, color: '#4a4540', marginBottom: '0.5rem' }}>Budget Range</label>
                <input
                  type="text"
                  placeholder="e.g. $3,000–$5,000 per person"
                  value={formData.budget}
                  onChange={e => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                  style={{ width: '100%', background: 'white', border: '1px solid rgba(26,51,40,0.2)', padding: '0.75rem 1rem', fontSize: '0.9rem', color: '#2d2926', outline: 'none', transition: 'border-color 0.2s', fontFamily: 'inherit' }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#c4622d')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(26,51,40,0.2)')}
                />
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, color: '#4a4540', marginBottom: '0.5rem' }}>Tell Us About Your Dream Journey</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  style={{ width: '100%', background: 'white', border: '1px solid rgba(26,51,40,0.2)', padding: '0.75rem 1rem', fontSize: '0.9rem', color: '#2d2926', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s', fontFamily: 'inherit' }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#c4622d')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(26,51,40,0.2)')}
                />
              </div>

              <button type="submit" style={{ width: '100%', background: '#1a3328', color: '#f5f0e8', border: 'none', padding: '1.1rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#254d3c')}
                onMouseLeave={e => (e.currentTarget.style.background = '#1a3328')}
              >
                Let's Plan Your Indonesia Journey
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── JOURNAL ── */}
      <section id="journal" style={{ background: '#2d2926', padding: '7rem 5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#d4c4a0', marginBottom: '1rem', fontWeight: 600 }}>De'Nira Journal</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, color: '#f5f0e8', margin: 0, lineHeight: 1.15 }}>
                Stories from Indonesia
              </h2>
            </div>
            <a href="#journal" style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#d4c4a0', textDecoration: 'none', fontWeight: 600, borderBottom: '1px solid rgba(212,196,160,0.3)', paddingBottom: '2px' }}>All Stories →</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5px', background: 'rgba(212,196,160,0.1)' }}>
            {journalPosts.map((post, i) => (
              <div key={i} style={{ cursor: 'pointer', background: '#2d2926', transition: 'background 0.25s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#352f2a')}
                onMouseLeave={e => (e.currentTarget.style.background = '#2d2926')}
              >
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c4622d', fontWeight: 600, marginBottom: '0.75rem' }}>Journal</div>
                  <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem', fontWeight: 500, color: '#f5f0e8', margin: '0 0 0.4rem', lineHeight: 1.3 }}>{post.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(212,196,160,0.65)', margin: '0 0 1.5rem' }}>{post.sub}</p>
                  <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#d4c4a0', fontWeight: 600 }}>Read More →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#1a3328', padding: '5rem 5rem 3rem', borderTop: '1px solid rgba(212,196,160,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem', marginBottom: '5rem' }}>
            <div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.6rem', fontWeight: 600, color: '#f5f0e8', marginBottom: '1rem', letterSpacing: '0.04em' }}>DE'NIRA</div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(212,196,160,0.7)', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: '280px' }}>
                A Bali-based travel agency and tour operator offering curated and tailor-made journeys throughout Indonesia.
              </p>
              <div style={{ fontSize: '0.75rem', color: 'rgba(212,196,160,0.6)', lineHeight: 1.8 }}>
                <div>📍 Soil&Soul, Punggul, Bali</div>
                <div>🇮🇩 All of Indonesia</div>
                <div>🌱 Authentic & sustainable travel</div>
              </div>
            </div>
            {[
              { title: 'Destinations', links: ['Bali', 'Java', 'Lombok & Gili', 'Komodo & Flores', 'Sumatra', 'Sulawesi', 'Raja Ampat'] },
              { title: 'Travel', links: ['Tours & Packages', 'Tailor-Made Travel', 'Family Travel', 'Private Journeys', 'Small Groups', 'Sustainable Travel'] },
              { title: 'Company', links: ['About De\'Nira', 'Soil&Soul Group', 'Our Team', 'Journal', 'Plan Your Journey', 'Contact'] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#d4c4a0', fontWeight: 600, marginBottom: '1.2rem' }}>{col.title}</div>
                {col.links.map(link => (
                  <a key={link} href="#" style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(212,196,160,0.65)', textDecoration: 'none', marginBottom: '0.6rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#f5f0e8')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(212,196,160,0.65)')}
                  >{link}</a>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(212,196,160,0.12)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ fontSize: '0.75rem', color: 'rgba(212,196,160,0.4)', fontStyle: 'italic', fontFamily: "'Playfair Display', Georgia, serif" }}>
              "Based in Bali. Explore All of Indonesia."
            </div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(212,196,160,0.4)' }}>
              © 2026 De'Nira Travel · Part of the Soil&Soul Group
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 1000px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </div>
  )
}
