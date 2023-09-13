import Counter from '@/components/counter';
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Counter/>
        {children}
        </body>
    </html>
  )
}
