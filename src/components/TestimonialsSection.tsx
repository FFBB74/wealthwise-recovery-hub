import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John D.",
    location: "New York, USA",
    quote: "WealthWise recovered my lost investment when I thought all hope was lost. Their professionalism and dedication are unmatched. I can't thank them enough for giving me my financial life back.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Sarah L.",
    location: "London, UK",
    quote: "After falling for a sophisticated online scam, I was devastated. The team at WealthWise was not only empathetic but incredibly effective. They guided me through the whole process and successfully recovered a significant portion of my funds.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Michael P.",
    location: "Sydney, Australia",
    quote: "The educational resources provided by WealthWise on scam prevention are invaluable. Their consultants are knowledgeable and helped me secure my digital assets. Highly recommended for anyone looking to protect their wealth.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=120&q=80",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="bg-gradient-to-br from-brand-emerald/10 via-white to-brand-navy/5 py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-playfair text-5xl md:text-6xl text-center font-black text-brand-gold mb-8 tracking-tight drop-shadow-lg">
        Client Testimonials
      </h2>
      <p className="text-center text-gray-700 mb-16 max-w-3xl mx-auto text-2xl leading-relaxed font-semibold">
        Hear from those we've helped.<br />
        <span className="text-brand-emerald">Real stories from clients </span>
        who regained their financial security with our assistance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-fade-in">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="relative bg-white border border-gray-200 rounded-3xl shadow-2xl hover:shadow-brand-gold/30 transition-shadow duration-300 p-10 flex flex-col justify-between h-full animate-fade-in group overflow-hidden">
            <img src={testimonial.image} alt={testimonial.name} className="absolute -top-8 right-5 w-20 h-20 rounded-full border-4 border-brand-emerald shadow-xl object-cover z-30" />
            <div>
              <div className="flex items-center mb-4 mt-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-brand-gold fill-current" size={24} />
                ))}
              </div>
              <p className="text-gray-800 italic mb-6 leading-relaxed font-semibold text-lg">"{testimonial.quote}"</p>
            </div>
            <div>
              <p className="font-black text-brand-navy font-playfair text-xl">{testimonial.name}</p>
              <p className="text-brand-emerald font-semibold">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
