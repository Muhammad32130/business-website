
import logo from "../images/logo3.png"
import Image from "next/image";

export default function Navbar({modal,setmodal}:any){
    
    
    return(
        <nav className="nav">
            <Image className="logo_img" alt="/" src={logo} />
            <ul className="nav_ul">
                <li className="nav_li" >Home</li>
                <li className="nav_li" ><a href="#about">About</a></li>
                <li className="nav_li" onClick={()=>setmodal(!modal)} >Contact Us</li>
            </ul>
        </nav>
    )

}