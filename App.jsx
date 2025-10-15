import React from 'react'
import { motion } from 'framer-motion'

const PHONE = '7800444874'
const EMAIL = 'info.triptastictours@gmail.com'
const DOMAIN = 'www.triptastictours.co.in'

function Navbar({scrollTo}) {
  return (
    <nav className="fixed w-full z-30 bg-gradient-to-r from-orange-400 to-yellow-400/90 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="Triptastic Tours" className="w-12 h-12 rounded-full bg-white object-cover"/>
          <div>
            <h1 className="text-white font-bold">Triptastic Tours</h1>
            <p className="text-white text-sm">Explore. Discover. Delight.</p>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-white">
          <button onClick={() => scrollTo('home')} className="hover:underline">Home</button>
          <button onClick={() => scrollTo('about')} className="hover:underline">About</button>
          <button onClick={() => scrollTo('packages')} className="hover:underline">Packages</button>
          <button onClick={() => scrollTo('gallery')} className="hover:underline">Gallery</button>
          <button onClick={() => scrollTo('contact')} className="hover:underline">Contact</button>
        </div>
      </div>
    </nav>
  )
}

function Hero({scrollTo}) {
  return (
    <section id="home" className="pt-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{opacity:0, x:-30}} animate={{opacity:1, x:0}} transition={{duration:0.6}}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-amber-900">Triptastic Tours</h2>
          <p className="mt-4 text-gray-700 text-lg">Spiritual journeys, group getaways and thrilling adventures — across Varanasi, Prayagraj, Ayodhya and beyond.</p>
          <div className="mt-6 flex gap-3">
            <button onClick={() => scrollTo('packages')} className="bg-amber-700 text-white px-5 py-3 rounded-lg shadow">View Packages</button>
            <a href={`https://wa.me/91${PHONE}`} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-lg border border-amber-700 text-amber-700">Book on WhatsApp</a>
          </div>
          <p className="mt-4 text-sm text-gray-600">Call/WhatsApp: <a href={`https://wa.me/91${PHONE}`} className="font-semibold text-orange-700">{PHONE}</a></p>
        </motion.div>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8}}>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src="/assets/varanasi1.jpg" alt="Varanasi" className="w-full h-72 object-cover"/>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>
          <h3 className="text-3xl font-bold text-amber-900">About Us</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">Triptastic Tours is dedicated to creating meaningful travel experiences across India's spiritual and cultural heartlands. Our mission: Divine • Discover • Delight. We design safe, comfortable and memorable journeys — from the ghats of Varanasi to the temples of Ayodhya.</p>
        </motion.div>
      </div>
    </section>
  )
}

