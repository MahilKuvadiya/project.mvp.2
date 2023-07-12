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
    <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7128324200205198"
     crossorigin="anonymous"></script>
      </head>
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
