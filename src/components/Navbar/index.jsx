// components/Navbar/index.js

import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./navbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/About" >
                        About
                    </NavLink>
                    <NavLink to="/ContactUs" >
                        ContactUs
                    </NavLink>
                    {/* <NavLink to="/CalorieCharts" >
                        Calorie Charts
                    </NavLink> */}
                    <NavLink to="/WorkoutPlan" >
                        Workout Plan
                    </NavLink>
                    {/* <NavLink to="/NutritionMeter">Nutrition Meter</NavLink> */}
                   
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/SignIn">
                        Login
                    </NavBtnLink>
                    <NavBtnLink to="/SignUp">
                        Registeration
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
