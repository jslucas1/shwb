//render react components 
import React from "react";
import { Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <h3>Home Screen</h3>
            
            <Link to="/login">Show login screen

            </Link>
        </div>
    );
};

export default MainPage;