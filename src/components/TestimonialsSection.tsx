
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John D.",
    location: "New York, USA",
    quote: "WealthWise recovered my lost investment when I thought all hope was lost. Their professionalism and dedication are unmatched. I can't thank them enough for giving me my financial life back.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    location: "London, UK",
    quote: "After falling for a sophisticated online scam, I was devastated. The team at WealthWise was not only empathetic but incredibly effective. They guided me through the whole process and successfully recovered a significant portion of my funds.",
    rating: 5,
  },
  {
    name: "Michael P.",
    location: "Sydney, Australia",
    quote: "The educational resources provided by WealthWise on scam prevention are invaluable. Their consultants are knowledgeable and helped me secure my digital assets. Highly recommended for anyone looking to protect their wealth.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="bg-gray-50 py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-playfair text-4xl md:text-5xl text-center font-bold text-gray-900 mb-4 tracking-tight">
        Client Testimonials
      </h2>
      <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-xl leading-relaxed">
        Hear from those we've helped. Real stories from clients who regained their financial security with our assistance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
            </div>
            <div>
              <p className="font-bold text-gray-900">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
