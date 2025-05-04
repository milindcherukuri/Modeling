export default function Hero() {
  return (
    <section className="text-center py-36 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-zinc-900 to-zinc-800 opacity-80" />
      <div className="relative z-10">
        <h1 className="text-6xl font-extrabold tracking-tight mb-4">Milind Cherukuri</h1>
        <p className="text-2xl font-light">6'1" Model · Confident · Versatile · Driven</p>
        <a
          href="/Milind_Cherukuri_Modeling_Portfolio.pdf"
          download
          className="inline-block mt-8 px-10 py-4 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
        >
          Download PDF Portfolio
        </a>
      </div>
    </section>
  )
}
