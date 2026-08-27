import { Link } from "react-router-dom"
const RoomCard = ({img, title, weekdayPrice, weekendPrice, link}) =>{
    const actuaLink = `/accommodation/${link}`
    return(
        <>
        <Link to={actuaLink} className="hover:text-primary-blue">
            <div><img src={img} alt={title}/></div>
            <div className="flex justify-between items-center py-5 px-2.5">
  <p className="font-medium">{title}</p>

  <div className="text-right">
    <small className="block font-semibold">
      Weekday: ₦{weekdayPrice}
    </small>

    <small className="block font-semibold">
      Weekend: ₦{weekendPrice}
    </small>
  </div>
</div>
            </Link>
        </>
    )
}

export default RoomCard