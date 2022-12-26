import './App.css'

import Header from "../Header/Header"
import Schedule from "../Schedule/Schedule"
import Works from "../Works/works"
import About from "../About/About"
import Review from "../Review/review"


class App {
    render() {
        Header.render()
        Schedule.render()
        Works.render()
        About.render()
        Review.render()
}
}

export default new App()