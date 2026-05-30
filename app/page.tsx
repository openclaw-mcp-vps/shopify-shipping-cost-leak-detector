export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* Hero */}
        <section className="text-center mb-20">
          <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
            For Shopify Stores · 100+ Orders/Month
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Find Hidden Shipping Cost<br />Calculation Errors
          </h1>
          <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
            Connect your Shopify store and instantly detect shipping rate discrepancies that silently drain your margins on every order.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
          >
            Start Detecting Leaks — $19/mo
          </a>
          <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to connect.</p>

          <div className="mt-14 grid grid-cols-3 gap-6 text-center">
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">$340</div>
              <div className="text-sm text-[#8b949e] mt-1">Avg. monthly leak found</div>
            </div>
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">2 min</div>
              <div className="text-sm text-[#8b949e] mt-1">Setup time</div>
            </div>
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">Real-time</div>
              <div className="text-sm text-[#8b949e] mt-1">Webhook monitoring</div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
          <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center shadow-lg shadow-[#58a6ff]/5">
            <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
            <div className="text-5xl font-bold text-white mb-1">$19</div>
            <div className="text-[#8b949e] mb-6">/month</div>
            <ul className="text-left space-y-3 mb-8 text-sm">
              {[
                "Unlimited order scans",
                "Real-time webhook monitoring",
                "Detailed cost leak reports",
                "Revenue impact calculations",
                "Email alerts on new leaks",
                "Shopify API integration"
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-[#58a6ff] font-bold">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
              className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "How does it detect shipping cost leaks?",
                a: "We connect to your Shopify store via API and compare your configured shipping rate rules against what was actually charged on each order. Any discrepancy — undercharges, free shipping applied incorrectly, or zone mismatches — is flagged with a dollar impact."
              },
              {
                q: "Is my store data safe?",
                a: "We request read-only Shopify API access scoped only to orders and shipping settings. We never store payment details and you can revoke access at any time from your Shopify admin."
              },
              {
                q: "What if I don't find any leaks?",
                a: "Great news — your shipping setup is solid. You still get ongoing real-time monitoring via webhooks so you're alerted the moment a new discrepancy appears as your store grows."
              }
            ].map(({ q, a }) => (
              <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                <div className="font-semibold text-white mb-2">{q}</div>
                <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center text-xs text-[#8b949e]">
          © {new Date().getFullYear()} Shipping Leak Detector. All rights reserved.
        </footer>
      </div>
    </main>
  )
}
