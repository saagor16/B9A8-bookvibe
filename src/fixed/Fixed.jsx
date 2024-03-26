import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";

const Fixed = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Fixed;