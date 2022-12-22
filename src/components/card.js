import star from "../images/Star_icon.svg"

export default function Card(props) {
    const images = require.context('../../public/images', true);
    const photo = images(`./${props.image}`);
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={photo} className="card--image" alt="" />
            <div className="card--stats">
                <img src={star} className="card--star" alt="" />
                <span>{props.rating}</span>
                <span className="gray">({props.review_count}) • {props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}