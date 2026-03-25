const ContactSection = () => {
  return (
    <section id="contact" className="code-section py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FEF3C7] rounded-full px-4 py-2 mb-6">
            <i className="fa-solid fa-envelope text-[#D97706]"></i>
            <span className="text-[#92400E] font-medium text-sm">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-6 font-[Outfit]">
            Let's <span className="text-[#D97706]">Connect</span>
          </h2>
          <p className="text-lg text-[#6B7280]">
            Reach out anytime – I'm always happy to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 mb-8 text-white shadow-xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="fa-brands fa-whatsapp text-green-500 text-3xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 font-[Outfit]">Quick Response via WhatsApp</h3>
                  <p className="text-white/90 mb-4">The fastest way to reach me! I typically respond within minutes.</p>
                  <a href="https://wa.me/919554065513" className="inline-flex items-center gap-2 bg-white text-green-600 font-semibold px-6 py-3 rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg">
                    <i className="fa-brands fa-whatsapp text-xl"></i>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="bg-[#FEF9F1] rounded-2xl p-6 border border-[#FDE68A]">
                <div className="w-12 h-12 bg-[#D97706] rounded-xl flex items-center justify-center mb-4">
                  <i className="fa-solid fa-phone text-white text-lg"></i>
                </div>
                <h4 className="font-semibold text-[#1F2937] mb-1">Phone</h4>
                <a href="tel:+919554065513" className="text-[#6B7280] hover:text-[#D97706] transition-colors">+91 95540 65513</a>
              </div>

              {/* Email */}
              <div className="bg-[#FEF9F1] rounded-2xl p-6 border border-[#FDE68A]">
                <div className="w-12 h-12 bg-[#EA580C] rounded-xl flex items-center justify-center mb-4">
                  <i className="fa-solid fa-envelope text-white text-lg"></i>
                </div>
                <h4 className="font-semibold text-[#1F2937] mb-1">Email</h4>
                <a href="mailto:himanshu95513@gmail.com" className="text-[#6B7280] hover:text-[#D97706] transition-colors text-sm">himanshu95513@gmail.com</a>
              </div>

              {/* Location */}
              <div className="bg-[#FEF9F1] rounded-2xl p-6 border border-[#FDE68A]">
                <div className="w-12 h-12 bg-[#92400E] rounded-xl flex items-center justify-center mb-4">
                  <i className="fa-solid fa-location-dot text-white text-lg"></i>
                </div>
                <h4 className="font-semibold text-[#1F2937] mb-1">Location</h4>
                <p className="text-[#6B7280]">Varanasi, Uttar Pradesh, India</p>
              </div>

              {/* Hours */}
              <div className="bg-[#FEF9F1] rounded-2xl p-6 border border-[#FDE68A]">
                <div className="w-12 h-12 bg-[#B45309] rounded-xl flex items-center justify-center mb-4">
                  <i className="fa-solid fa-clock text-white text-lg"></i>
                </div>
                <h4 className="font-semibold text-[#1F2937] mb-1">Available</h4>
                <p className="text-[#6B7280]">24/7 for Tour Bookings</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-[#1F2937] mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-[#FEF3C7] hover:bg-[#D97706] rounded-xl flex items-center justify-center text-[#D97706] hover:text-white transition-all duration-300">
                  <i className="fa-brands fa-facebook-f text-lg"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-[#FEF3C7] hover:bg-[#D97706] rounded-xl flex items-center justify-center text-[#D97706] hover:text-white transition-all duration-300">
                  <i className="fa-brands fa-instagram text-lg"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-[#FEF3C7] hover:bg-[#D97706] rounded-xl flex items-center justify-center text-[#D97706] hover:text-white transition-all duration-300">
                  <i className="fa-brands fa-youtube text-lg"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-[#FEF3C7] hover:bg-[#D97706] rounded-xl flex items-center justify-center text-[#D97706] hover:text-white transition-all duration-300">
                  <i className="fa-brands fa-tripadvisor text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl h-full min-h-[400px] lg:min-h-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.477552763387!2d83.01039761448146!3d25.31782798388495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e24e0c9e1b1%3A0x68a73f6e8e8e8e8e!2sVaranasi%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" className="w-full h-full min-h-[400px] lg:min-h-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            {/* Floating Label */}
            <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-[#D97706]"></i>
                <span className="font-semibold text-[#1F2937]">Varanasi, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
