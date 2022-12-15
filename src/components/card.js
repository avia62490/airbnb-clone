import picture from "../images/KZaferes.png"
import star from "../images/Star_icon.svg"

export default function Card() {
    return (
        // <div className="experiences">
              <div className="instance">
                  <img src={picture} className="instance--photo" alt=""/>
                  <div className="instance--info">
                      <img src={star} className="instance--star" alt="" />
                      <span>5.0</span>
                      <span className="gray">(6) • </span>
                      <span className="gray">USA</span>
                  </div>
                  <p>Life lessons with Katie Zaferes</p>
                  <p><b>From $136 / </b> person</p>
              </div>
        // </div>
    );
}