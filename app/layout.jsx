import './globals.css'

export const metadata = {
  title: 'Crowhub - Swipe Right on Your Next Connect',
  description: 'A collaboration-first platform where developers, designers, product minds, and tech founders connect to build real things.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@400;500;600;700;800&family=Cabin:wght@400;500;600;700&family=Cookie&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

