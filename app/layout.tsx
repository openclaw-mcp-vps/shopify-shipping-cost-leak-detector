import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shopify Shipping Cost Leak Detector',
  description: 'Find hidden shipping cost calculation errors in your Shopify store. Detect discrepancies between configured rates and actual charges.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e9c4b0ba-e505-4c0e-91ca-9a6752316f9c"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
