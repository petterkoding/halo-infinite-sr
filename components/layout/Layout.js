import Nav from "../nav/Nav"
import Footer from "../footer/Footer"

const Layout = ({children}) => {
  return (
    <>
        <Nav/>
          <main className="min-h-[calc(100vh)]
          bg-[url('../public/halologo.png')] bg-no-repeat bg-center bg-contain bg-fixed
          ">
            {children}
          </main>
        <Footer/>
    </>
  )
}

export default Layout


