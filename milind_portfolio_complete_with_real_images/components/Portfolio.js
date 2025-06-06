const images = [
  "Milind_C_4.jpg",
  "Milind_C_9.jpg",
  "Milind_C_17.jpg",
  "Milind_C_22.jpg",
  "Milind_C_27.jpg",
  "Milind_C_29.jpg"
]

export default function Portfolio() {
  return (
    <section className="py-24 px-6 bg-zinc-50">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-900">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-gray-50"
          >
            <img
              src={`/images/${src}`}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-auto block"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

