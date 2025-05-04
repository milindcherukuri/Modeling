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
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <img key={index} src={`/images/${src}`} alt={`Portfolio ${index + 1}`} className="rounded-xl shadow-lg object-cover w-full h-[450px]" />
        ))}
      </div>
    </section>
  )
}
