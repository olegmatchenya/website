import './Header.css'

import { ROOT_HEADER } from '../../constants/root'
import stashIcon from '../Header/img/stash-icon.svg'
import bxUser from '../Header/img/bx-user.svg'
import arrowIcon from '../Header/img/arrow.svg'
import Auth from '../Auth/Auth'
import Stash from '../Stash/Stash'

class Header {
    render() {
        const html = `
        <div class="header">
        
                <div class="header__background">
                    <div class="left-section"></div>
                    <div class="right-section"></div>
                </div>
                <div class="wrapper header__wrapper">
                    <div class="nav">
                        <span class="logo">Fru<span>i</span>ty</span>
        
                        <div class="nav__menu menu">
                            <a href="#" class="menu__link text">Home</a>
                            <a href="#" class="menu__link text">Categories</a>
                            <a href="#" class="menu__link text">About Us</a>
                        </div>
        
                        <div class="nav__additional-menu additional-menu">
                            <button>Contact us</button>
                            <button class="additional-menu__button stash-button"><img src='${stashIcon}'></button>
                            <button class="additional-menu__button auth-button"><img src='${bxUser}'></button>
                        </div>
                    </div>
        
                    <div class="header__offer">
                        <h1 class="header__title">
                            <span>Organic</span>
                            Healty Fresh
                            Food For You<span>.</span>
                        </h1>
                        <p class="header__text text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                        <button class="header__button">Order Now <img src='${arrowIcon}'></button>
                    </div>
                </div>
            </div>
        `

        ROOT_HEADER.innerHTML = html

        const authButton = document.querySelector('.auth-button')
        authButton.onclick = function() {
            Auth.render()
        }  

        const menuButton = document.querySelector('.stash-button')
        menuButton.onclick = function() {
            Stash.render()
        } 
    } 
}

export default new Header()