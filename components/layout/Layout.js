import Nav from "../nav/Nav"
import Footer from "../footer/Footer"

const Layout = ({children}) => {
  return (
    <>
        <Nav/>
          <main className="min-h-[calc(100vh-232px)]">
            {children}
          </main>
        <Footer/>
    </>
  )
}

export default Layout