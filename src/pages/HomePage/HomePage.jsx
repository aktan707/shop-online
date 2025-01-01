import React from 'react';
import Home from "../../components/home/Home.jsx";
import Moda from "../../components/moda/Moda.jsx";
import NewArrivals from "../../components/new-arrivals/NewArrivals.jsx";
import TopSelling from "../../components/top-selling/TopSelling.jsx";
import Browse from "../../components/Browse/Browse.jsx";
import Coment from "../../components/coment/Coment.jsx";

const HomaPage = () => {
    return (
        <div>
            <Home/>
            <Moda/>
            <NewArrivals />
            <TopSelling/>
            <Browse/>
            <Coment/>
        </div>
    );
};

export default HomaPage;
