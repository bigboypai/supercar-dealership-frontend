import NavBar from "./navBar"
import CardContainer from "./cardContainer"
import Separator from "./Separator"
import Makes from "./Makes"
import HomeBanner from "./HomeBanner"

const Home = ({ cars }) => {
  return (
    <>
        <div >
          <NavBar />
          <Makes />
        </div>
        <HomeBanner />
        {/* <PageContentHeader /> */}
        <Separator text={"Featured"}/>
        <CardContainer cars={cars} />
    </>
  )
}

export default Home