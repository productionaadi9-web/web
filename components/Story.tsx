export default function Story() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-12">
        <div className="flex-1 flex justify-center">
          <img
            src="https://res.cloudinary.com/duax5xong/image/upload/v1759691073/Screenshot_2025-10-06_at_12.33.47_AM_riuskn.png"
            alt="founder"
            className="rounded-2xl shadow-lg max-h-96 object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Our Story
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            What started as a simple passion for creating Instagram reels has now grown into 
            a full-fledged creative studio based in Madhya Pradesh, India. Driven by the same 
            love for storytelling and visual artistry, we’ve transformed that spark into a space 
            where ideas come to life through creativity, innovation, and dedication.
          </p>
        </div>
      </div>
    </section>
  );
}