function Packages({scrollTo}) {
  const packs = [
    {title:'Varanasi Spiritual Experience', desc:'Ghats, aarti & riverside rituals'},
    {title:'Prayagraj Pilgrimage', desc:'Holy Sangam & temples'},
    {title:'Ayodhya Heritage Tour', desc:'Temples, culture & history'},
    {title:'Group Getaway', desc:'Custom packages for groups'},
    {title:'Adventure Trip', desc:'Trekking, rafting & camping'}
  ]
  return (
    <section id="packages" className="py-12 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-amber-900">Packages</h3>
        <p className="mt-2 text-gray-700">Contact us with your travel dates and group size for a tailored quote. Price on request.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packs.map(p => (
            <motion.article key={p.title} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4}} className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
              <div>
                <h4 className="font-semibold text-lg text-amber-800">{p.title}</h4>
                <p className="text-gray-600 mt-2">{p.desc}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <button onClick={() => {
                  const text = encodeURIComponent(`Hi Triptastic Tours, I want details for ${p.title}`);
                  window.open(`https://wa.me/91${PHONE}?text=${text}`, '_blank');
                }} className="px-3 py-2 bg-amber-700 text-white rounded">Enquire</button>
                <button onClick={() => scrollTo('contact')} className="px-3 py-2 border border-amber-700 text-amber-700 rounded">Contact</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const images = ['/assets/varanasi1.jpg','/assets/varanasi2.jpg','/assets/varanasi1.jpg','/assets/varanasi2.jpg']
  return (
    <section id="gallery" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-amber-900">Gallery</h3>
        <p className="mt-2 text-gray-700">Moments from our trips.</p>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src,i)=>(
            <motion.div key={i} whileHover={{scale:1.03}} className="overflow-hidden rounded shadow">
              <img src={src} alt={`gallery-${i}`} className="w-full h-48 object-cover"/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = React.useState({name:'', mobile:'', dest:'', message:''})
  function handleChange(e){ setForm({...form, [e.target.name]: e.target.value}) }
  function handleSubmit(e){
    e.preventDefault()
    const text = encodeURIComponent(`Name: ${form.name}\nMobile: ${form.mobile}\nDestination: ${form.dest}\nMessage: ${form.message}`)
    window.open(`https://wa.me/91${PHONE}?text=${text}`, '_blank')
  }
  return (
    <section id="contact" className="py-12 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-amber-900">Contact & Enquiry</h3>
        <p className="mt-2 text-gray-700">Send us your details and we'll reply on WhatsApp.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div>
            <ul className="text-gray-700 space-y-2">
              <li>📞 Phone: 8738004874</li>
              <li>📲 WhatsApp: {PHONE}</li>
              <li>✉️ Email: {EMAIL}</li>
              <li>🌐 Domain: {DOMAIN}</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-4">
            <input name="name" required placeholder="Full name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2 mb-2"/>
            <input name="mobile" required placeholder="Mobile number" value={form.mobile} onChange={handleChange} className="w-full border rounded px-3 py-2 mb-2"/>
            <input name="dest" placeholder="Destination (e.g. Varanasi)" value={form.dest} onChange={handleChange} className="w-full border rounded px-3 py-2 mb-2"/>
            <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className="w-full border rounded px-3 py-2 mb-2"/>
            <div className="flex gap-3">
              <button type="submit" className="px-4 py-2 bg-amber-700 text-white rounded">Send on WhatsApp</button>
              <a href={`https://wa.me/91${PHONE}`} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded">Open WhatsApp</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="bg-amber-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h4 className="font-bold">Triptastic Tours</h4>
          <p className="text-sm">Making Every Trip Fantastic</p>
        </div>
        <div className="mt-4 md:mt-0 text-sm">
          <p>📞 8738004874 | 📲 7800444874</p>
          <p>✉️ info.triptastictours@gmail.com</p>
          <p>© 2025 Triptastic Tours | www.triptastictours.co.in | Explore. Discover. Delight.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App(){
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar scrollTo={scrollTo}/>
      <main className="flex-grow">
        <Hero scrollTo={scrollTo}/>
        <About/>
        <Packages scrollTo={scrollTo}/>
        <Gallery/>
        <Contact/>
      </main>
      <Footer/>
      {/* Floating WhatsApp button */}
      <a href={`https://wa.me/917800444874`} target="_blank" rel="noreferrer" className="fixed right-4 bottom-6 bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="white"><path d="M20.5 3.5A11.9 11.9 0 0012 .5 11.9 11.9 0 003.5 3.5 11.9 11.9 0 00.5 12c0 2.1.6 4.1 1.7 5.9L.5 23l4.6-1.2A11.9 11.9 0 0012 23.5c3.2 0 6.2-1.2 8.5-3.5A11.9 11.9 0 0023.5 12c0-3.2-1.2-6.2-3.5-8.5z"/><path d="M17.5 14.1c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.9.9-1.1 1.1-.2.2-.4.2-.7.1-.3-.1-1.1-.4-2.1-1.3-.8-.8-1.3-1.7-1.5-2-.1-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.4-.3-.6-.6-.5-.8-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.5-.3.4-1 1-1 2.4 0 1.4.8 2.7 1.2 3.1.4.4 2 3.2 4.8 4.5 2.8 1.3 2.8.9 3.3.9.5 0 1.6-.6 1.8-1.4.2-.8.2-1.6.1-1.8-.1-.2-.4-.3-.7-.5z" /></svg>
      </a>
    </div>
  )
}
