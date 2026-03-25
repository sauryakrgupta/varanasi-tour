const Footer = () => {
  return (
    <footer id="global-footer" className="code-section bg-[#1F2937]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center mb-6" data-logo="">
              <img src="https://assets.ls-assets.com/uploads/a28b3016-ffb6-40c3-a10b-25d9950a747a/7f54ab48-5bcf-489e-8de0-d66624ba8186.webp?w=768" alt="Travel Guide Logo" className="h-12 w-auto brightness-0 invert" />
            </a>
            <p className="text-white/70 mb-6">
              Discover the soul of Varanasi with personalized tours and authentic experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D97706] rounded-lg flex items-center justify-center text-white transition-all duration-300">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D97706] rounded-lg flex items-center justify-center text-white transition-all duration-300">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D97706] rounded-lg flex items-center justify-center text-white transition-all duration-300">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#D97706] rounded-lg flex items-center justify-center text-white transition-all duration-300">
                <i className="fa-brands fa-tripadvisor"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-white/70 hover:text-[#F59E0B] transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs text-[#D97706]"></i> About Me</a></li>
              <li><a href="/tours" className="text-white/70 hover:text-[#F59E0B] transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs text-[#D97706]"></i> Tours</a></li>
              <li><a href="/gallery" className="text-white/70 hover:text-[#F59E0B] transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs text-[#D97706]"></i> Gallery</a></li>
              <li><a href="/reviews" className="text-white/70 hover:text-[#F59E0B] transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs text-[#D97706]"></i> Reviews</a></li>
              <li><a href="/book" className="text-white/70 hover:text-[#F59E0B] transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs text-[#D97706]"></i> Book Now</a></li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Popular Tours</h4>
            <ul className="space-y-3">
              <li><a href="/tours/sunrise-boat-tour" className="text-white/70 hover:text-[#F59E0B] transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs text-[#D97706]"></i> Sunrise Boat Tour</a></li>
              <li><a href="/tours/ganga-aarti-experience" className="text-white/70 hover:text-[#F59E0B] transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs text-[#D97706]"></i> Evening Ganga Aarti</a></li>
              <li><a href="/tours/old-city-walking-tour" className="text-white/70 hover:text-[#F59E0B] transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs text-[#D97706]"></i> Old City Walking Tour</a></li>
              <li><a href="/tours/spiritual-temple-tour" className="text-white/70 hover:text-[#F59E0B] transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs text-[#D97706]"></i> Temple Tour</a></li>
              <li><a href="/tours/customized-private-tours" className="text-white/70 hover:text-[#F59E0B] transition-colors flex items-center gap-2"><i className="fa-solid fa-chevron-right text-xs text-[#D97706]"></i> Custom Tours</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/919554065513" className="flex items-start gap-3 text-white/70 hover:text-[#F59E0B] transition-colors">
                  <i className="fa-brands fa-whatsapp mt-1 text-green-400"></i>
                  <span>+91 95540 65513</span>
                </a>
              </li>
              <li>
                <a href="tel:+919554065513" className="flex items-start gap-3 text-white/70 hover:text-[#F59E0B] transition-colors">
                  <i className="fa-solid fa-phone mt-1"></i>
                  <span>+91 95540 65513</span>
                </a>
              </li>
              <li>
                <a href="mailto:himanshu95513@gmail.com" className="flex items-start gap-3 text-white/70 hover:text-[#F59E0B] transition-colors">
                  <i className="fa-solid fa-envelope mt-1"></i>
                  <span className="text-sm">himanshu95513@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <i className="fa-solid fa-location-dot mt-1"></i>
                <span>Varanasi, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Travel Guide Varanasi. All rights reserved.
            </p>
            <p className="text-white/50 text-sm">
              <i className="fa-solid fa-heart text-[#D97706]"></i> Discover the Soul of Varanasi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
