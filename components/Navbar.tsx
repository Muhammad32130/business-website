
import logo from "../images/logo3.png"
import Image from "next/image";

export default function Navbar(){
    
    
    return(
        <nav className="nav">
            <Image className="logo_img" alt="/" src={logo} />
            <ul className="nav_ul">
                <li className="nav_li" >Home</li>
                <li className="nav_li" >About</li>
                <li className="nav_li" >Contacts</li>
            </ul>
        </nav>
    )

}