import Nav from "../nav/Nav"
import Footer from "../footer/Footer"

const Layout = ({children}) => {
  return (
    <>
        <Nav/>
          <main className="min-h-[calc(100vh)] bg-gradient-to-b from-black to-[#0c2a47]">
            <div className="h-20 mb-24"/>
            {children}
          </main>
        <Footer/>
    </>
  )
}

export default Layout


