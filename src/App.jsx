
import React from 'react'
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import ContactUs from './Pages/ContactUs'
import SignIn from "./Pages/SignIn";
import CalorieCharts from './Pages/CalorieCharts'
import WorkoutPlan from './components/Workout/WorkoutPlan';
import NutritionMeter from "./Pages/NutritionMeter";


function App() {
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Router>
            <Navbar />
            <Routes>
                <Route path="/About" element={<About />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                {/* <Route path="/CalorieCharts" element={<CalorieCharts />} /> */}
                <Route path="/WorkoutPlan" element={<WorkoutPlan />} />
                {/* <Route path="/NutritionMeter" element={<NutritionMeter />} /> */}
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/SignUp"element={<SignUp />}/>
            </Routes>
      </Router>
      
      <WorkoutPlan></WorkoutPlan>
      <div>       
        <Footer />
      </div>
    </main>
    
  )
}

export default App