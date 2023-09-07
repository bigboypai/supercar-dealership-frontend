import NavBar from "./navBar"
import CardContainer from "./cardContainer"
import PageContentHeader from "./pageContentHeader"
import Separator from "./Separator"
import Makes from "./Makes"

const Home = ({ cars }) => {
  return (
    <>
        <NavBar />
        <Makes />
        {/* <PageContentHeader />
        <Separator text={"New arrivals"}/>
        <CardContainer cars={cars} />
        <Separator text={"Get in touch with us"}/> */}
    </>
  )
}

export default Home