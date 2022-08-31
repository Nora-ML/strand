import React from "react";  
import Layout from './shared/layout'
import Hero from "./hero/hero";
import MainSection from "./main_section/main_section";
import FeaturedCollection from "./featured_section/featured_section";


const HomePage = () => {
    return (
        <>
            <Layout>
                <Hero />
                <MainSection />
                <FeaturedCollection/>
        </Layout>
        </>
    )
}
export default HomePage;