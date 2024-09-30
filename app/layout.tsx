import './globals.css'
import { Inter } from 'next/font/google'
// import Footer from '@/components/Footer'
// import Providers from '@/components/Providers'
import Header from '@/components/header'
import Introduction from './introduction/page'
import Schools from './schools/page'
import Apply from './apply/page'
import News from './news/page'
import Academics from './academics/page'
import HowToApply from './howToApply/page'
import Footer from '@/components/footer'



// import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'River Breeze School - Shaping Future Generations',
  description: 'Welcome to River Breeze School, where education meets innovation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <Providers> */}
          {/* Upper Section with Header */}
          <Header />

         
          
          {/* Main Content */}
          <main className="grow">
            {children}
          </main>
          <Introduction />
          <Schools />
          <Apply />
          <News />
          <Academics />
          <HowToApply />

          {/* Footer Section */}
          <Footer />
        {/* </Providers> */}
      </body>
    </html>
  )
}
