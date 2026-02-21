




function Footer() {
  return (
  <footer className="bg-neutral-800 text-gray-300 py-10 px-6 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Section */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">YourBrand</h2>
          <p className="text-sm">
            Delivering modern, compliant, and impactful digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Our Team</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-medium mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Disclaimer</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-medium mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:yourmail@gmail.com" className="hover:text-white">yourmail@gmail.com</a></li>
            <li>Phone: +91 1111111111</li>
            <li>Location: Kottayam, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm">
        © {new Date().getFullYear()} YourBrand. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;