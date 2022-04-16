import Nav from "../nav/Nav"
import Credits from "../credits/Credits"

const Layout = ({children}) => {
  return (
    <>
        <Nav/>
        {children}
        <Credits/>
    </>
  )
}

export default Layout