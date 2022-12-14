import logo from "../images/airbnb.svg"
import collage from "../images/Group_77.png"

export default function Header() {
    return (
        <div className="header">
              <nav className="navbar">
                  <img src={logo} className="logo" alt="airbnb" />
              </nav>
              <div className="header--body">
                  <img src={collage} className="collage" alt="photos" />
                  <h1>Online Experiences</h1>
                  <h4>Join unique interactive activities led by one-of-a-kind hosts, all without leaving home.</h4>
              </div>
        </div>
    );
}
