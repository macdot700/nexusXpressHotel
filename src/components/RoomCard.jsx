import { Link } from "react-router-dom"
const RoomCard = ({img, title, price, link}) =>{
    const actuaLink = `/accommodation/${link}`
    return(
        <>
        <Link to={actuaLink} className="hover:text-primary-blue">
            <div><img src={img} alt={title}/></div>
            <div className="flex justify-between items-center py-5 px-2.5">
                <p>{title}</p>  <small>₦{price}/night</small>
            </div>
            </Link>
        </>
    )
}

export default RoomCard