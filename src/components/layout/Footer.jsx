import { FiTool } from "react-icons/fi";

function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center">
                <FiTool size={22} />
              </div>

              <h2 className="text-2xl font-bold">
                NEXYRA <span className="text-violet-400">Tools</span>
              </h2>
            </div>

            <p className="text-slate-400">
              One platform. Every tool you need.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>

            <ul className="space-y-3 text-slate-400">
              <li>PDF Tools</li>
              <li>AI Tools</li>
              <li>Image Tools</li>
              <li>Student Tools</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>

            <ul className="space-y-3 text-slate-400">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>

            <ul className="space-y-3 text-slate-400">
              <li>FAQs</li>
              <li>Help Center</li>
              <li>Blog</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
          © 2026 NEXYRA Tools. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;