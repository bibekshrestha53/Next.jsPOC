import './globals.css'
import NavBar from '@/components/Navbar'
export const metadata = {
  title: 'WikiRocket!',
  description: 'Wiki Rocket Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <NavBar></NavBar>
      {children}</body>
    </html>
  )
}
