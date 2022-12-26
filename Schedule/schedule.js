import './Schedule.css'
import firebaseManager from "../../utils/firebaseManager"
import { ROOT_SCHEDULE } from "../../constants/root"
import AllProducts from '../AllProducts'
// import { doc, DocumentSnapshot } from 'firebase/firestore'


class Schedule {
    products = []


    async render() {
        const html = `
        <div class="schedule">
            <div class="schedule__wrapper wrapper">
                <h2 class="title schedule__title">Featured Product</h2>
                <div class="schedule__products">
                   ${await this.generateProducts()}
                </div>  
                <button class="schedule__button">Show more...</button>
            </div>
        </div>
            
        `
        ROOT_SCHEDULE.innerHTML = html

        document.querySelector('.schedule__button').addEventListener('click', this.showAllproducts)
        
    }

    async generateProducts() {
        let html = ``

        this.products = await firebaseManager.readProducts() 
        for (let i = 0; i < 8; i++) {
            let productObject = this.products[i]
            html += this.generateProduct(
                productObject.title,
                productObject.price,
                productObject.weight,
                productObject.color,
                productObject.imgLink,
                i
            )
        }

        // this.products?.forEach(item => {
        //     item.addEventListener('click', function(event) {
        //         console.log(event.target)
        //     })
            
        // });


        return html
    }

    showMoreProducts () {
        const scheduleProducts = document.querySelector ('.schedule__products')
         
        let length = this.products.length >= 8 ? 8 : this.products.length

        for (let i = this.productsCount; i < this.productsCount + 8; i++) {
            
        }
    }


    generateProduct (title, price, weight, color, imgLink, index) {
        return `
            <div class="schedule__product" data-index="${index}">
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
    
    showAllproducts () {
            document.body.style.overflowY = 'none'
            AllProducts.render()
        }
    }



export default new Schedule()