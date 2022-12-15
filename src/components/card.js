import photo from "../images/KZaferes.png"
import star from "../images/Star_icon.svg"

export default function Card(props) {
    return (
        <div className="cards_section">
              <div className="card">
                  <img src={photo} className="card--photo" alt=""/>
                  <div className="card--info">
                      <img src={star} className="card--star" alt="" />
                      <span>{props.rating}</span>
                      <span>({props.review_count}) • </span>
                      <span>{props.country}</span>
                  </div>
                  <p>{props.title}</p>
                  <p><b>From ${props.price} / </b> person</p>
              </div>
        </div>
    );
}