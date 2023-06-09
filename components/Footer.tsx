import Link from 'next/link'
import About from './About'

import Image from "next/image";
import logo from "../images/logo3.png"
export default function Footer({setmodal}:any){
    return(
        <div className="footer_main">
            <Image className="logo_img absolute" alt="Logo" src={logo} ></Image>
            <div className="footer_contain">
                <footer className="footer_row">
                <ul className="footer_list">
                <li className="footer_li"><a href='/'>Home</a></li>    
                <li className="footer_li"><a href='#about'>About</a></li>    
                <li onClick={()=>{setmodal(true)}} className="footer_li">Contact Us</li>    
                </ul>
                <h3>
                Created By Muhammad Askari & Faiz Zaidi
                </h3>
                </footer>
            </div>
        </div>
    )
}