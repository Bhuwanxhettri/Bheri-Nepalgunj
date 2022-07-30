import React from 'react'
import { BsFillTelephoneFill} from "react-icons/bs";
function Topnav() {
  return (
    <div className="topnav hidden lg:block">
        <div className="container flex justify-between items-center py-2 px-4">
            <div>
                <h6>  Nepalguj,Bnake,Nepal</h6>
            </div>
            <div>
          <a href="tel:081-565230">  <span className='px-1 hover:text-cyan-400 ease-in-out delay-100  transition inline-block'> <BsFillTelephoneFill/> </span> 081-565230 | 9858021630</a>
            </div>
        </div>
    </div>
  )
}

export default Topnav