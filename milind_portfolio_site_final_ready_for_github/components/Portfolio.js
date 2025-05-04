export default function Portfolio() {
  const images = [
    "Milind_C_4.jpg",
    "Milind_C_9.jpg",
    "Milind_C_17.jpg",
    "Milind_C_22.jpg",
    "Milind_C_27.jpg",
    "Milind_C_29.jpg"
  ];

  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img key={index} src={`/images/${img}`} alt={`Portfolio ${index + 1}`} className="rounded-lg shadow-md" />
        ))}
      </div>
    </section>
  );
}
