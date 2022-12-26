import './Review.css'

import { ROOT_REVIEW } from '../../constants/root'
import kevin from '../Review/images/kevin.svg'

class Review {
    render () {
        const html = `
        <div class="review">
            <div class="review__wrapper wrapper">
                <div class="review__block">
                    <h2 class="title">Customer Review</h2>
                        <div class="review__slaider">
                            <div class="review__description">
                                <p class="review__info text">We help our clients make realize thier most important businessWe help our clients make realize thier  We help our clients make realize thier most important businessWe help our clients make realize 
                                </p>
                                <div class="about__us">
                                    <img src='${kevin}' class="kevin">
                                        <div class="employee">
                                            <span class="name">Kevin Andrew</span>
                                            <span class="position">Happy Customers</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        `
      ROOT_REVIEW.innerHTML = html

    }   
    
}

export default new Review ()