import { Fragment } from "react";
import Slider from "../../Components/Slider/Slider";
import Banner from "../../Components/Banner/Banner";
import TopPlayers from "../../Components/TopPlayers/TopPlayers";
import UpcomingMatches from "../../Components/UpcomingMatches/UpcomingMatches";
const Home = () =>{
    return(
        <Fragment>
            <Slider />
              <Banner />
              <TopPlayers />
              {/* <PremiereLeagues /> */}
              <UpcomingMatches />
        </Fragment>
    )
}
export default Home;