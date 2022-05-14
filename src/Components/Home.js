import React from 'react'
import FeaturedRoom from './FeaturedRoom'
import Hero from './Hero'
import Services from './Services'
import Footer from './Footer' 
const Home = () => {
    return (
        <React.Fragment>
            <Hero heading={{title: "Luxurious Rooms",subTitle: "Deluxe Rooms Starting At $299",
            link:"/rooms",linkText:"our Rooms"}}hero={"defaultHero"}/>
            <Services/>
            <FeaturedRoom />
            <Footer />
        </React.Fragment>
    )
}

export default Home
