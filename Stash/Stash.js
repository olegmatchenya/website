import './Stash.css'

import { ROOT_STASH } from '../../constants/root'
import closeImage from  '../Auth/images/close.svg'

class Stash {
    render () {
        const html = `
            <div class="stash__container">
                <div class="stash__bg"></div>
                <div class="stash__products">
                    <button class="all-products__close-btn">
                    <img src="${closeImage}">
                    </button>
                </div>
            </div>
        
        
        `
        ROOT_STASH.innerHTML = html

        const closeButton = document.querySelector('.all-products__close-btn')
        closeButton.addEventListener('click', this.hideStash)
    }

    hideStash () {
        ROOT_STASH.innerHTML = ''

    }
}

export default new Stash()