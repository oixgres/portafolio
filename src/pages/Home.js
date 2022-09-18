import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import GetData from "../util/GetData";

const Home = () => {
    // console.log(GetData());
    // useEffect(() => {
    //     GetData();
    // }, []);

    return (
        <div>
            <Navbar location={'home'}/>
            <Presentation/>
            <GetData/>
        </div>
    );
}

export default Home;