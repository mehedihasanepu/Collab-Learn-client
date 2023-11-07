import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature"
import Faq from "../Faq/Faq"
import { useEffect } from "react";

import Pdf from "../Pdf/Pdf";



const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>

            <Pdf></Pdf>







            <Faq></Faq>
        </div>
    );
};

export default Home;