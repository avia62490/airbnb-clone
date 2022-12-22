import star from "../images/Star_icon.svg"

export default function Card(props) {
    const images = require.context('../../public/images', true);
    const photo = images(`./${props.item.image}`);
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={photo} className="card--image" alt="" />
            <div className="card--stats">
                <img src={star} className="card--star" alt="" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • {props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    );
}