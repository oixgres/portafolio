import React from "react";
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";

const Home = () => {
    return (
        <div>
            <Navbar location={'home'}/>
            <Presentation/>
        </div>
    );
}

export default Home;