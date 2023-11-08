import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature"
import Faq from "../Faq/Faq"
import { useEffect } from "react";
import StudentReview from "../StudentReview/StudentReview";
import { Helmet } from "react-helmet";



const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Helmet>
                <title>Collab Learn</title>
            </Helmet>
            <Banner></Banner>
            <Feature></Feature>
            <StudentReview></StudentReview>
            <Faq></Faq>

        </div>
    );
};

export default Home;