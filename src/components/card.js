import picture from "../images/KZaferes.png"
import star from "../images/Star_icon.svg"
import ellipse from "../images/Ellipse.svg"

export default function Card() {
    return (
        <div className="experiences">
              <div className="instance">
                  <img src={picture} className="instance--photos" alt=""/>
                  <div className="instance--rating">
                      <img src={star} alt="" />
                      <p>5.0 (6)</p>
                      <img src={ellipse} alt="" />
                      <p>USA</p>
                  </div>
                  <div className="instance--info">
                      <p>Life lessons with Katie Zaferes</p>
                      <p><b>From $136 / </b> person</p>
                  </div>
              </div>
        </div>
    );
}