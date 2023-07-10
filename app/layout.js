import Provider from './context/AuthContext'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ToasterContext from './context/TosterContext'

export const metadata = {
  title: 'Mvptrade',
  description: 'Buy & Sell Gaming Account',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <ToasterContext/>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <NavBar/>
          {children}
          <Footer/>
        </main>
        </Provider>
      </body>
    </html>
  )
}
