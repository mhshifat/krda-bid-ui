import { useState } from "react";
import Background from "./Assets/Main-Screen-BG-1.svg";
import "./App.css";
import "./Components/Navbar/navbar.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MobileMenu from "./Components/Header/MobileMenu";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Claim from "./Pages/Claim/Claim";
import AllPlayers from "./Pages/AllPlayers/AllPlayers";
import StartBidding from "./Pages/StartBidding/StartBidding";
import MyBids from "./Pages/MyBids/MyBids";
import LeaderBoard from "./Pages/LeaderBoard/LeaderBoard";
import Profile from "./Pages/Profile/Profile";
function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <div className="App">
      <div
        className="main-background"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div
          className={
            sideBarOpen
              ? "nav-sidebar-open subpixel-antialiased overflow-hidden"
              : "subpixel-antialiased overflow-hidden"
          }
        >
          <div className="wrapper overflow-hidden">
            <div className="overflow-hidden">
              <Header setSideBarOpen={setSideBarOpen} />
              {sideBarOpen ? (
                <MobileMenu setSideBarOpen={setSideBarOpen} />
              ) : (
                ""
              )}
              <Switch>
                <Route exact path="/profile" component={Profile}></Route>
                <Route
                  exact
                  path="/leaderboard"
                  component={LeaderBoard}
                ></Route>
                <Route exact path="/my-bids" component={MyBids}></Route>
                <Route
                  exact
                  path="/how-to-play"
                  component={StartBidding}
                ></Route>
                <Route exact path="/all-players" component={AllPlayers}></Route>
                <Route exact path="/claim" component={Claim}></Route>
                <Route exact path="/" component={Home}></Route>
              </Switch>
              {/* <Footer /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
