import './Works.css'
import { ROOT_WORKS } from '../../constants/root'
import boy from '../Works/images/boy.jpg'
import girl from '../Works/images/girl.jpg'
import ellipse from '../Works/images/ellipse.png'
import vegetables from '../Works/images/vegetables.jpg'
import orange from '../Works/images/orange.jpg'

class Works {
    render() {
        const html = ` 
    <div class="works">
        <div class="wrapper info-wrapper">
                <div class="images-wrapper">
                    <div class="peoples">
                        <img src='${girl}' class="girl photo">
                        <img src='${boy}' class="boy photo">
                    </div>
                    <div class="vegatables">
                        <img src='${vegetables}' class="veg ph">
                        <img src='${orange}' class="orange ph">
                    </div>
                </div>
                <div class="txt-wrapper">
                    <div class="title">How it Works</div>
                    <span class="wr-txt">Lorem Ipsum is simply dummy text of the printi and typesetting industry. Lorem Ipsum has been the industry's </span>
                    <div class="txt-wrapper-info">
                        <img src="images/Group 311.png" alt="">
                        <div class="info-txt">
                            <p>Choose Product</p>
                            <span class="txt-span">Lorem Ipsum is simply dummy text of the printi</span>
                        </div>
                    </div>
                    <div class="txt-wrapper-info">
                        <img src="images/Group 311.png" alt="">
                        <div class="info-txt">
                            <p>Choose Product</p>
                            <span class="txt-span">Lorem Ipsum is simply dummy text of the printi</span>
                        </div>
                    </div>
                    <div class="txt-wrapper-info">
                        <img src="images/Group 311.png" alt="">
                        <div class="info-txt">
                            <p>Choose Product</p>
                            <span class="txt-span">Lorem Ipsum is simply dummy text of the printi</span>
                        </div>
                    </div>

                    <div class="txt-wrapper-info">
                        <img src="images/Group 311.png" alt="">
                        <div class="info-txt">
                            <p>Choose Product</p>
                            <span class="txt-span">Lorem Ipsum is simply dummy text of the printi</span>
                        </div>
                    </div>
                   
                </div>
        </div>
    </div>
    `

    ROOT_WORKS.innerHTML = html
    }
}

export default new Works()