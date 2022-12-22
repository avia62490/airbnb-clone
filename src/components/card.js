import star from "../images/Star_icon.svg"

export default function Card(props) {
    const images = require.context('../../public/images', true);
    const photo = images(`./${props.image}`);
    return (
        <div className="card">
            <img src={photo} className="card--image" alt="" />
            <div className="card--stats">
                <img src={star} className="card--star" alt="" />
                <span>{props.rating}</span>
                <span>({props.review_count}) • </span>
                <span>{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}