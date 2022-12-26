import './About.css'

import { ROOT_ABOUT } from '../../constants/root'
import lemon from '../About/images/lemon.svg'

class About  {
       render() {
    const html = `
        <div class="about"> 
            <div class="about__background">   
            </div>
            <div class="about__wrapper wrapper">
                <div class="offer__wrapper">
                    <h2 class="title">About Us</h2>
                    <p class="about__text text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                    </p>
                    <button class="about__button">Read More</button>
                </div>
                <div class="about__image">
                    <img src='${lemon}' class="image__lemon"></img>
                </div>
            </div>
        </div>
    `   
        ROOT_ABOUT.innerHTML = html
        }
    }

export default new About()