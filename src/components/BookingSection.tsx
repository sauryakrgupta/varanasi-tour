import { useState } from "react";

const BookingSection = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mqeowear", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="book" className="code-section py-20 lg:py-32 bg-gradient-to-br from-[#78350F] via-[#92400E] to-[#78350F] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <i className="fa-solid fa-calendar-check text-[#F59E0B]"></i>
              <span className="text-white/90 font-medium text-sm">Plan Your Journey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-[Outfit] leading-tight">
              Ready to Explore<br />
              <span className="text-[#FCD34D]">Varanasi?</span>
            </h2>

            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Fill out the form and I'll get back to you within 24 hours with a personalized itinerary. Let's create your perfect Varanasi experience together.
            </p>

            {/* Quick Contact */}
            <div className="space-y-4">
              <a href="https://wa.me/919554065513" className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="fa-brands fa-whatsapp text-white text-xl"></i>
                </div>
                <div>
                  <p className="text-white/70 text-sm">WhatsApp Us</p>
                  <p className="text-white font-semibold">+91 95540 65513</p>
                </div>
              </a>

              <a href="tel:+919554065513" className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-[#D97706] rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-phone text-white text-xl"></i>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Call Us</p>
                  <p className="text-white font-semibold">+91 95540 65513</p>
                </div>
              </a>

              <a href="mailto:himanshu95513@gmail.com" className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-[#EA580C] rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-envelope text-white text-xl"></i>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Email Us</p>
                  <p className="text-white font-semibold">himanshu95513@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#1F2937] mb-6 font-[Outfit]">Plan My Trip</h3>

            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-circle-check text-green-500 text-4xl"></i>
                </div>
                <h4 className="text-xl font-bold text-[#1F2937] mb-2">Booking Request Sent!</h4>
                <p className="text-[#6B7280] mb-6">
                  Thank you! Your details have been sent to <strong>himanshu95513@gmail.com</strong>. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-3 bg-[#D97706] text-white font-semibold rounded-xl hover:bg-[#B45309] transition-all duration-300"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* hidden field to label the email */}
                <input type="hidden" name="_subject" value="New Booking Request – Varanasi Spiritual Tour" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1F2937] mb-2">Your Name</label>
                  <input type="text" id="name" name="name" required placeholder="John Smith" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 outline-none transition-all duration-300" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1F2937] mb-2">Email Address</label>
                  <input type="email" id="email" name="email" required placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 outline-none transition-all duration-300" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1F2937] mb-2">Phone / WhatsApp</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 outline-none transition-all duration-300" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-[#1F2937] mb-2">Preferred Date</label>
                    <input type="date" id="date" name="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 outline-none transition-all duration-300" />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-[#1F2937] mb-2">Number of Guests</label>
                    <select id="guests" name="guests" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 outline-none transition-all duration-300 bg-white">
                      <option value="">Select</option>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3-5">3-5 People</option>
                      <option value="6+">6+ People</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="tour" className="block text-sm font-medium text-[#1F2937] mb-2">Select Tour</label>
                  <select id="tour" name="tour" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 outline-none transition-all duration-300 bg-white">
                    <option value="">Choose an experience</option>
                    <option value="sunrise-boat">Sunrise Boat Tour</option>
                    <option value="ganga-aarti">Evening Ganga Aarti</option>
                    <option value="old-city">Old City Walking Tour</option>
                    <option value="temple">Spiritual Temple Tour</option>
                    <option value="custom">Custom Private Tour</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1F2937] mb-2">Special Requests</label>
                  <textarea id="message" name="message" rows={3} placeholder="Tell us about your interests or any special requirements..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 outline-none transition-all duration-300 resize-none"></textarea>
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                    <i className="fa-solid fa-triangle-exclamation"></i>
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-[#D97706] hover:bg-[#B45309] disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg"
                >
                  {status === "submitting" ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane"></i>
                      Plan My Trip
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-[#6B7280]">
                  <i className="fa-solid fa-lock text-[#6B7280] mr-1"></i>
                  No payment required. We'll respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
