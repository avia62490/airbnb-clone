import star from "../images/Star_icon.svg"

export default function Card(props) {
    const images = require.context('../../public/images', true);
    const photo = images(`./${props.image}`);
    return (
        <div className="card">
            <div className="card--badge">SOLD OUT</div>
            <img src={photo} className="card--image" alt="" />
            <div className="card--stats">
                <img src={star} className="card--star" alt="" />
                <span>{props.rating}</span>
                <span className="gray">({props.review_count}) • {props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}