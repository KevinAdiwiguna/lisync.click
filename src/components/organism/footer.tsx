import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="px-6 py-12 text-sm bg-base-100">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-2">ShortLink</h2>
            <p className="text-base-content/80">The modern way to shorten and manage your URLs with style and intelligence.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Product</h3>
            <ul className="space-y-1 text-base-content/80">
              <li><Link href="#features" className="hover:underline">Features</Link></li>
              <li><Link href="#pricing" className="hover:underline">Pricing</Link></li>
              <li><Link href="#about" className="hover:underline">About</Link></li>
              <li><Link href="#blog" className="hover:underline">Blog</Link></li>
              <li><Link href="#careers" className="hover:underline">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-base-content/80">
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
              <li><Link href="#support" className="hover:underline">Support</Link></li>
              <li><Link href="#help" className="hover:underline">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-1 text-base-content/80">
              <li><Link href="#privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#terms" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 text-center">
          <p>© 2024 ShortLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
