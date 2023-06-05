import Image from "next/image";
import project1 from '../images/Screenshot_2023-03-29_160447.png'
import project2 from '../images/Screenshot_2023-03-29_160803.png'


export default function Project(){
    return(
<div className="projects_main bg">
    <hr />
    <div className="project_contain">
        
        <h1>Our Projects</h1>
        <div className="project_row">
            <div className="project">
        <figure className="project_figure">
            <Image alt="" className="project_img" src={project1}></Image>
            <p></p>
            <div className="backgroud"></div>
            <div className="project_text">
                <h1>
                Netflix Clone 
                </h1>
                <hr />
                <p className="netflix_subtitle">

            A Netflix clone , that receives backend data from the Netflix AND Youtube API to show you the best movies and trailers with ratings. Allows the user to create and login with a personal account using Firebase . Added a checkout & pay option using Stripe. Created using HTML, CSS, JavaScript, TypeScript, NextJS & Bootstrap.
                </p>
                <hr />
                <p className="net_sub">This project was created by Muhammad Askari and Syed Zaidi in a collaboration </p>
                <h3>Check it out through the link!</h3>
                <a className="invert" href="https://netflix-clone-project-sigma.vercel.app/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><style></style><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
                </a>
            </div>
        </figure>
            </div>
            <div className="project">
        <figure className="project_figure">
            <Image alt="" className="project_img" src={project2}></Image>
            <p></p>
            <div className="backgroud"></div>
            <div className="project_text">
                <h1>
                E-Commerce
                </h1>
                <hr />
                <p className="netflix_subtitle">
                Website that gets backend data from a local API server , which lets users browse for book with the ratings, reviews and prices and selecte the ones they like, so it can be added to there cart.
           
                </p>
                <hr />
                <p className="net_sub">This project was created by Muhammad Askari and Syed Zaidi in a collaboration </p>
                <h3>Check it out through the link!</h3>
                <a className="invert" href="https://muhammad32130.github.io/Book-Project/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><style></style><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
                </a>
            </div>
        </figure>
            </div>
        </div>
</div>
</div>
    )
}