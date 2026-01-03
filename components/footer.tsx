export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">WAIT HOLDINGS</h3>
            <p className="text-sm text-background/80 leading-relaxed">
              Leading the transformation of Malawi's agricultural sector through scientific innovation and quality.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Fertilizer Manufacturing</li>
              <li>Soil Laboratory</li>
              <li>Fertilizer Testing</li>
              <li>Agricultural Consulting</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>About Us</li>
              <li>Our Technology</li>
              <li>Impact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Contact Us</li>
              <li>Support</li>
              <li>Partner With Us</li>
              <li>News & Updates</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>© {currentYear} WAIT Holdings Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
