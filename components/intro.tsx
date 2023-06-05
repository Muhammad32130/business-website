import Image from "next/image";
import image from "../images/undraw_website_setup_re_d4y9.svg"
import Modal from "../components/Modal";
export default function Intro({modal, setmodal}){
    return(
     <div className="intro_main">{
modal &&
            <Modal modal={modal} />
     }
            <div className="row_intro">
            <h1 className="intro_goals">Our Goal</h1>
            <p className="intro_description">
            Our goal is to assist local businesses in increasing their leads at a reasonable cost by creating websites and advertising. We have the experience and skills required to create top notch websites and advertising services with SEO and SSR performance in consideration.
            </p>
            <h1 className="intro_goals">Skills & Experience</h1>
            <p className="intro_description" >Our tech Stack includes HTML, CSS, JavaScript, React, Redux, Javascript, Typescript, NEXTJS, and TailwindCSS. We have around 6+ months of growing experience from interships working on real projects.</p>
            

            </div>
            <div className="img_contain">
            <Image alt="/" className="img_front" src={image}></Image>

            </div>
     </div>
        )
}