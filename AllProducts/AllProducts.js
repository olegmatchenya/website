import './AllProducts.css'

import { ROOT_ALL_PRODUCTS } from '../../constants/root'
import closeImage from  '../Auth/images/close.svg'
import firebaseManager from "../../utils/firebaseManager";

class AllProducts {
    products = []

    async render () {

        const html = `
            <div class="all-products__container">
                <input class="all-products__search" placeholder="Enter product name:">
                <button class="all-products__close-btn">
                    <img src="${closeImage}">
                </button>

                <div class="all-products__catalog">
                    ${await this.generateProducts()}
                </div>
            </div>
        `

        ROOT_ALL_PRODUCTS.innerHTML = html

        
        this.eventListener()

        let products = this.products
        const input = document.querySelector('.all-products__search')
        input.addEventListener('input', function(){

            const inputValue = document.querySelector('.all-products__search').value
            const catalog = document.querySelector('.all-products__catalog')
            catalog.innerHTML = ''

            if (inputValue == '') {
                products.forEach(item => {
                catalog.innerHTML += ` 
                <div class="schedule__product">
                    <div class="product__img" style="background-color: ${item.color};">
                        <img src="${item.imgLink}">
                    </div>
                    <div class="product__name">
                        <div class="product__title">${item.title}</div>
                        <span class="product__price">${item.price}</span>
                    </div>
                    <div class="product__container">
                            <span class="product__weight">${item.weight}</span>
                            <button class="product__button">Buy</button>
                    </div>
                </div> 
            `
            })
            } else {
                let filteredArray = products.filter(element => element.title.includes(inputValue))
                filteredArray.forEach(item => {
                catalog.innerHTML += ` 
                <div class="schedule__product">
                    <div class="product__img" style="background-color: ${item.color};">
                        <img src="${item.imgLink}">
                    </div>
                    <div class="product__name">
                        <div class="product__title">${item.title}</div>
                        <span class="product__price">${item.price}</span>
                    </div>
                    <div class="product__container">
                            <span class="product__weight">${item.weight}</span>
                            <button class="product__button">Buy</button>
                    </div>
                </div> 
                `
            })
        }       
    })
    }   

        hideAllprod() {
            const AllProducts = document.querySelector('.all-products__container')
            AllProducts.style.display = 'none'
    }

        eventListener() {
            const closeButn = document.querySelector('.all-products__close-btn')
            closeButn.addEventListener('click', this.hideAllprod)
        }
    
        async generateProducts () {
            let html = ''

            this.products = await firebaseManager.readProducts()
            for (let i = 0; i < this.products.length; i++) {
                let productObject = this.products[i]
                html += this.generateProduct(
                    productObject.title,
                    productObject.price,
                    productObject.weight,
                    productObject.color,
                    productObject.imgLink )
            }
    
            return html
        }

        generateProduct (title, price, weight, color, imgLink) {
            return `
                <div class="schedule__product">
                    <div class="product__img" style="background-color: ${color};">
                        <img src="${imgLink}">
                    </div>
                    <div class="product__name">
                        <div class="product__title">${title}</div>
                        <span class="product__price">${price}</span>
                    </div>
                    <div class="product__container">
                            <span class="product__weight">${weight}</span>
                            <button class="product__button">Buy</button>
                    </div>
                </div> 
        
            `  
        }  
    }


export default new AllProducts ()