import {Link} from "react-router-dom"

const Bikes=(props)=>{

    return(
    <>
    <div className="bike-card">
    <img className="bike-image" src={props.img}/>
    <div className="bike-name">{props.name}</div>
    <div className="bike-desc">{props.desc}</div>
    <div className="bike-price">Starting Price: &#8377;{props.price}</div>
    <Link to="/bikeBidPage"><button className="bike-buy">Bid</button></Link>
    </div>
    </>
    )}


export default Bikes