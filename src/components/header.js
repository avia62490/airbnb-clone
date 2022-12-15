import logo from "../images/airbnb.svg"
import collage from "../images/Group_77.png"

export default function Header() {
    return (
        <div className="header">
              <nav className="navbar">
                  <img src={logo} className="logo" alt="" />
              </nav>
              <div className="header--body">
                  <img src={collage} className="collage" alt="" />
                  <h1>Online Experiences</h1>
                  <p>Join unique interactive activities led by one-of-a-kind hosts, all without leaving home.</p>
              </div>
        </div>
    );
}
