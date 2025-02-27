import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Brand Info */}
        <div className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="text-5xl font-bold text-blue-400 mb-4 md:mb-0">DigiGrowth</h2>
          <p className="text-gray-400 md:w-6/12 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem non obcaecati officiis nobis
            debitis magni molestias in sit necessitatibus dignissimos nisi velit explicabo libero beatae accusantium
            consequatur, cupiditate consequuntur expedita.
          </p>
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12 border-t border-gray-800 pt-8 w-full">
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-blue-400 transition-colors">SEO</li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors">PPC</li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors">Social Media</li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors">Web Design</li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors">Content Marketing</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-blue-400 transition-colors">About</li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors">Blog</li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors">Contact</li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors">Services</li>
              <li className="text-gray-400 hover:text-blue-400 transition-colors">Portfolio</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">123 Main Street</li>
              <li className="text-gray-400">New York, NY 10001</li>
              <li className="text-gray-400">123-456-7890</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Get Our Newsletter</h2>
            <p className="text-gray-400 mb-6 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, minima voluptatibus. Harum perferendis fuga
              sunt necessitatibus magnam, et ipsum vel temporibus rerum quasi eum, illo porro expedita aperiam corrupti
              provident!
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 w-full rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-sm capitalize"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} DigiGrowth. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;