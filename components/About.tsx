import Image from "next/image";
import Hasnain from '../images/1683238678463.jpg'
import faiz from "../images/dsds.jpeg"

export default function aboutUs(){
    return (
        <>
        <div className="about_us bg">
        <h1 className="intro_goals team_text">Our Team</h1>
        <div className="team">
            <div className="about_team">
                <div className="about_team_img">
              <Image alt="Face" className="hasnain_img" src={Hasnain}></Image>
                </div>
                <div className="about_team_text"> 
                <div className="text-contain">
                    <h2>Muhammad Hasnain Askari</h2>
                    <hr />
                    <p>Frontend Web Developer</p>
                    <hr/>
                    <p>I'm a Frontend Web Developer and I Learned to code by myself around 6 months ago and I've fallen in love with making websites.</p>
<hr />
<h2>Languages I use to create websites</h2>
<p>Git, HTML, CSS, JavaScript, React, Typescript, NextJS, TailwindCSS, Redux, and Firebase.</p>
<hr />
<div className="anchors_link">
<h2>My Portfolio</h2>
<a className="anchor" target="_blank" href="https://www.muhammad-portfolio.com"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"/></svg></a>
</div>
                </div>
                </div>
            </div>
            <div className="about_team">
                <div className="about_team_img faiz_team">
                    <Image alt="face" className="faiz_img" src={faiz}></Image>
                </div>
                <div className="about_team_text">
                    <h2> Syed Ali Faiz Zaidi </h2>
                    <hr />
                    <p>Frontend Web Developer</p>
                    <hr />
                    <p>I'm a 22 year-old Pakistani Frontend Web Developer started about 6 months ago , always had a passion for coding and once I got introduced to web development it caught my attention.</p>
                    <hr/>
                    <h2>Known Languages</h2>
                    <hr/>
                    <p>HTML, CSS, JavaScript, React, Typescript, NextJS, TailwindCSS, Redux, and Firebase.</p>
                </div>
            </div>
        </div>


        </div>
        
        </>
    )
}