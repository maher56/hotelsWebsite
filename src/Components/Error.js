import React from 'react'
import Footer from './Footer'
import Hero from './Hero'

const Error = () => {
    return (
        <React.Fragment>
            <Hero heading={{title: "404",subTitle: "Page Not Found",
            link:"/",linkText:"Return home"}}hero={"defaultHero"}/>
            <Footer />
        </React.Fragment>
    )
}

export default Error
