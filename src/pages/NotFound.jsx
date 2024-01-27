import Button from "../components/Button"
import { NavLink } from "react-router-dom"
const NotFound = () =>{
    return(
        <div className="flex flex-col items-center font-medium my-[49px]">

        <h1 className="mb-2 text-blue-1 text-[200px]">404</h1>

        <p className="text-xl text-grey-7 max-w-[450px] text-center">The page you’re looking for doesn’t exist or an error occurred</p>

        <div className="mt-10 flex flex-col md:flex-row gap-x-10 gap-y-4">
          <Button
          onClick={() => window.location.reload()}
            text="Refresh page"
            className="py-[14px] px-6 text-primary-blue bg-white rounded-lg border-[1px] border-solid border-primary-blue text-lg "
          />
          <NavLink
            to="/"
            className="py-[14px] px-6 bg-primary-blue text-white rounded-lg border-[1px] border-solid border-primary-blue text-lg"
          >
            Go back home
          </NavLink>
        </div>
      </div>
    )
}

export default NotFound