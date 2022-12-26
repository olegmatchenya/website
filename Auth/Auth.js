import './Auth.css'

import {ROOT_AUTH} from '../../constants/root'

import FirebaseManager from '../../utils/firebaseManager'

import closeImage from  './images/close.svg'
import firebaseManager from '../../utils/firebaseManager'



class Auth {

    render() {
        const html =`
            <div class="auth">
                <div class="auth__modal">
                    <h1 class="auth__titile">AUTORIZATION</h1>
                    <input class="auth__input input email-input" placeholder="Enter your email: ">
                    <input class="auth__input input email-password" placeholder="Enter your pass: ">
                    <button class="auth__button login-button">Login</button>
                    <button class="auth__button signin-button">Create account</button>
                    <button class="auth__close-button">
                        <img src="${closeImage}">
                    </button>
                </div>
                <div class="register__modal">
                    <h1 class="register__title">Registration</h1>
                    <input class="register__input email" placeholder="Enter your email:">
                    <input class="register__input password" placeholder="Enter your password:">
                    <input class="register__input name" placeholder="Enter your name:">
                    <input class="register__input surmane" placeholder="Enter your surname:">
                    <button class="register__button">Registration</button>
                    <button class="auth__close-button">
                    <img src="${closeImage}">
                </button>
                </div>
            </div>
        `
        ROOT_AUTH.innerHTML = html

        this.eventListener()
    }  

    hideAuth() {
        const auth = document.querySelector('.auth')
        auth.style.display = 'none'
    }

    login() {
        const emailInput = document.querySelector('.email-input')
        const passwordInput = document.querySelector('.email-password')
        const auth = document.querySelector('.auth')
        auth.style.display = 'none'
        FirebaseManager.login(emailInput.value, passwordInput.value)
    }

    register() {
        const authModal = document.querySelector('.auth__modal')
        const regiserModal = document.querySelector('.register__modal')
        authModal.style.display = 'none'
        regiserModal.style.display = 'flex'
    }

    createAccount() {
        const emailInput = document.querySelector('.email')
        const passwordInput = document.querySelector('.password')
        const auth = document.querySelector('.auth')
        auth.style.display = 'none'
        FirebaseManager.createAccount(emailInput.value, passwordInput.value)
    }

    eventListener() {
        const loginBtn = document.querySelector('.login-button')
        loginBtn.addEventListener('click', this.login)
        const closeBtns = document.querySelectorAll('.auth__close-button')
        closeBtns.forEach((item) => {
            item.addEventListener('click', this.hideAuth)
        })
        const regBtn = document.querySelector('.signin-button')
        regBtn.addEventListener('click', this.register)
        const createAccount = document.querySelector('.register__button')
        createAccount.addEventListener('click', this.createAccount)
    }


}

export default new Auth()